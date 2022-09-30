import React from "react";
import {
  Content,
  FooterContainer,
  FooterContent,
  FooterContentContainer,
} from "../styles/Footer.ui";
import Post from "./Post";

function Footer() {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <FooterContent>
          <Content>Random</Content>
          {/* <Post isFooter />
          <Post isFooter />
          <Post isFooter />
          <Post isFooter /> */}
        </FooterContent>
        <FooterContent>
          <Content>Random</Content>
          {/* <Post isFooter />
          <Post isFooter />
          <Post isFooter /> */}
        </FooterContent>
        <FooterContent>
          <Content>Random</Content>
          {/* <Post isFooter /> */}
        </FooterContent>
      </FooterContentContainer>
    </FooterContainer>
  );
}

export default Footer;
