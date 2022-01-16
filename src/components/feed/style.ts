import styled from "@emotion/styled";

export const FeedContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
`;

export const CategoryList = styled.div`
  width: 25%;
  height: 100vh;
  background: white;

  ul {
    margin-top: 60px;
    align-content: flex-start;

    li:nth-child(1) {
      font-weight: 600;
      font-size: 18px;
    }

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      padding: 30px;
      box-sizing: border-box;
      border-bottom: 1px solid #ececec;

      img {
        width: 20px;
      }

      span {
        margin-left: 10px;
        font-size: 12px;
        color: #989898;
      }
    }
  }
`;

export const FeedWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  align-content: flex-start;
  flex-direction: row;
`;

export const FeedItem = styled.div`
  padding: 20px 20px 20px 20px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  width: 30%;
  height: 180px;
  border: 0.5px solid;
  border-color: #cdcdcd;
  border-radius: 5px;
  margin: 15px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;

  #title {
    font-size: 16px;
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
    justify-content: space-between;
    
    .user-info-box{
      
    }

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
