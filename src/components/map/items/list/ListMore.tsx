import React from "react";
import { useRecoilState } from "recoil";
import { questionModalState } from "../../../../module/atom/map";
import QuestionItem from "./QuestionItem";
import * as S from "./style";

const ListMore = () => {
  const [modal, setModal] = useRecoilState(questionModalState);

  const list = [
    {
      title:
        "안녕하세요. 저희는 여러분의 면접 도우미 입니다. 먼저 자기소개 부탁드립니다. ",
    },
    {
      title: "지원하시게 된 동기를 말씀해주세요.",
    },
    {
      title: "이번 프로젝트에 recoil을 사용하신 이유는 무엇인가요?",
    },
  ];

  return (
    <S.ModalWrapper modal={modal}>
      {/* <div className="div">로그인 후 이용해 주세요.</div> */}

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
