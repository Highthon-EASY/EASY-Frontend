import styled from "@emotion/styled";

export const ListWrapper = styled.div`
  background: rgba(255, 255, 255, 0.75);
  overflow: auto;
  box-shadow: 7px 0px 14px rgba(164, 164, 164, 0.25);

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
