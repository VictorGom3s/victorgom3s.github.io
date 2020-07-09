import React from "react";
import { css } from "@emotion/core";

import Container from "./Container";

import * as githubIcon from "../images/eva_github-outline.svg";
import * as freeCodeCampIcon from "../images/cib_freecodecamp.svg";
import * as emailIcon from "../images/ic_baseline-alternate-email.svg";
import * as illustration from "../images/undraw_programming_2svr.svg";
import { background, secondary, primary } from "../colors";

const Main = () => {
  return (
    <section id="main" css={sectionStyle}>
      <Container>
        <div className="main" css={mainStyle}>
          <div css={textWrapper}>
            <div className="textContainer" css={textContainerStyle}>
              <h4 css={h4Style}>
                Olá, meu nome é <b css={boldText}>Victor Gomes</b>
              </h4>
              <h1 css={h1Style}>
                Eu sou um <b>Desenvolvedor Web</b>
              </h1>
              <div className="buttons" css={buttons}>
                <button className="btn btn-primary">Quero Contratar</button>
                <button className="btn btn-secondary">
                  Preciso de um Site
                </button>
              </div>
            </div>
            <div className="illustration" css={illustrationStyle}>
              <img src={illustration} alt="Illustration" />
            </div>
          </div>

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
      </Container>
    </section>
  );
};

const buttons = css`
  display: flex;
  justify-content: space-between;
  @media (min-width: 900px) {
    justify-content: flex-start;
  }
  align-items: center;
  align-content: center;
  .btn-primary {
    margin: 30px 10px 0px 0px;
  }
  .btn-secondary {
    margin: 30px 0px 0px 0px;
  }
`;

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
  a {
    margin: 0;
    padding: 0;
    img {
      margin: 30px 10px;
      transition: 0.2s;
      &:hover {
        scale: 1.1;
      }
    }
  }
`;

const textWrapper = css`
  flex-grow: 1;
  margin: 0 auto;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const illustrationStyle = css`
  display: none;
  position: relative;
  @media (min-width: 900px) {
    display: flex;
    width: 60%;
    align-items: center;
    img {
      position: absolute;
      right: -20px;
      width: 100%;
      margin-left: 15px;
    }
  }
`;

const textContainerStyle = css`
  color: ${secondary};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-content: center;
  justify-content: center;
  height: 100%;
  @media (min-width: 900px) {
    width: 40%;
    z-index: 1;
  }
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
