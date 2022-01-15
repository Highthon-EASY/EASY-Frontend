import React, { useState } from "react";
import * as S from "./style";
import { CategorySelector } from "../constant/interview";
import DaumPost from "./DaumPost";
import { useSetRecoilState } from "recoil";
import { modalState } from "../../module/atom/interview";

const InterviewPage = () => {
  const [questionInput, setQuestionInput] = useState<number>(1);
  const setModal = useSetRecoilState(modalState);

  const AddInput = () => {
    setQuestionInput(questionInput + 1);
  };
  const DeleteInput = () => {
    if (questionInput >= 2) {
      setQuestionInput(questionInput - 1);
    }
  };

  return (
    <S.Wrapper>
      <DaumPost />
      <S.ReviewPostModal>
        <S.ContentSpan>등록할 회사</S.ContentSpan>
        <S.CompanyInfo>
          <S.CompanyInput placeholder="회사 이름은 무엇인가요?"></S.CompanyInput>
          <S.CompanyInput
            placeholder="회사 위치는 어디인가요?"
            onClick={() => setModal(true)}
          ></S.CompanyInput>
        </S.CompanyInfo>
        <S.ContentSpan>면접 후기</S.ContentSpan>
        <S.ReviewInputContainer>
          <S.ModalSelector>
            {CategorySelector &&
              CategorySelector.map((item: string, i: number) => {
                return (
                  <option key={i} value={item}>
                    {item}
                  </option>
                );
              })}
          </S.ModalSelector>
          <S.ReviewInputBox placeholder="면접 난이도는 어땠나요?"></S.ReviewInputBox>
          {Array(questionInput)
            .fill(0)
            .map((v, i) => {
              return (
                <S.ReviewInputBox placeholder="어떤 질문이 나왔나요? ( 실제 질문 형식처럼 적어주세요 )"></S.ReviewInputBox>
              );
            })}
          <S.ReviewInputAdd
            type="button"
            value="+"
            onClick={AddInput}
          ></S.ReviewInputAdd>
          <S.ReviewInputMinus
            type="button"
            value="-"
            onClick={DeleteInput}
          ></S.ReviewInputMinus>
        </S.ReviewInputContainer>
        <S.BtnWrapper>
          <S.PostBtn>등록 및 작성</S.PostBtn>
        </S.BtnWrapper>
      </S.ReviewPostModal>
    </S.Wrapper>
  );
};

export default InterviewPage;
