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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 796px;
  height: 719px;
  background-color: yellow;
`;
export const CategorySelect = styled.div``;
export const TitleInput = styled.input<Props>``;
export const ContentInput = styled.input<Props>``;
