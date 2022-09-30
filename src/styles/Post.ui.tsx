import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-radius: 7px;
  margin-top: 5px;
  padding: 5px 7px;
  -webkit-box-shadow: 0px -1px 8px 2px rgba(0, 0, 0, 0.28);
  box-shadow: 0px -1px 8px 2px rgba(0, 0, 0, 0.28);
`;

export const PostImg = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

export const PostWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;
