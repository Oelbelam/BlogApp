import styled from "styled-components";

interface CardContainerProps {
  img: string;
}
interface CardTextTag {
  backgroundColor?: string;
}

export const CardContainer = styled.div<CardContainerProps>`
  margin: 10px;
  border-radius: 5px;
  ${({ img }) => `background-image: url(${img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 39px;
`;

export const CardTextTag = styled.span<CardTextTag>`
  padding: 7px 20px;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#fff"};
`;

export const CardWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
