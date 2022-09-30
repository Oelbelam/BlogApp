import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f7f7;
  padding: 16px;
  margin: 0;
`;

export const NavBarElementsWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

interface SubElementProps {
  hasChild?: boolean;
}

export const Elements = styled.span<SubElementProps>`
  font-size: 22px;
  font-weight: 800;
  position: relative;
  cursor: pointer;
  ${({ hasChild }) =>
    hasChild &&
    `&::after {
    content: "";
    position: absolute;
    height: 5px;
    width: 5px;
    border-left: 2px solid black;
    border-bottom: 2px solid black;
    transform: rotate(-45deg);
    right: -10px;
    top: 12px;
  }`}
`;

export const SubElementsContainer = styled.div`
  position: absolute;
  top: 35px;
  left: -50%;
  display: flex;
  flex-direction: column;
  background-color: #f6e7e7;
  border-radius: 20px;
  padding: 20px;
  &::before {
    content: "";
    position: absolute;
    border-bottom: 10px solid #f6e7e7;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    top: -10px;
    left: 50%;
  }
`;

export const NavSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 7px 16px;
  border-radius: 5px;
  border: 1px solid #dbe2ef;
`;
export const NavSearchInput = styled.input`
  outline: none;
  background-color: transparent;
  &::placeholder {
    color: gray;
    font-size: 300;
  }
  border: none;
`;

export const Search = styled(SearchIcon)`
  color: #3f72af;
`;

export const Facebook = styled(FacebookOutlined)`
  color: #3f72af;
`;

export const InstagramIcon = styled(Instagram)`
  color: #3f72af;
`;
export const TwitterIcon = styled(Twitter)`
  color: #3f72af;
`;
