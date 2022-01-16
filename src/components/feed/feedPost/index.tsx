import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ToastSuccess } from "../../../lib/hook/toastHook";
import { FeedListState, modalOpenState } from "../../../module/atom/feed";
import * as S from "./style";

const FeedPost = () => {
  const [modal, setModal] = useRecoilState(modalOpenState);
  const [listValue, setListValue] = useRecoilState<any>(FeedListState);
  const [inputs, setInpust] = useState<any>({
    title: "",
    name: "익명의 사용자",
    content: [
      {
        subContent: "",
      },
    ],
    date: "방금",
    heart: false,
  });
  const [contentValue, setContentValue] = useState("");

  const [title, setTitle] = useState<boolean>(false);
  const [content, setContent] = useState<boolean>(false);

  useEffect(() => {
    console.log(listValue);
  }, [listValue]);

  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;

    console.log(inputs);

    setInpust({
      ...inputs,
      [name]: value,
      content: [
        {
          subContent: contentValue,
        },
      ],
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    setListValue(listValue.concat(inputs));

    setModal(false);
    ToastSuccess("피드가 작성되었습니다.");
  };

  useEffect(() => {
    inputs.title.length > 0 ? setTitle(true) : setTitle(false);
    inputs.content.length > 0 ? setContent(true) : setContent(false);
  }, [inputs]);

  return (
    <S.PostWrapper modal={modal}>
      <S.PostBox>
        <div className="select-box">
          <h4 id="title_category">카테고리 선택</h4>
          <select>
            <option value="">학교생활</option>
            <option value="">회사생활</option>
            <option value="">면접꿀팁</option>
            <option value="">기타</option>
          </select>
        </div>
        <div className="input-box">
          <h4 className="title_feed">피드</h4>
          <S.TitleInput
            border={title}
            type="text"
            placeholder="제목"
            name="title"
            value={inputs.title}
            onChange={(e) => onChangeHandler(e)}
          />
          <S.ContentInput
            border={content}
            placeholder="내용"
            name="content"
            value={contentValue}
            onChange={(e) => {
              onChangeHandler(e);
              setContentValue(e.target.value);
            }}
          />
        </div>
        <button onClick={(e) => onSubmit(e)}>피드 작성</button>
      </S.PostBox>
    </S.PostWrapper>
  );
};

export default FeedPost;
