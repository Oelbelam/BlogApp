import { AccessTime, Person } from "@mui/icons-material";
import React from "react";
import {
  BannerBigTitle,
  BannerContentWrapper,
  BannerContentWriterInfoContainer,
  BannerWriterInfo,
  TrendsTag,
} from "../styles/ContentInfo.ui";
import { strToColor } from "../utils/strToColor";

interface ContentInfoProps {
  title: string;
  tag: string;
  postDate: string;
  writterInfo: string;
  titleFS?: string;
  isFooter?: boolean;
}

function ContentInfo({
  title,
  tag,
  postDate,
  writterInfo,
  titleFS,
  isFooter,
}: ContentInfoProps) {
  return (
    <BannerContentWrapper>
      <TrendsTag isFooter={isFooter} backgroundColor={strToColor(tag)}>
        {tag}
      </TrendsTag>
      <BannerBigTitle isFooter={isFooter} fontSize={titleFS}>
        {title}
      </BannerBigTitle>
      <BannerContentWriterInfoContainer>
        <BannerWriterInfo isFooter={isFooter}>
          <Person />
        </BannerWriterInfo>
        <BannerWriterInfo isFooter={isFooter}>{writterInfo}</BannerWriterInfo>
        <BannerWriterInfo isFooter={isFooter}>
          <AccessTime />
        </BannerWriterInfo>
        <BannerWriterInfo isFooter={isFooter}>{postDate}</BannerWriterInfo>
      </BannerContentWriterInfoContainer>
    </BannerContentWrapper>
  );
}

export default ContentInfo;
