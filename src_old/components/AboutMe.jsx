import React from "react";
import { css } from "@emotion/core";

import { backgroundDarken } from "../../src/components/colors";
import CodeEditor from "./CodeEditor";
import Container from "./Container";

const AboutMe = () => {
  return (
    <section id="aboutMe" css={sectionStyle}>
      <Container>
        <div className="title">
          <h2 className="closingTags titleH2">Sobre Mim</h2>
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
