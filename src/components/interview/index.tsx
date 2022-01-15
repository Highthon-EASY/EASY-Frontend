import React, { useEffect, useState } from "react";
import * as S from "./style";
import { CategorySelector } from "../constant/interview";
import DaumPost from "./DaumPost";
import { useSetRecoilState, useRecoilState } from "recoil";
import { modalState } from "../../module/atom/interview";
import {
  reviewData,
  reviewListState,
  locationState,
} from "../../module/atom/interview";

const InterviewPage = () => {
  const [questionInput, setQuestionInput] = useState<number>(1);
  const setModal = useSetRecoilState(modalState);
  const [input, setInput] = useRecoilState(reviewData);
  const [test, setTest] = useRecoilState(reviewListState);
  const [location, setLocation] = useRecoilState<string>(locationState);

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      location: location,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(input);
  }, [input, location]);

  return (
    <S.Container>
      <DaumPost />
      <S.ReviewPostModal>
        <S.ContentSpan>등록할 회사</S.ContentSpan>
        <S.CompanyInfo>
          <S.CompanyInput
            type="text"
            placeholder="회사 이름은 무엇인가요?"
            name="title"
            value={input.title}
            onChange={(e) => onChange(e)}
            onClick={() => setModal(false)}
          ></S.CompanyInput>
          <S.CompanyInput
            name="location"
            type="text"
            value={location}
            placeholder="회사 위치는 어디인가요?"
            onClick={(e) => {
              setModal(true);
              onChange(e);
            }}
            readOnly
          ></S.CompanyInput>
        </S.CompanyInfo>
        <S.ContentSpan>면접 후기</S.ContentSpan>
        <S.ReviewInputContainer>
          <S.ModalSelector
            onChange={(e) => onChange(e)}
            name="field"
            value={input.field}
          >
            {CategorySelector &&
              CategorySelector.map((item: string, i: number) => {
                return (
                  <option key={i} value={item}>
                    {item}
                  </option>
                );
              })}
          </S.ModalSelector>
          <S.ReviewInputBox
            onChange={(e) => onChange(e)}
            name="level"
            value={input.level}
            placeholder="면접 난이도는 어땠나요?"
          ></S.ReviewInputBox>
          <S.ReviewInputBox
            onChange={(e) => onChange(e)}
            name="interview1"
            value={input.interview1}
            placeholder="어떤 질문이 나왔나요? ( 실제 질문 형식처럼 적어주세요 )"
          ></S.ReviewInputBox>
          <S.ReviewInputBox
            onChange={(e) => onChange(e)}
            name="interview2"
            value={input.interview2}
            placeholder="어떤 질문이 나왔나요? ( 실제 질문 형식처럼 적어주세요 )"
          ></S.ReviewInputBox>
          <S.ReviewInputBox
            onChange={(e) => onChange(e)}
            name="interview3"
            value={input.interview3}
            placeholder="어떤 질문이 나왔나요? ( 실제 질문 형식처럼 적어주세요 )"
          ></S.ReviewInputBox>
        </S.ReviewInputContainer>
        <S.BtnWrapper>
          <S.PostBtn>등록 및 작성</S.PostBtn>
        </S.BtnWrapper>
      </S.ReviewPostModal>
    </S.Container>
  );
};

export default InterviewPage;
