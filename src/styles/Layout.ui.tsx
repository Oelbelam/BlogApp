import styled from "styled-components";

export const PageLayoutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  position: relative;
`;
export const LeftSideContainer = styled.section`
  grid-column: 2 span;
  grid-gap: 20px;
`;
export const RightSideContainer = styled.section``;
export const StyledImg = styled.img`
  width: 100%;
  height: 220px;
  margin: 0;
  border-radius: 5px;
`;

export const GridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin: 0;
`;

export const LabelContainer = styled.div`
  display: flex;
  padding: 5px 10px;
  align-items: center;
  justify-content: space-between;
  background-color: #6c0d26;
  border-radius: 7px;
  margin-bottom: 10px;
`;

export const LabelTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
export const LabelText = styled.h2`
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  margin: 0;
  margin-right: 5px;
`;

export const LabelCount = styled.span`
  background-color: white;
  padding: 7px 12px;
  border-radius: 7px;
`;
