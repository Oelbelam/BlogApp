import styled from "styled-components";

interface TagColor {
  borderColor?: string;
  width?: string;
  backgroundColor?: string;
}

export const SeperatorContainer = styled.div<TagColor>`
  width: 100%;
  padding: 7px 14px;
  margin: 20px 0;
  background-color: ${({ backgroundColor }) =>
    !backgroundColor ? "#112d4e" : backgroundColor};
  border-left: 7px solid
    ${({ borderColor }) => (borderColor ? borderColor : "#000000")};
  display: flex;
  justify-content: space-between;
`;

export const SeperatorTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: #ffff;
`;

export const SeperatorButton = styled.button`
  outline: 0;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const SeperatorButtonTitle = styled.span`
  color: #f9f7f7;
  font-weight: 500;
  font-size: 20px;
  margin-right: 5px;
`;
