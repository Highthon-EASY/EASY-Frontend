import React from "react";
import { useRecoilState } from "recoil";
import { CompanyType } from "../../../../lib/interface/CompanyType";
import { questionModalState } from "../../../../module/atom/map";
import * as S from "./style";

interface Props {
  item: CompanyType;
}

const ListItem = ({ item }: Props) => {
  const [modal, setModal] = useRecoilState(questionModalState);

  return (
    <S.ListItemBox>
      <div className="item-info">
        <span>{item.title}</span>
        <span>{item.location}</span>
      </div>
      <S.arrow onClick={() => setModal(!modal)}>{"➡️"}</S.arrow>
    </S.ListItemBox>
  );
};

export default ListItem;
