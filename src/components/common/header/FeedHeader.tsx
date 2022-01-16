import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalOpenState } from "../../../module/atom/feed";
import { modalState } from "../../../module/atom/map";
import * as S from "./style";

const FeedHeader = () => {
  const navi = useNavigate();
  const name = localStorage.getItem("userName");
  const [modal, setModal] = useRecoilState(modalOpenState);

  return (
    <S.HeaderWrapper>
      <div className="list-container">
        <img src="/assets/Logo.svg" alt="logo" />
      </div>
      <div className="list-wrap">
        <div className="list-box">
          <Link to="/">지도</Link>
          <Link className="feed" to="/feed">
            피드
          </Link>
        </div>
        <div className="list-box">
          {name ? (
            <>
              <button onClick={() => setModal(true)}>피드 작성</button>
              <span>안녕하세요, {name}님!</span>
            </>
          ) : (
            <button onClick={() => navi("/signin")}>로그인</button>
          )}
        </div>
      </div>
    </S.HeaderWrapper>
  );
};

export default FeedHeader;
