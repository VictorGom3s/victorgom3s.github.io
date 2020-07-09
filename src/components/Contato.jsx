import React from "react";
import { css } from "@emotion/core";

import Container from "./Container";
import EnviarEmail from "./EnviarEmail";
import { backgroundDarken } from "../colors";
import * as githubIcon from "../images/eva_github-outline.svg";
import * as freeCodeCampIcon from "../images/cib_freecodecamp.svg";
import * as emailIcon from "../images/ic_baseline-alternate-email.svg";

const Contato = () => {
  return (
    <section id="contato" css={sectionStyle}>
      <Container>
        <h2 className="closingTags titleH2">Contato</h2>
        <div className="findMe" css={findMe}>
          <div className="links" css={links}>
            <p>Onde me encontrar: </p>
            <div className="icons" css={iconsGrid}>
              <a href="https://github.com/victorgom3s">
                <img src={githubIcon} alt="GitHub Icon" />
              </a>
              <a href="mailto: vsampaio@pm.me">
                <img src={emailIcon} alt="E-mail Icon" />
              </a>
              <a href="https://www.freecodecamp.org/victorgom3s">
                <img src={freeCodeCampIcon} alt="FreeCodeCamp Icon" />
              </a>
            </div>
          </div>
          <div className="form" css={form}>
            <p>Me envie um e-mail: </p>
            <EnviarEmail />
          </div>
        </div>
      </Container>
    </section>
  );
};

const sectionStyle = css`
  margin: 0;
  padding: 40px 0;
  height: 100%;
  width: 100%;
  background-color: ${backgroundDarken};
`;

const links = css`
  @media (min-width: 900px) {
    width: 50%;
    margin-left: 20px;
  }
`;
const form = css`
  @media (min-width: 900px) {
    width: 50%;
    margin-right: 20px;
  }
`;

const iconsGrid = css`
  display: flex;
  justify-content: space-evenly;
  a {
    margin: 10px;
    padding: 0;
    img {
      transition: 0.2s;
      &:hover {
        scale: 1.1;
      }
    }
  }
`;

const findMe = css`
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export default Contato;
