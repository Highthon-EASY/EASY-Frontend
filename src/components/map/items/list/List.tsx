import React from "react";
import ListItem from "./ListItem";
import * as S from "./style";

export const listdata = [
  {
    title: "원티드랩",
    location: "서울특별시 송파구 올림픽로 300 35층 롯데월드타워",
    x: "",
    y: "",
  },
  {
    title: "짐티",
    location: "서울특별시 강남구 역삼동 테헤란로13길 8-10 동영빌딩",
    x: "",
    y: "",
  },
  {
    title: "opgg",
    location: "서울특별시 강남구 언주로 637 싸이칸홀딩스타워",
    x: "",
    y: "",
  },
  {
    title: "맹그로브 신설",
    location: "서울특별시 동대문구 왕산로 22 맹그로브 신설점",
    x: "",
    y: "",
  },
  {
    title: "맹그로브",
    location: "서울특별시 서초구 나루터로 76",
    x: "",
    y: "",
  },
  {
    title: "맹그로브 숭인",
    location: "서울특별시 종로구 지봉로12길 17",
    x: "",
    y: "",
  },
  {
    title: "카카오 한남 오피스",
    location: "서울 용산구 한남대로 98 일신빌딩 5층",
    x: "",
    y: "",
  },
  {
    title: "카카오 판교오피스",
    location: "경기 성남시 분당구 판교역로 235 에이치스퀘어 엔동",
    x: "",
    y: "",
  },
  {
    title: "맹그로브 숭인",
    location: "서울특별시 종로구 지봉로12길 17",
    x: "",
    y: "",
  },
];

const List = () => {
  return (
    <S.ListWrapper>
      <div className="info-text">32개의 회사정보</div>
      {listdata.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </S.ListWrapper>
  );
};

export default List;
