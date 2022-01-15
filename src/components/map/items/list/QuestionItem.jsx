import React, { useCallback, useState } from "react";
import * as S from "./style";
import { useSpeechRecognition } from "react-speech-kit";

const QuestionItem = ({ item }) => {
  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      // 음성인식 결과가 value 상태값으로 할당됩니다.
      setValue(result);
    },
  });
  const [stream, setStream] = useState();
  const [media, setMedia] = useState();
  const [onRec, setOnRec] = useState(true);
  const [source, setSource] = useState();
  const [analyser, setAnalyser] = useState();
  const [audioUrl, setAudioUrl] = useState();
  const [sound, setSound] = useState();

  const onRecAudio = () => {
    // 음원정보를 담은 노드를 생성하거나 음원을 실행또는 디코딩 시키는 일을 한다
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // 자바스크립트를 통해 음원의 진행상태에 직접접근에 사용된다.
    const analyser = audioCtx.createScriptProcessor(0, 1, 1);
    setAnalyser(analyser);

    function makeSound(stream) {
      // 내 컴퓨터의 마이크나 다른 소스를 통해 발생한 오디오 스트림의 정보를 보여준다.
      const source = audioCtx.createMediaStreamSource(stream);
      setSource(source);

      // AudioBufferSourceNode 연결
      source.connect(analyser);
      analyser.connect(audioCtx.destination);
    }

    // 마이크 사용 권한 획득 후 녹음 시작
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      setStream(stream);
      setMedia(mediaRecorder);
      makeSound(stream);
      // 음성 녹음이 시작됐을 때 onRec state값을 false로 변경
      analyser.onaudioprocess = function (e) {
        setOnRec(false);
      };
    });
  };

  function speak(text, opt_prop) {
    if (
      typeof SpeechSynthesisUtterance === "undefined" ||
      typeof window.speechSynthesis === "undefined"
    ) {
      alert("이 브라우저는 음성 합성을 지원하지 않습니다.");
      return;
    }

    window.speechSynthesis.cancel(); // 현재 읽고있다면 초기화

    const prop = opt_prop || {};

    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.rate = prop.rate || 1; // 속도: 0.1 ~ 10
    speechMsg.pitch = prop.pitch || 1; // 음높이: 0 ~ 2
    speechMsg.lang = prop.lang || "ko-KR";
    speechMsg.text = text;

    // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
    window.speechSynthesis.speak(speechMsg);
  }

  const test = (e) => {
    speak(item.title, {
      rate: 1,
      pitch: 0.8,
    });
  };

  console.log(value);

  const offRecAudio = () => {
    // dataavailable 이벤트로 Blob 데이터에 대한 응답을 받을 수 있음
    media.ondataavailable = function (e) {
      setAudioUrl(e.data);
      setOnRec(true);
    };

    // 모든 트랙에서 stop()을 호출해 오디오 스트림을 정지
    stream.getAudioTracks().forEach(function (track) {
      track.stop();
    });

    // 미디어 캡처 중지
    media.stop();

    // 메서드가 호출 된 노드 연결 해제
    analyser.disconnect();
    source.disconnect();
  };

  const onSubmitAudioFile = useCallback(() => {
    if (audioUrl) {
      console.log(URL.createObjectURL(audioUrl)); // 출력된 링크에서 녹음된 오디오 확인 가능
    }
    // File 생성자를 사용해 파일로 변환
    const sound = new File([audioUrl], "soundBlob", {
      lastModified: new Date().getTime(),
      type: "audio",
    });

    console.log(sound); // File 정보 출력
    setSound(sound);
  }, [audioUrl]);

  return (
    <div>
      <li onClick={(e) => test(e)}>{item.title}</li>
      <input type="text" placeholder="내용을 입력해주세여" value={value} />
      <button onMouseDown={listen} onMouseUp={stop}>
        🎤
      </button>

      <button onClick={onRec ? onRecAudio : offRecAudio}>녹음</button>
      <button onClick={onSubmitAudioFile}>결과 확인</button>
      <audio src={sound} />
    </div>
  );
};

export default QuestionItem;
