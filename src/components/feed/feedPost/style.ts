import styled from "@emotion/styled";

interface Props {
  border?: boolean;
  modal?: boolean;
}

export const PostWrapper = styled.div<Props>`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  display: ${({ modal }) => (modal ? "flex" : "none")};
  align-items: center;
  background: rgba(107, 107, 107, 0.58);
  z-index: 30;
`;

export const PostBox = styled.div`
  margin: 0 auto;
  display: inline-block;
  width: 796px;
  height: 719px;
  background-color: white;
  border-radius: 5px;

  .title_feed {
    margin-top: 0;
    margin-left: 40px;
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 500;
    line-height: 28.96px;
  }

  #title_category {
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
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    margin-left: 41px;
    font-size: 16px;
    line-height: 23.17px;
    font-weight: 500;
    padding-left: 18px;

    :hover {
      border: 1px solid #5391fc;
    }

    :active {
      border: 1px solid #5391fc;
    }
  }

  .input-box {
    margin-top: 36px;
    margin-bottom: 15px;
  }

  & button {
    width: 350px;
    height: 50px;
    background: linear-gradient(90deg, #5391fc 0%, #514cf6 100%);
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 500;
    line-height: 23.17px;
    text-align: center;
    margin-left: 223px;
  }
`;

export const TitleInput = styled.input<Props>`
  width: 715px;
  height: 50px;
  margin-left: 41px;
  margin-bottom: 25px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  font-size: 16px;
  padding-left: 18px;
  box-sizing: border-box;
  line-height: 23.17px;
  font-weight: 500;

  ::placeholder {
    color: #bdbdbd;
  }

  :hover {
    border: 1px solid #5391fc;
  }

  :active {
    border: 1px solid #5391fc;
  }
`;
export const ContentInput = styled.textarea<Props>`
  width: 715px;
  height: 340px;
  margin-left: 41px;
  margin-top: 0;
  box-sizing: border-box;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  text-align: left;
  resize: none;
  padding: 18px;
  font-size: 16px;
  line-height: 23.17px;
  font-weight: 500;

  ::placeholder {
    color: #bdbdbd;
  }

  :hover {
    border: 1px solid #5391fc;
  }

  :active {
    border: 1px solid #5391fc;
  }
`;
