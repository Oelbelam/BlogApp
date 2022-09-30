import styled from "styled-components";

interface BannerContainerProps {
  src?: string;
  isActive?: boolean;
}

export const BannerContainer = styled.div<BannerContainerProps>`
  width: 100%;
  isolation: isolate;
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  &::after {
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
  opacity: 0;
  transition-duration: 1s ease;
  transform: scale(0.98);
  ${({ isActive }) =>
    isActive &&
    `opacity:1;
    transition-duration: 1s;
    transform:scale(1);
  `}
`;

export const BannerContent = styled.section`
  display: flex;
  align-items: center;
  padding: 60px;
  padding-left: 300px;
`;

export const BannerSlider = styled.div`
  width: 100vw;
  position: relative;
`;

export const LeftArrow = styled.div`
  position: absolute;
  left: 10%;
  top: 50%;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: red;
  z-index: 1;
`;
export const RightArrow = styled.div`
  position: absolute;
  right: 10%;
  top: 50%;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: red;
  z-index: 1;
`;
