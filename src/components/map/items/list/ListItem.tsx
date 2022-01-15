import React from "react";
import { CompanyType } from "../../../../lib/interface/CompanyType";
import * as S from "./style";

interface Props {
  item: CompanyType;
}

const ListItem = ({ item }: Props) => {
  return (
    <S.ListItemBox>
      <div className="item-info">
        <span>{item.title}</span>
        <span>{item.location}</span>
      </div>
      <img src="" alt="화살표" />
    </S.ListItemBox>
  );
};

export default ListItem;
