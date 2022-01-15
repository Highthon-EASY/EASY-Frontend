import React, { useState } from "react";
import * as S from "./style";
import { useSpeechRecognition } from "react-speech-kit";
import { useRecoilState } from "recoil";
import { inputModalState } from "../../../../module/atom/map";

const QuestionModal = () => {
  const [value, setValue] = useState("");
  const [inputOpen, setInputOpen] = useRecoilState(inputModalState);

  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  return (
    <S.InputBox inputOpen={inputOpen}>
      <textarea type="text" placeholder="모의 면접 답변란" value={value} />
      <button onMouseDown={listen} onMouseUp={stop}>
        🎤
      </button>
    </S.InputBox>
  );
};

export default QuestionModal;
