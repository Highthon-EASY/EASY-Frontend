import React from "react";
import DaumPostCode from "react-daum-postcode";
import * as S from "./style";
import { useRecoilValue } from "recoil";
import { modalState } from "../../module/atom/interview";
import { postModalState } from "../../module/atom/map";

const DaumPost = () => {
  const postcodeModal = useRecoilValue(modalState);
  const modal = useRecoilValue(postModalState);
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";
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
    <S.ModalWrapper modal={modal}>
      {postcodeModal && (
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
