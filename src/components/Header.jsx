import React from "react";

import { css } from "@emotion/core";
import { background, secondary, primary } from "../colors";
import Container from "./Container";

import * as logo from "../images/LOGO.svg";

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
          <div
            className="logo"
            css={css`
              margin: 0 auto;
              transition: 0.2s;
              &:hover {
                transform: scale(1.05);
              }
              @media (min-width: 900px) {
                margin: 0;
              }
            `}
          >
            <img src={logo} alt="victorgom3s logo" />
          </div>
          <div className="links" css={linksStyle}>
            <a href="#aboutMe">Sobre Mim</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contato">Contato</a>
          </div>
        </nav>
      </Container>
    </header>
  );
};

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
