import type React from "react";

import styled from "@emotion/styled";
import { background, primary, secondary } from "./colors";
import Container from "./scaffold/Container";

const StyledHeader = styled.header`
  background-color: ${background};
  color: ${secondary};
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <StyledLogoLink href="/" className="logo">
            <img src="../images/logo.svg" alt="victorgom3s logo" />
          </StyledLogoLink>
          <StyledLink className="links">
            <a href="#aboutMe">Sobre Mim</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#contato">Contato</a>
          </StyledLink>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
};

const StyledLogoLink = styled.a`
  margin: 100px auto;
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  @media (min-width: 900px) {
    margin: 0;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  width: 100%;
`;

const StyledLink = styled.a`
  display: none;
  justify-content: space-evenly;
  width: 50%;
  a {
    position: relative;
    margin: 0 15px;
    transition: 0.2s;
    color: ${secondary};
    &:after {
      content: " />";
      color: ${secondary};
      position: absolute;
      padding-left: 5px;
    }
    &:hover {
      color: ${primary};
      transform: scale(1.05);
      &:after {
        color: ${primary};
      }
    }
  }

  @media (min-width: 900px) {
    display: flex;
  }
`;

export default Header;
