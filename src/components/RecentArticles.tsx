import React from "react";
import { GridSection, StyledImg } from "../styles/Layout.ui";
import ContentInfo from "./ContentInfo";
import Seperator from "./Seperator";
import { PostTextArea, ResentPostContainer } from "../styles/RecentArticles.ui";
import { SubPostProps } from "../types/types";

function RecentArticles(props: SubPostProps) {
  return (
    <>
      <Seperator title={props.tag} tagColor="green" />
      <GridSection>
        {props.transformedData.map((item, index) => {
          if (index < 4) {
            return (
              <ResentPostContainer key={index}>
                <StyledImg src={`${process.env.BASE_URL_API}${item.imgUrl}`} />
                <ContentInfo
                  postDate={item.createdAt.split("T")[0]}
                  title={item.Title}
                  writterInfo={item.Writter}
                  tag={item.Tag}
                  titleFS="30px"
                />
                <PostTextArea>{item.Article.slice(0, 200)}...</PostTextArea>
              </ResentPostContainer>
            );
          }
        })}
      </GridSection>
    </>
  );
}

export default RecentArticles;
