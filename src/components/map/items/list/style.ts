import styled from "@emotion/styled";

interface Props {
  modal?: boolean;
  inputOpen?: boolean;
}

export const ListWrapper = styled.div`
  background: rgba(255, 255, 255, 0.75);
  overflow: auto;
  box-shadow: 7px 0px 14px rgba(164, 164, 164, 0.25);
  z-index: 5;
  width: 100%;
  background: white;

  .info-text {
    margin-top: 60px;
    color: #777777;
    padding: 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #ececec;
    font-size: 15px;
  }
`;

export const ListItemBox = styled.div`
  padding: 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #ececec;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.5s;

  .item-info {
    display: flex;
    flex-direction: column;

    span:nth-of-type(1) {
      font-weight: 500;
      font-size: 18px;
    }

    span:nth-of-type(2) {
      color: #7a7a7a;
      font-size: 14px;
    }
  }

  :hover {
    background: #fafaff;
  }
`;

export const arrow = styled.div`
  color: #dcdcdc;
  width: 15px;
  :hover {
    width: 19px;
    color: #514cf6;
    cursor: pointer;
  }
`;

export const ModalWrapper = styled.div<Props>`
  width: 100%;
  height: 100vh;
  background-color: white;
  position: absolute;
  z-index: 3;
  transition: transform ease 1s;
  transform: ${({ modal }) => (modal ? `translateX(100%)` : `translateX(0)`)};
  padding: 50px;
  box-sizing: border-box;
  overflow-y: auto;

  .border {
    width: 30px;
    height: 4px;
    background: #5391fc;
    border-radius: 1.5px;
    margin-top: 50px;
  }

  .field-box {
    overflow-y: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    span:nth-of-type(1) {
      font-size: 18px;
      font-weight: 500;
    }

    .interview-list {
      height: 500px;
      li {
        margin-left: 7%;
        margin-top: 10px;
      }
    }
  }
`;

export const QuestionWrapper = styled.div`
  & li {
    cursor: pointer;
  }
  & textarea {
    margin-top: 2px;
    border-radius: 5px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 0.5px solid #aeaeae;
    resize: none;
  }
  img {
    margin-left: 10px;
  }
  input {
    margin-left: 12px;
    border: none;
    background: none;
  }
`;

export const ImgContiner = styled.div`
  display: flex;
  margin-top: 4px;
`;
