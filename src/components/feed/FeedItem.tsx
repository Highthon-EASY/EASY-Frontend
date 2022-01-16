import { title } from "process";
import React, { useState } from "react";
import * as S from "./style";

interface Props {
  item: any;
}

const FeedItem = ({ item }: Props) => {
  const [heart, setHeart] = useState<boolean>(item.heart);

  return (
    <S.FeedItem>
      <span id="title">{item.title}</span>
      <div className="content">
        {item.content.map((item: any) => (
          <span>{item.subContent}</span>
        ))}
      </div>
      <div className="user-info">
        <div className="user-info-box">
          <span>by 익명 사용자</span>
          <span>{item.date}</span>
        </div>

        <img
          src={heart ? "/assets/pullheart.svg" : "/assets/heart.svg"}
          onClick={() => setHeart(!heart)}
          alt=""
        />
      </div>
    </S.FeedItem>
  );
};

export default FeedItem;
