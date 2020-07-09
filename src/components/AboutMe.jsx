import React from "react";
import { css } from "@emotion/core";

import { secondary, backgroundDarken } from "../colors";
import CodeEditor from "./CodeEditor";
import Container from "./Container";

const AboutMe = () => {
  return (
    <section id="aboutMe" css={sectionStyle}>
      <Container>
        <div className="title" css={titleStyle}>
          <h2 className="closingTags">Sobre Mim</h2>
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

const titleStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${secondary};
  h2 {
    font-weight: normal;
    margin: 40px auto;
  }
`;

export default AboutMe;
