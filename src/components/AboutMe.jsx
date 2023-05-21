import { css } from "@emotion/react";
import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import { backgroundDarken } from "../colors";
import CodeEditor from "./CodeEditor";
import Container from "./Container";

const AboutMe = () => {
  const { t } = useTranslation();

  const Strings = {
    aboutMe: t("header.aboutMe"),
  };

  return (
    <section id="aboutMe" css={sectionStyle}>
      <Container>
        <div className="title">
          <h2 className="closingTags titleH2">{Strings.aboutMe}</h2>
          <CodeEditor />
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

export default AboutMe;
