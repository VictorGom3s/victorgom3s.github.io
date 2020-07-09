import React from "react";

import { css } from "@emotion/core";
import { background, secondary } from "../colors";
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
                scale: 1.05;
              }
              @media (min-width: 900px) {
                margin: 0;
              }
            `}
          >
            <img src={logo} alt="victorgom3s logo" />
          </div>
          <div className="links" css={linksStyle}>
            <a href="#">Sobre Mim</a>
            <a href="#">Portfolio</a>
            <a href="#">Contato</a>
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
  @media (min-width: 900px) {
    height: 60px;
  }
`;

const linksStyle = css`
  display: none;
  justify-content: space-evenly;
  width: 50%;
  @media (min-width: 900px) {
    display: flex;
  }
  a {
    position: relative;
    &:after {
      content: " />";
      color: ${secondary};
      position: absolute;
      padding-left: 5px;
    }
  }
`;

export default Header;
