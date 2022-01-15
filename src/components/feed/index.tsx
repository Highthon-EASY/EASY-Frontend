import React, { useState } from "react";
import { feedData } from "../../module/atom/feed";
import * as S from "./style";

//게시글 보여줌
// 익명
// 제목
// 내용
// 좋아요

const FeedPage = () => {
  return (
    <S.FeedWrapper>
      {feedData.map((item: any, index: number) => (
        <S.FeedItem key={index}>
          <span id="title">{item.title}</span>
          <div className="content">
            {item.content.map((item: any) => (
              <span>{item.title}</span>
            ))}
          </div>
          <div className="user-info">
            <span>by 익명 사용자</span>
            <span>{item.date}</span>
          </div>
        </S.FeedItem>
      ))}
    </S.FeedWrapper>
  );
};

export default FeedPage;
