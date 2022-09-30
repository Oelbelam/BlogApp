import React from "react";
import { CardWrapper } from "../styles/CardTag.ui";
import { strToColor } from "../utils/strToColor";
import CardTag from "./CardTag";
import Seperator from "./Seperator";

function PopularTags() {
  return (
    <>
      <Seperator title="Popular Tags" tagColor={strToColor("Popular Tags")} />
      <CardWrapper>
        <CardTag />
        <CardTag />
        <CardTag />
        <CardTag />
        <CardTag />
        <CardTag />
        <CardTag />
        <CardTag />
        <CardTag />
        <CardTag />
        <CardTag />
      </CardWrapper>
    </>
  );
}

export default PopularTags;
