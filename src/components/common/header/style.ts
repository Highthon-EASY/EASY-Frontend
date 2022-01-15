import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  background: rgba(255, 255, 255, 0.76);
  backdrop-filter: blur(4px);
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  z-index: 10;

  img {
    margin-left: 30px;
  }

  .list-wrap {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .list-box {
      display: flex;
      align-items: center;
      margin-right: 20px;

      span {
        font-size: 14px;
        font-weight: 500;
      }

      & a {
        text-decoration: none;
        color: black;
        margin: 0 30px;
        width: fit-content;
        text-align: center;
        border-bottom: 2px solid #514cf6;
      }
    }

    & button {
      cursor: pointer;
      color: white;
      border: none;
      width: 120px;
      height: 40px;
      margin: 0 20px;
      box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.25);
      border-radius: 3px;
      background: linear-gradient(90deg, #5391fc 0%, #514cf6 100%);
    }
  }
`;
