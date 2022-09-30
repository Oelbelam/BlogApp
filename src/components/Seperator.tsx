import { ArrowRightAlt } from "@mui/icons-material";
import React from "react";
import {
  SeperatorButton,
  SeperatorButtonTitle,
  SeperatorContainer,
  SeperatorTitle,
} from "../styles/Seperator.ui";

interface Seperator {
  title: string;
  tagColor?: string;
  AdditionalText?: boolean;
  backgroundColor?: string;
}

function Seperator({
  title,
  tagColor,
  AdditionalText,
  backgroundColor,
}: Seperator): JSX.Element {
  return (
    <SeperatorContainer
      borderColor={tagColor}
      backgroundColor={backgroundColor}
    >
      <SeperatorTitle>{title}</SeperatorTitle>
      <SeperatorButton>
        {!AdditionalText && (
          <>
            <SeperatorButtonTitle>View all</SeperatorButtonTitle>
            <ArrowRightAlt color="inherit" />
          </>
        )}
      </SeperatorButton>
    </SeperatorContainer>
  );
}

export default Seperator;
