import styled from "@emotion/styled";

interface Props {
  border: boolean;
}

export const PostWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const PostBox = styled.div`
  margin: 0 auto;
  display: block;
  width: 796px;
  height: 719px;
  background-color: yellow;
  border-radius: 5px;

  & h4 {
    margin-top: 40px;
    margin-left: 40px;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 500;
    line-height: 28.96px;
  }

  & select {
    width: 715px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #5391fc;
    box-sizing: border-box;
    margin-left: 41px;
    font-size: 16px;
    line-height: 23.17px;
    font-weight: 500;
    padding-left: 18px;
  }

  .input-box {
    margin-top: 36px;
  }
`;

export const TitleInput = styled.input<Props>`
  width: 715px;
  height: 50px;
  margin-left: 41px;
`;
export const ContentInput = styled.input<Props>`
  width: 715px;
  height: 340px;
  margin-left: 41px;
`;
