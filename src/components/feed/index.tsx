import React from "react";
import Title from "./item/Title";
import Content from "./item/Content";
import Comment from "./item/Comment";


//게시글 보여줌
// 익명
// 제목 
// 내용
// 댓글 작성

const FeedPage = () => {
  return (
    <div>
      <Title />
      <Content />
      <Comment />
    </div>
  );
};

export default FeedPage;
