import React, { useState } from "react";
import * as S from "./style";

interface Props {
  item: any;
}

const FeedItem = ({ item }: Props) => {
  const [heart, setHeart] = useState<boolean>(false);

  return (
    <S.FeedItem>
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
      <div className="like_button">
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
