import React from "react";

import { css } from "@emotion/react";
import { Link } from "gatsby";
import { background, primary, secondary } from "../colors";
import logo from "../../static/images/LOGO.svg";
import Container from "./Container";

const Header = () => {
  return (
    <header
      css={css`
        background-color: ${background};
        color: ${secondary};
      `}
    >
      <Container>
        <nav css={navStyle}>
          <Link to="/" className="logo" css={logoContainer}>
            <img src={logo} alt="victorgom3s logo" />
          </Link>
          <div className="links" css={linksStyle}>
            <a href="#aboutMe">Sobre Mim</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#contato">Contato</a>
          </div>
        </nav>
      </Container>
    </header>
  );
};

const logoContainer = css`
  margin: 0 auto;
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  @media (min-width: 900px) {
    margin: 0;
  }
`;

const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  width: 100%;
`;

const linksStyle = css`
  display: none;
  justify-content: space-evenly;
  width: 50%;
  a {
    position: relative;
    margin: 0 15px;
    transition: 0.2s;
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
