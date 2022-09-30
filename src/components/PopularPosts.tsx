import React from "react";
import Post from "./Post";
import Seperator from "./Seperator";

function PopularPosts() {
  return (
    <>
      <Seperator
        title="Popular Posts"
        AdditionalText
        backgroundColor="#989494"
        tagColor="red"
      />
      {/* <Post />
      <Post />
      <Post />
      <Post /> */}
    </>
  );
}

export default PopularPosts;
