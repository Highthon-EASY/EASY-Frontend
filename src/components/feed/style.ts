import styled from "@emotion/styled";

export const FeedWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FeedItem = styled.div`
  padding: 20px 20px 20px 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  width: 400px;
  height: 180px;
  border: 0.5px solid;
  border-color: #cdcdcd;
  border-radius: 5px;
  margin: 15px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;

  #title {
    font-size: 18px;
    font-weight: 500;
    margin-left: 2px;
  }

  .content {
    margin-left: 2px;
    margin-bottom: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 15px;
    color: #4f4f4f;
  }

  .user-info {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      margin-right: 10px;
    }
    span:nth-child(1) {
      color: #787878;
      font-size: 12px;
    }

    span:nth-child(2) {
      color: #b7b7b7;
      font-size: 10px;
    }
  }

  .like_button {
    & img {
      width: 40px;
      height: 40px;
      float: right;
      margin-top: 104px;
    }
  }

  :hover {
    transform: translateY(-8px);
  }
`;
