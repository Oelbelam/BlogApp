import React from "react";
import { PostContainer, PostImg } from "../styles/Post.ui";
import ContentInfo from "./ContentInfo";
import { data } from "./Banner";
import { ArticleAtributes } from "../types/types";

interface PostProps extends ArticleAtributes {
  isFooter?: boolean;
}

function Post(props: PostProps) {
  return (
    <PostContainer>
      <PostImg src={`${process.env.BASE_URL_API}${props.imgUrl}`} />
      <ContentInfo
        postDate={props.createdAt.split("T")[0]}
        title={props.Title}
        writterInfo={props.Writter}
        tag={props.Tag}
        titleFS="15px"
        isFooter={props.isFooter}
      />
    </PostContainer>
  );
}

export default Post;
