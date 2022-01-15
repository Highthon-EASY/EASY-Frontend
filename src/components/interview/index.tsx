import React, { useState } from "react";
import * as S from "./style";

const InterviewPage = () => {
  const [isOpenPopup, setIsOpenPopupOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [question, setQuestion] = useState(1);
  const confmKey = "devU01TX0FVVEgyMDIyMDExNTE4MjcwMzExMjEzODQ=";

  const AddInput = () => {
    setQuestion(question + 1);
  };
  const DeleteInput = () => {
    if (question >= 2) {
      setQuestion(question - 1);
    }
  };

  const onChangeOpenPopup = () => {
    setIsOpenPopupOpen(!isOpenPopup);
  };

  return (
    <S.Wrapper>
      <S.ReviewPostModal>
        <S.ContentSpan>등록할 회사</S.ContentSpan>
        <S.CompanyInfo>
          <S.CompanyInput placeholder="회사 이름"></S.CompanyInput>
          <S.CompanyInput placeholder="회사 위치"></S.CompanyInput>
        </S.CompanyInfo>
        <S.ContentSpan>면접 후기</S.ContentSpan>
        <S.ReviewInputContainer>
          <S.ModalSelector>
            <option value="면접분야"> -- 면접 분야 --</option>
            <option value="front-end">front-end</option>
            <option value="back-end">back-end</option>
            <option value="android">android</option>
            <option value="ios">ios</option>
            <option value="designer">designer</option>
            <option value="embedded">embedded</option>
            <option value="game">game</option>
            <option value="etc">etc</option>
          </S.ModalSelector>
          <S.ReviewInput placeholder="면접 난이도"></S.ReviewInput>
          {Array(question)
            .fill(0)
            .map((v, i) => {
              return <S.ReviewInput placeholder="면접 질문"></S.ReviewInput>;
            })}
          <S.ReviewInput
            className="AddBtn"
            type="button"
            value="+"
            onClick={AddInput}
          ></S.ReviewInput>
          <S.ReviewInput
            className="AddBtn"
            type="button"
            value="-"
            onClick={DeleteInput}
          ></S.ReviewInput>
        </S.ReviewInputContainer>
        <S.BtnWrapper>
          <S.PostBtn>등록 및 작성</S.PostBtn>
        </S.BtnWrapper>
      </S.ReviewPostModal>
    </S.Wrapper>
  );
};

export default InterviewPage;
