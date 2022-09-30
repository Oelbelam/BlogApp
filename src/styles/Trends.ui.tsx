import styled from "styled-components";

interface TrendContentProps {
  src?: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 20px 250px;
`;
export const TrendsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const TrendContentBigContainer = styled.div<TrendContentProps>`
  grid-column: 2 span;
  grid-row: 2 span;
  display: flex;
  align-items: flex-end;
  position: relative;
  padding-left: 30px;
  padding-right: 30px;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: pink;
    z-index: -1;
    background-image: url(${({ src }) => src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    opacity: 0.5;
    border-radius: 10px;
  }
`;

export const TrendsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TrendsContentContainer = styled.div<TrendContentProps>`
  padding-top: 70px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  align-items: flex-end;
  position: relative;
  &::after {
    border-radius: 10px;
    content: "";
    position: absolute;
    inset: 0;
    background-color: pink;
    z-index: -1;
    background-image: url(${({ src }) => src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.5;
  }
`;

export const TrendTitle = styled.h1`
  margin: 0;
`;
