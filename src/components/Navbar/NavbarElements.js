import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  /* justify-content: space-between;
  align-items: center; */
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  color: #fff;
  justify-self: flex-start;
  justify-content: space-evenly;
  font-size: 2.5rem;
  font-weight: bold;
  margin-left: 24px;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #cc5500;
  }
`;

export const NavBtn = styled.nav ` 
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtnLink = styled(LinkR) ` 
    border-radius: 50px;
    background: #cc5500;
    white-space: nowrap;
    align-items: center;
    justify-self: flex-end;
    padding: 10px 22px;
    color: white;
    font-size: 1em;
    outline: none;
    border: none;
    cursor: crosshair;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #FFCD58;
    }
`
