import React, { useState } from "react";
import DaumPostCode from "react-daum-postcode";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { modalState } from "../../module/atom/interview";
import { locationState } from "../../module/atom/interview";

const DaumPost = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [location, setLocation] = useRecoilState<string>(locationState);

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";
    let addr = "";
    if (data.userSelectedType === "R") {
      addr = data.roadAddress;
      setLocation(addr);
    } else {
      addr = data.roadAddress;
      setLocation(addr);
    }

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
  };

  return (
    <S.ModalWrapper>
      {modal && (
        <DaumPostCode
          style={{ width: "500px", height: "300px" }}
          onComplete={handleComplete}
          className="post-code"
        />
      )}
    </S.ModalWrapper>
  );
};
export default DaumPost;
