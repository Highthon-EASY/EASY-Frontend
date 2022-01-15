import React from "react";
import * as S from "./style";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <div className="list-container">
        <img src="" alt="logo" />
      </div>
      <div className="list-wrap">
        <div className="list-box">
          <div>지도</div>
          <div>피드</div>
        </div>
        <button>로그인</button>
      </div>
    </S.HeaderWrapper>
  );
};

export default Header;
