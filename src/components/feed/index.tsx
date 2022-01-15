import React, { useState } from "react";
import { feedData } from "../../module/atom/feed";
import * as S from "./style";

//게시글 보여줌
// 익명
// 제목
// 내용
// 댓글 작성

const FeedPage = () => {
  const [list, setList] = useState([]);
  

  const onInputHandler = (e: any) => {

  };

  return (
    <S.FeedWrapper>
      {feedData.map((item: any, index: number) => (
        <S.FeedItem key={index}>
          <span>{item.title}</span>
          <span>{item.content}</span>
          <span>{item.date}</span>
        </S.FeedItem>
      ))}

      <input type="text" />
      <input type="text" />
    </S.FeedWrapper>
  );
};

export default FeedPage;
