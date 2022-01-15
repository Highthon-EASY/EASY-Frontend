import React from "react";
import { useNavigate } from "react-router-dom";
import { CloseButton } from "react-toastify/dist/components";
import * as S from "./style";

const Header = () => {
  const navi = useNavigate();
  const name = localStorage.getItem("userName");

  return (
    <S.HeaderWrapper>
      <div className="list-container">
        <img src="/assets/Logo.svg" alt="logo" />
      </div>
      <div className="list-wrap">
        <div className="list-box">
          <div>지도</div>
          <div>피드</div>
        </div>
        <div className="list-box">
          {name ? (
            <>
              <button>등록 및 작성</button>
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
