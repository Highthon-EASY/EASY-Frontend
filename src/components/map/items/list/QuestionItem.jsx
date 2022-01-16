import React, { useState } from "react";
import * as S from "./style";
import { useSpeechRecognition } from "react-speech-kit";
import { useRecoilState } from "recoil";
import { inputModalState } from "../../../../module/atom/map";

const QuestionItem = ({ item }) => {
  const [inputOpen, setInputOpen] = useRecoilState(inputModalState);
  const [value, setValue] = useState("");

  function speak(text, opt_prop) {
    if (
      typeof SpeechSynthesisUtterance === "undefined" ||
      typeof window.speechSynthesis === "undefined"
    ) {
      alert("이 브라우저는 음성 합성을 지원하지 않습니다.");
      return;
    }

    const prop = opt_prop || {};

    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.rate = prop.rate || 1; // 속도: 0.1 ~ 10
    speechMsg.pitch = prop.pitch || 1; // 음높이: 0 ~ 2
    speechMsg.lang = prop.lang || "ko-KR";
    speechMsg.text = text;

    window.speechSynthesis.speak(speechMsg);
  }

  const test = (e) => {
    speak(item.title, {
      rate: 1,
      pitch: 0.8,
    });
  };

  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  return (
    <S.QuestionWrapper>
      <div className="interview-box">
        <li onClick={(e) => test(e)}>{item.title}</li>
        <S.ImgContiner>
          <img src="/assets/ear.svg" alt="" onClick={(e) => test(e)} />
          <img src="/assets/document.svg" alt="" />
          <input
            type="button"
            onMouseDown={listen}
            onMouseUp={stop}
            value="🎤"
          />
        </S.ImgContiner>
      </div>
      <textarea type="text" placeholder="모의 면접 답변란" value={value} />
    </S.QuestionWrapper>
  );
};

export default QuestionItem;
