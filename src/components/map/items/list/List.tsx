import React from "react";
import ListItem from "./ListItem";
import * as S from "./style";

const List = () => {
  const listdata = [
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
    {
      title: "원티드랩",
      location: "송파구 올림픽로 300 롯데월드타워 35층",
    },
  ];

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
