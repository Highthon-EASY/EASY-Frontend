import React from "react";
import { feedData } from "../../module/atom/feed";
import FeedItem from "./FeedItem";
import * as S from "./style";

const FeedPage = () => {
  return (
    <S.FeedWrapper>
      {feedData.map((item: any, index: number) => (
        <FeedItem key={index} item={item} />
      ))}
    </S.FeedWrapper>
  );
};

export default FeedPage;
