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
];

const List = () => {
  return (
    <S.ListWrapper className="list-container">
      <div className="info-text">32개의 회사정보</div>
      {listdata.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </S.ListWrapper>
  );
};

export default List;
