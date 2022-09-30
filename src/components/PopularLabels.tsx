import { FolderOpen } from "@mui/icons-material";
import React from "react";
import {
  LabelContainer,
  LabelCount,
  LabelText,
  LabelTextWrapper,
} from "../styles/Layout.ui";
import { PopularLabelsProps } from "../types/types";
import Seperator from "./Seperator";

function PopularLabels(props: PopularLabelsProps) {
  return (
    <>
      <LabelContainer>
        <LabelTextWrapper>
          <LabelText>{Object.keys(props.popularLabels)}</LabelText>
          <FolderOpen color="inherit" />
        </LabelTextWrapper>
        <LabelCount>{Object.values(props.popularLabels)}</LabelCount>
      </LabelContainer>
    </>
  );
}

export default PopularLabels;
