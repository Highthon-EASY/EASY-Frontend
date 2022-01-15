import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  background: rgba(107, 107, 107, 0.58);
  overflow-y: scroll;
`;

export const ReviewPostModal = styled.div`
  width: 796px;
  height: auto;
  background-color: white;
  border-radius: 10px;
  padding: 50px;
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

export const ReviewInputContainer = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ModalSelector = styled.select`
  height: 40px;
  margin: 20px 10px;
  padding: 10px;
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
  border: 1px solid #bdbdbd;
  :focus {
    border: 1px solid #5391fc;
  }
  .AddBtn {
    color: white;
    background-color: white;
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
