import React from "react";
import { Header } from "..";
import List from "./items/list/List";
import ListMore from "./items/list/ListMore";
import Map from "./items/map";
import * as S from "./style";

const MapPage = () => {
  return (
    <S.MapWrapper>
      <Header />
      <S.MapContainer>
        <S.ListWrapper>
          <List />
          <ListMore />
        </S.ListWrapper>
        <Map />
      </S.MapContainer>
    </S.MapWrapper>
  );
};

export default MapPage;
