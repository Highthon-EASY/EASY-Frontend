import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { FeedPost } from "..";
import { categoryState } from "../../module/atom";
import { FeedListState } from "../../module/atom/feed";
import FeedHeader from "../common/header/FeedHeader";
import FeedItem from "./FeedItem";
import * as S from "./style";
import { parse } from "query-string";
import { FieldDataHook } from "../../lib/hook/fieldHook";

const list = [
  {
    id: 1,
    title: "학교 생활",
    count: 15,
    field: "school",
  },
  {
    id: 2,
    title: "회사 생활",
    count: 15,
    field: "company",
  },
  {
    id: 3,
    title: "면접 꿀팁",
    count: 15,
    field: "interview",
  },
  {
    id: 4,
    title: "기타",
    count: 15,
    field: "etc",
  },
];

const FeedPage = () => {
  const navi = useNavigate();
  const [selected, setSelected] = useState<number>(1);
  const [listValue, setListValue] = useRecoilState<any>(FeedListState);
  const [category, setCategory] = useRecoilState(categoryState);

  const location = useLocation();
  const query = parse(location.search);
  const field = query.category;

  useEffect(() => {
    console.log(field);
    setListValue(FieldDataHook(field));
  }, [field]);

  const selectedHandlerColor = (item: any) => {
    setSelected(item.id);
    setCategory(item.field);

    navi(`/feed?category=${item.field}`);
  };

  return (
    <S.FeedContainer>
      <FeedHeader />
      <FeedPost />
      <S.ContentWrapper>
        <S.CategoryList>
          <ul>
            <li>Category</li>
            {list.map((item, idx) => (
              <li key={idx} onClick={() => selectedHandlerColor(item)}>
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
          {/* <div className="div">로그인 후 이용해 주세요.</div> */}
          {listValue.map((item: any, index: number) => (
            <FeedItem key={index} item={item} />
          ))}
        </S.FeedWrapper>
      </S.ContentWrapper>
    </S.FeedContainer>
  );
};

export default FeedPage;
