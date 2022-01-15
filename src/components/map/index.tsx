import React from "react";
import { Header } from "..";
import List from "./items/list/List";
import Map from "./items/map";
import * as S from "./style";

const MapPage = () => {
  return (
    <S.MapWrapper>
      <Header />
      <S.MapContainer>
        <List />
        <Map />
      </S.MapContainer>
    </S.MapWrapper>
  );
};

export default MapPage;
