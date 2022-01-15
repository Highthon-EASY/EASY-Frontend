import styled from "@emotion/styled";

export const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FeedItem = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  width: 401px;
  height: 186px;
  border: 0.5px solid;
  border-color: #cdcdcd;
  border-radius: 5px;
  margin-left: 20px;

  #title {
    font-size: 18px;
    line-height: 26.06px;
    letter-spacing: -2%;
    font-weight: 500;
    padding-top: 25px;
    padding-left: 25px;
  }

  .content {
    width: 258px;
    height: 70px;
    display: block;
    font-size: 15px;
    color: #4f4f4f;
    letter-spacing: -2%;
    line-height: 21.72px;
    font-weight: 400;
    margin-top: 10px;
    margin-left: 25px;
  }
`;
