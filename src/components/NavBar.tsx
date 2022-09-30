import React from "react";
import {
  Elements,
  NavBarContainer,
  NavBarElementsWrapper,
  NavSearch,
  NavSearchInput,
  Search,
  Facebook,
  InstagramIcon,
  TwitterIcon,
  SubElementsContainer,
} from "../styles/NavBar.ui";

import { useState } from "react";

interface NavHoveringItems {
  statu: boolean;
  childIndex: number | null;
}

function NavBar(): JSX.Element {
  const [isHoverin, setIsHovering] = useState<NavHoveringItems>({
    statu: false,
    childIndex: null,
  });
  const navItems = [
    {
      title: "Pages",
      hasChildren: false,
      children: [],
    },
    {
      title: "Category",
      hasChildren: true,
      children: ["Trend", "Sport", "Economy", "Government"],
    },
    {
      title: "Blog",
      hasChildren: false,
      children: [],
    },
    {
      title: "Contact",
      hasChildren: false,
      children: [],
    },
    {
      title: "About",
      hasChildren: false,
      children: [],
    },
  ];
  return (
    <NavBarContainer>
      <NavBarElementsWrapper>
        <Elements>
          <Facebook />
        </Elements>
        <Elements>
          <InstagramIcon />
        </Elements>
        <Elements>
          <TwitterIcon />
        </Elements>
      </NavBarElementsWrapper>
      <NavBarElementsWrapper>
        {navItems.map((item, index) => {
          return (
            <Elements
              key={index}
              onMouseEnter={() => {
                setIsHovering({ statu: true, childIndex: index });
              }}
              onMouseLeave={() => {
                setIsHovering({ statu: false, childIndex: null });
              }}
              hasChild={item.hasChildren}
            >
              {item.title}
              {item.hasChildren &&
                isHoverin.statu &&
                isHoverin.childIndex === index && (
                  <SubElementsContainer>
                    {item.children.map((item, index) => {
                      return <Elements key={index}>{item}</Elements>;
                    })}
                  </SubElementsContainer>
                )}
            </Elements>
          );
        })}
      </NavBarElementsWrapper>
      <NavBarElementsWrapper>
        <NavSearch>
          <Search />
          <NavSearchInput placeholder="Search" />
        </NavSearch>
      </NavBarElementsWrapper>
    </NavBarContainer>
  );
}

export default NavBar;
