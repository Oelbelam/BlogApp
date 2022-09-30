import styled from "styled-components";

interface BannerBigTitle {
  fontSize?: string;
  isFooter?: boolean;
}
interface TrendsTagProps {
  backgroundColor?: string;
  isFooter?: boolean;
}

export const BannerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10px;
`;
export const BannerBigTitle = styled.h2<BannerBigTitle>`
  margin: 0;
  margin-top: 5px;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "12px")};
  color: ${({ isFooter }) => (isFooter ? "#fff" : "#000")};
  font-weight: 600;
  max-width: 600px;
`;

export const BannerContentWriterInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;
interface BannerWriterPropsUi {
  isFooter?: boolean;
}
export const BannerWriterInfo = styled.span<BannerWriterPropsUi>`
  margin: 0;
  margin-right: 7px;
  font-size: 10px;
  font-weight: 400px;
  font-family: "Courier New", Courier, monospace;
  color: ${({ isFooter }) => (isFooter ? "#fff" : "#000")};
  margin-top: -5px;
`;

export const TrendsTag = styled.h6<TrendsTagProps>`
  border-radius: 16px;
  padding: 7px 16px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#ffff"};
  color: ${({ isFooter }) => (isFooter ? "#fff" : "#000")};
`;
