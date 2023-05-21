import React from "react";
import { css } from "@emotion/react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Container from "./Container";

import githubIcon from "../../static/images/eva_github-outline.svg";
import freeCodeCampIcon from "../../static/images/cib_freecodecamp.svg";
import emailIcon from "../../static/images/ic_baseline-alternate-email.svg";
import illustration from "../../static/images/undraw_developer_activity_bv83.svg";
import { background, secondary, primary } from "../colors";

const Main = () => {
  const { t } = useTranslation();

  const Strings = {
    myNameIs: t("main.myNameIs"),
    iAm: t("main.iAm"),
    softwareDeveloper: t("main.softwareDeveloper"),
  };

  return (
    <section id="main" css={sectionStyle}>
      <Container>
        <div className="main" css={mainStyle}>
          <div css={textWrapper}>
            <div className="textContainer" css={textContainerStyle}>
              <h4 css={h4Style}>
                {Strings.myNameIs} <b css={boldText}>Victor Gomes</b>
              </h4>
              <h1 css={h1Style}>
                {Strings.iAm} <b>{Strings.softwareDeveloper}</b>
              </h1>
            </div>
            <div className="illustration" css={illustrationStyle}>
              <img src={illustration} alt="Illustration" />
            </div>
          </div>

          <div className="icons" css={iconsGrid}>
            <a
              href="https://github.com/victorgom3s"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub Icon" />
            </a>
            <a
              href="mailto: o7xitc6vw@mozmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={emailIcon} alt="E-mail Icon" />
            </a>
            <a
              href="https://www.freecodecamp.org/victorgom3s"
              target="_blank"
              rel="noreferrer"
            >
              <img src={freeCodeCampIcon} alt="FreeCodeCamp Icon" />
            </a>
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
  a {
    margin: 0;
    padding: 0;
    img {
      margin: 30px 10px;
      transition: 0.2s;
      &:hover {
        transform: scale(1.1);
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
    width: 50%;
    align-items: center;
    img {
      transform: scale(1.025);
      position: absolute;
      right: -35px;
      width: 100%;
    }
  }

  @media (min-width: 1025px) {
    img {
      transform: scale(1.25);
      right: -75px;
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
    width: 45%;
    z-index: 1;
  }
`;

const h4Style = css`
  font-weight: normal;
  margin: 5px 0;
  font-size: 1.125rem;
  @media (min-width: 1100px) {
    font-size: 1.9rem;
  }
  @media (min-width: 1600px) {
    font-size: 2.1rem;
  }
`;

const h1Style = css`
  font-weight: normal;
  margin: 5px 0;
  font-size: 2.25rem;
  @media (min-width: 1100px) {
    font-size: 3rem;
  }
  @media (min-width: 1600px) {
    font-size: 4rem;
  }
`;

export default Main;
