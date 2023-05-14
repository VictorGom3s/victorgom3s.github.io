import React from "react";
import { css } from "@emotion/react";

import Container from "./Container";
import { backgroundDarken } from "../colors";
import githubIcon from "../../static/images/eva_github-outline.svg";
import freeCodeCampIcon from "../../static/images/cib_freecodecamp.svg";
import emailIcon from "../../static/images/ic_baseline-alternate-email.svg";
import linkedinIcon from "../../static/images/dashicons_linkedin.svg";

const Contato = () => {
  return (
    <section id="contato" css={sectionStyle}>
      <Container>
        <h2 className="closingTags titleH2">Contato</h2>
        <div className="findMe" css={findMe}>
          <div className="links" css={links}>
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
              <a
                href="https://www.linkedin.com/in/victorgom3s"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn Icon" />
              </a>
            </div>
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

const iconsGrid = css`
  display: flex;
  justify-content: space-evenly;
  margin: 30px auto;
  a {
    margin: 10px;
    padding: 0;
    img {
      transition: 0.2s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

const findMe = css`
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
`;

export default Contato;
