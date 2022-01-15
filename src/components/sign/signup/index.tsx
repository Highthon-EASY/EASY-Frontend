import React, { useEffect, useState } from "react";
import * as S from "../style";

const SignUpPage = () => {
  const [inputs, setInpust] = useState({
    name: "",
    school: "",
    email: "",
  });
  const [name, setName] = useState<boolean>(false);
  const [email, setEmail] = useState<boolean>(false);
  const [school, setSchool] = useState<boolean>(false);

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
    inputs.school.length > 0 ? setSchool(true) : setSchool(false);
  }, [inputs]);

  return (
    <S.SignWrapper>
      <S.SignBox>
        <img src="/assets/Logo.svg" alt="logo" />
        <div className="input-box">
          <S.NameInput
            border={name}
            type="text"
            placeholder="이름"
            name="name"
            value={inputs.name}
            onChange={(e) => onChangeHandler(e)}
          />
          <S.NameInput
            border={school}
            type="text"
            placeholder="학교명"
            name="school"
            value={inputs.school}
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

        <button>회원가입</button>
        <a href="/signin">이미 회원이신가요?</a>
      </S.SignBox>
    </S.SignWrapper>
  );
};

export default SignUpPage;
