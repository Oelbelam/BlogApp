import React from "react";
import { AdSpaceContainer } from "../styles/AdSpace.ui";
import Seperator from "./Seperator";

function AdSpace() {
  return (
    <div style={{ position: "sticky", top: 0 }}>
      <Seperator
        title="Ad Space"
        tagColor="red"
        backgroundColor="#989494"
        AdditionalText
      />
      <AdSpaceContainer>Ad space</AdSpaceContainer>
    </div>
  );
}

export default AdSpace;
