import React, { useState } from "react";
import { Header } from "..";
import { feedData } from "../../module/atom/feed";
import FeedItem from "./FeedItem";
import * as S from "./style";

const list = [
  {
    id: 1,
    title: "학교 생활",
    count: 15,
  },
  {
    id: 2,
    title: "회사 생활",
    count: 15,
  },
  {
    id: 3,
    title: "면접 꿀팁",
    count: 15,
  },
  {
    id: 4,
    title: "기타",
    count: 15,
  },
];

const FeedPage = () => {
  const [selected, setSelected] = useState<number>(1);
  const [img, setImg] = useState<boolean>(false);

  const selectedHandlerColor = (item: any) => {
    setSelected(item.id);
  };

  return (
    <S.FeedContainer>
      <Header />
      <S.ContentWrapper>
        <S.CategoryList>
          <ul>
            <li>Category</li>
            {list.map((item) => (
              <li onClick={() => selectedHandlerColor(item)}>
                <img
                  src="/assets/hoverArrow.svg"
                  alt=""
                  style={
                    selected === item.id
                      ? { display: "flex" }
                      : { display: "none" }
                  }
                />
                {item.title} <span>{item.count}</span>
              </li>
            ))}
          </ul>
        </S.CategoryList>

        <S.FeedWrapper>
          {feedData.map((item: any, index: number) => (
            <FeedItem key={index} item={item} />
          ))}
        </S.FeedWrapper>
      </S.ContentWrapper>
    </S.FeedContainer>
  );
};

export default FeedPage;
