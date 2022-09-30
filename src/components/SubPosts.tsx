import React from "react";
import { StyledImg } from "../styles/Layout.ui";
import { SubpostsContainer } from "../styles/Subposts.ui";
import ContentInfo from "./ContentInfo";
import Seperator from "./Seperator";
import { data } from "./Banner";
import Post from "./Post";
import { SubPostProps } from "../types/types";

function SubPosts(props: SubPostProps) {
  return (
    <SubpostsContainer>
      <Seperator title={props.tag} tagColor="red" />
      {props.transformedData.map((item, index) => {
        if (index === 0) {
          return (
            <>
              <StyledImg
                key={index}
                src={`${process.env.BASE_URL_API}${item.imgUrl}`}
              />
              <ContentInfo
                postDate={item.createdAt.split("T")[0]}
                title={item.Title}
                writterInfo={item.Writter}
                tag={item.Tag}
                titleFS="30px"
              />
            </>
          );
        } else if (index < 3) {
          return <Post key={index} {...item} />;
        }
      })}
    </SubpostsContainer>
  );
}

export default SubPosts;
