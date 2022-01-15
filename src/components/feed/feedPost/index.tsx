import React, { useEffect, useState } from "react";
import * as S from "./style";

const FeedPost = () => {
  const [inputs, setInpust] = useState({
    title: "",
    content: "",
  });

  const [title, setTitle] = useState<boolean>(false);
  const [content, setContent] = useState<boolean>(false);

  const onChangeHandler = (e: any) => {
    const { title, value } = e.target;

    setInpust({
      ...inputs,
      [title]: value,
    });
  };

  useEffect(() => {
    inputs.title.length > 0 ? setTitle(true) : setTitle(false);
    inputs.content.length > 0 ? setContent(true) : setContent(false);
  }, [inputs]);

  return (
    <S.PostWrapper>
      <S.PostBox>
        <div className="select-box">
          <h4>카테고리 선택</h4>
          <S.CategorySelect />
        </div>
        <div className="input-box">
          <h4>피드</h4>
          <S.TitleInput
            border={title}
            type="text"
            placeholder="제목"
            name="name"
            value={inputs.title}
            onChange={(e) => onChangeHandler(e)}
          />
          <S.ContentInput
            border={content}
            type="text"
            placeholder="내용"
            name="email"
            value={inputs.content}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <button>피드 작성</button>
      </S.PostBox>
    </S.PostWrapper>
  );
};

export default FeedPost;
