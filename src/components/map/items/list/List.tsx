import React from "react";
import { useRecoilState } from "recoil";
import { MapListState } from "../../../../module/atom/map";
import ListItem from "./ListItem";
import * as S from "./style";

const List = () => {
  const [company, setCompany] = useRecoilState(MapListState);

  return (
    <S.ListWrapper>
      <div className="info-text">{company.length}개의 회사정보</div>
      {company.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </S.ListWrapper>
  );
};

export default List;
