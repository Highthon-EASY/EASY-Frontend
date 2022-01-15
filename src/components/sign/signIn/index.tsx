import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastSuccess } from "../../../lib/hook/toastHook";
import * as S from "../style";

const SignPage = () => {
  const navi = useNavigate();

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

  const local = () => {
    localStorage.setItem("userName", inputs.name);
    ToastSuccess("로그인에 성공했습니다.");
    setTimeout(() => {
      navi("/");
    }, 2000);
  };

  return (
    <S.SignWrapper>
      <S.SignBox>
        <img src="/assets/Logo.svg" alt="logo" />
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
        <button onClick={local}>로그인</button>
        <a href="/signup">아직 회원이 아니신가요?</a>
      </S.SignBox>
    </S.SignWrapper>
  );
};

export default SignPage;
