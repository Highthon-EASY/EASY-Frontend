import React, { useEffect, useState } from "react";
import * as S from "../style";

const SignPage = () => {
  const [inputs, setInpust] = useState({
    name: "",
    email: "",
  });

  const [name, setName] = useState<boolean>(false);
  const [email, setEmail] = useState<boolean>(false);

  const onChangeHandler = (e: any) => {
    const { name, value } = e.target;

    setInpust({
      ...inputs,
      [name]: value,
    });
  };

  useEffect(() => {
    inputs.name.length > 0 ? setName(true) : setName(false);
    inputs.email.length > 0 ? setEmail(true) : setEmail(false);
  }, [inputs]);

  return (
    <S.SignWrapper>
      <S.SignBox>
        <img src="" alt="logo" />
        <div className="input-box">
          <div className="test"></div>
          <S.NameInput
            border={name}
            type="text"
            placeholder="이름"
            name="name"
            value={inputs.name}
            onChange={(e) => onChangeHandler(e)}
          />
          <S.NameInput
            border={email}
            type="text"
            placeholder="이메일"
            name="email"
            value={inputs.email}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <button>로그인</button>
        <a href="/signup">아직 회원이 아니신가요?</a>
      </S.SignBox>
    </S.SignWrapper>
  );
};

export default SignPage;
