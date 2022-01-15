import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../../../module/atom/map";
import QuestionItem from "./QuestionItem";
import * as S from "./style";

const ListMore = () => {
  const [modal, setModal] = useRecoilState(modalState);

  const list = [
    {
      title:
        "안녕하세요. 저희는 여러분의 면접 도우미 입니다. 먼저 자기소개 부탁드립니다. ",
    },
    {
      title: "지원하시계 된 동기가 어떻게 되시나요?",
    },
    {
      title:
        "React의 컴포넌트에 대해 어떻게 생각하시나요? 그리고 본인은 어떤 방법으로 컴포넌트를 작성하시고 계신가요?",
    },
    {
      title: "본인의 장단점을 소개해주세요.",
    },
    {
      title: "면접질문 어ㄷ쩌구",
    },
    {
      title: "면접질문 어ㄷ쩌구",
    },
    {
      title: "면접질문 어ㄷ쩌구",
    },
    {
      title: "면접질문 어ㄷ쩌구",
    },
  ];

  return (
    <S.ModalWrapper modal={modal}>
      <div className="border" />
      <div className="field-box">
        <span>면접 분야</span>
        <span>웹 프론트엔드</span>
      </div>
      <div className="field-box">
        <span>면접 난이도</span>
        <span>면접 난이도는 중상입니다. </span>
      </div>
      <div className="field-box">
        <span>면접 질문</span>
        <ol className="interview-list">
          {list.map((item, idx) => (
            <QuestionItem key={idx} item={item} />
          ))}
        </ol>
      </div>
    </S.ModalWrapper>
  );
};

export default ListMore;
