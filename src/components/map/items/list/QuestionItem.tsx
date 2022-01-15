import React, { useState } from "react";
import * as S from "./style";

interface Props {
  item: any;
}

const QuestionItem = ({ item }: Props) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <li>{item.title}</li>
      <input type="text" placeholder="내용을 입력해주세여" />
    </div>
  );
};

export default QuestionItem;
