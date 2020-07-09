import React from "react";
import { css } from "@emotion/core";

import Container from "./Container";

import * as githubIcon from "../images/eva_github-outline.svg";
import * as freeCodeCampIcon from "../images/cib_freecodecamp.svg";
import * as emailIcon from "../images/ic_baseline-alternate-email.svg";
import { background, secondary, primary } from "../colors";

const Main = () => {
  return (
    <section id="main" css={sectionStyle}>
      <Container>
        <div className="main" css={mainStyle}>
          <div className="textContainer" css={textContainerStyle}>
            <h4 css={h4Style}>
              Olá, meu nome é <b css={boldText}>Victor Gomes</b>
            </h4>
            <h1 css={h1Style}>
              Eu sou um <b>Desenvolvedor Web</b>
            </h1>
          </div>

          <div className="icons" css={iconsGrid}>
            <img src={githubIcon} alt="GitHub Icon" />
            <img src={emailIcon} alt="E-mail Icon" />
            <img src={freeCodeCampIcon} alt="FreeCodeCamp Icon" />
          </div>
        </div>
      </Container>
    </section>
  );
};

const boldText = css`
  color: ${primary};
`;

const sectionStyle = css`
  background-color: ${background};
  height: calc(100vh - 120px);
`;

const mainStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-grow: 1;
`;

const iconsGrid = css`
  margin: 0 auto;
  display: flex;
  img {
    margin: 30px 10px;
  }
`;

const textContainerStyle = css`
  color: ${secondary};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-content: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const h4Style = css`
  font-weight: normal;
  margin: 5px 0;
  font-size: 1.125rem;
`;

const h1Style = css`
  font-weight: normal;
  margin: 5px 0;
  font-size: 2.25rem;
`;

export default Main;
