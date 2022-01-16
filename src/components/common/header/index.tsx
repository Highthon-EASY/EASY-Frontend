import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { categoryState } from "../../../module/atom";
import { modalState } from "../../../module/atom/map";
import * as S from "./style";

const Header = () => {
  const navi = useNavigate();
  const name = localStorage.getItem("userName");
  const setModal = useSetRecoilState(modalState);
  const [category, setCategory] = useRecoilState(categoryState);

  return (
    <S.HeaderWrapper>
      <div className="list-container">
        <img src="/assets/Logo.svg" alt="logo" />
      </div>
      <div className="list-wrap">
        <div className="list-box">
          <Link className="map" to="/">
            지도
          </Link>
          <Link to={`/feed?category=${category}`}>피드</Link>
        </div>
        <div className="list-box">
          {name ? (
            <>
              <button onClick={() => setModal(true)}>등록 및 작성</button>
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

export default Header;
