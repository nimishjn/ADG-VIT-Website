import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Nav = styled.nav`
  background-color: ${({ isHeroSection }) =>
    isHeroSection ? "black" : "transparent"};
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (min-width: 850px) {
    transition: all 0.8s ease-in-out;
  }
`;

export const NavbarContainer = styled.div`
  backdrop-filter: blur(15px);
  background-color: ${({ isHeroSection }) =>
    isHeroSection ? "var(--navbar-dark)" : "var(--navbar-bg)"};
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
`;

export const NavLogo = styled(LinkRouter)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  #adg-logo-color {
    fill: ${({isHeroSection}) => isHeroSection ? 'white' : 'var(--text)'};
  }

  svg {
    height: 40px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 850px) {
    color: ${({ isHeroSection }) =>
      isHeroSection ? "var(--dark-mode-text)" : "var(--text)"};
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    margin-right: 24px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-bottom: 0;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  a {
    text-decoration: none;
    color: ${({ isHeroSection }) =>
      isHeroSection ? "var(--navbar-dark-text)" : "var(--navbar-text)"};
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 0 1rem;
    font-weight: 400;
    letter-spacing: 7%;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: all 0.1s ease-in-out;
  }

  a.link-active {
    transition: all 0.1s ease-in-out;
    border-bottom: 2px solid var(--blue);
    color: ${({ isHeroSection }) =>
      isHeroSection ? "var(--dark-mode-text)" : "var(--text)"};
  }

  a:hover {
    transition: all 0.1s ease-in-out;
    border-bottom: 2px solid var(--blue);
  }
`;

export const NavBtn = styled.nav`
  display: none;

  @media screen and (max-width: 850px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 24px;
    justify-self: flex-end;
    position: absolute;
    right: 50px;
    top: 24px;
  }

  @media screen and (max-width: 350px) {
    display: none;
  }
`;
export const NavBtnLink = styled.button`
  background-color: var(--blue);
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  white-space: nowrap;
  padding: 5px 15px;
  color: rgba(255, 255, 255, 0.8);
  border: 2px solid var(--blue);
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: rgba(255, 255, 255, 1);
  }
`;

export const NavUser = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  z-index: 15;

  img {
    height: 40px;
  }

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const NavDropdown = styled.div`
  position: absolute;
  top: 70px;
  right: 20px;
  backdrop-filter: blur(15px);
  background-color: ${({ isHeroSection }) =>
    isHeroSection ? "var(--dropdown-dark)" : "var(--dropdown-bg)"};
  display: ${({ dropdownOpen }) => (dropdownOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 12;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const NavDropLink = styled(LinkRouter)`
  padding: 10px 20px;
  width: 210px;
  color: ${({ isHeroSection }) =>
    isHeroSection ? "var(--navbar-dark-text)" : "var(--navbar-text)"};
  border-left: 3px solid transparent;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${({ isHeroSection }) =>
      isHeroSection ? "var(--dark-mode-text)" : "var(--text)"};
    background-color: rgba(95, 46, 234, 0.4);
    border-left: 3px solid var(--blue);
  }
`;
