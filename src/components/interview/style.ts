import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  background: rgba(107, 107, 107, 0.58);
`;

export const ReviewPostModal = styled.div`
  width: 796px;
  height: 610px;
  background-color: white;
  border-radius: 10px;
  padding: 40px;
  margin: 50px 0;
`;

export const ContentSpan = styled.span`
  width: 97px;
  height: 29px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
`;

export const CompanyInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CompanyInput = styled.input`
  width: 100%;
  height: 40px;
  margin: 20px 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  :focus {
    border: 1px solid #5391fc;
  }
`;

export const ReviewInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ModalSelector = styled.select`
  height: 50px;
  margin: 20px 10px;
  padding: 10px 10px;
  border-radius: 5px;
  border: 1px solid #bdbdbd;
  :focus {
    border: 1px solid #5391fc;
  }
`;

export const ReviewInput = styled.input`
  height: 40px;
  margin: 0 10px 20px 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #bdbdbd;
  text-align: center;
`;

export const ReviewInputBox = styled(ReviewInput)`
  :focus {
    border: 1px solid #5391fc;
  }
`;

export const ReviewInputAdd = styled(ReviewInput)`
  :hover {
    color: #63ba6c;
    border: 1px solid #63ba6c;
    font-weight: bold;
  }
`;

export const ReviewInputMinus = styled(ReviewInput)`
  :hover {
    color: black;
    font-weight: bold;
    border: 1px solid black;
  }
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PostBtn = styled.button`
  width: 350px;
  height: 50px;
  background: linear-gradient(90deg, #5391fc 0%, #514cf6 100%);
  border-radius: 5px;
  border: none;
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;
