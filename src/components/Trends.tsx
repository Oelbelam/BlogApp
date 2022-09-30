import React, { FC } from "react";
import {
  TrendContentBigContainer,
  TrendsContainer,
  TrendsContentContainer,
} from "../styles/Trends.ui";
import ContentInfo from "./ContentInfo";
import { ArticleAtributes } from "../types/types";

const Trends: FC<ArticleAtributes[]> = (props): JSX.Element => {
  return (
    <TrendsContainer>
      <TrendContentBigContainer
        src={`${process.env.BASE_URL_API}${props[0].imgUrl}`}
      >
        <ContentInfo
          postDate={props[0].createdAt}
          title={props[0].Title}
          writterInfo={props[0].Writter}
          tag={props[0].Tag}
          titleFS="30px"
        />
      </TrendContentBigContainer>
      <TrendsContentContainer
        src={`${process.env.BASE_URL_API}${props[1].imgUrl}`}
      >
        <ContentInfo
          postDate={props[1].createdAt}
          title={props[1].Title}
          writterInfo={props[1].Writter}
          tag={props[1].Tag}
          titleFS="30px"
        />
      </TrendsContentContainer>
      <TrendsContentContainer
        src={`${process.env.BASE_URL_API}${props[2].imgUrl}`}
      >
        <ContentInfo
          postDate={props[2].createdAt}
          title={props[2].Title}
          writterInfo={props[2].Writter}
          tag={props[2].Tag}
          titleFS="30px"
        />
      </TrendsContentContainer>
    </TrendsContainer>
  );
};

export default Trends;
