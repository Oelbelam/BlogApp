import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #110e31;
  padding: 20px 0;
`;

export const FooterContentContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Content = styled.h5`
  border-bottom: 2px dashed white;
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 7px;
`;
