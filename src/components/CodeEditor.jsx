import React from "react";
import { css } from "@emotion/core";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { secondary } from "../colors";
import text from "../resources/aboutMeText";

const CodeEditor = () => {
  return (
    <div css={style}>
      <div className="buttons">
        <div className="btn"></div>
        <div className="btn"></div>
        <div className="btn"></div>
      </div>
      <div className="code">
        <SyntaxHighlighter
          style={tomorrowNightEighties}
          customStyle={{
            background: "none",
            overflow: "visible",
            whiteSpace: "pre-wrap",
          }}
          language="javascript"
        >
          {text}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeEditor;

const style = css`
  display: block;
  background-color: #241f24;
  color: white;
  width: 100%;
  padding: 20px 2px;
  margin: 0 auto;
  border-radius: 10px;

  @media (min-width: 600px) {
    position: relative;
    &:before {
      content: "";
      height: 100%;
      width: 1.2rem;
      background: #343434;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 10px 0 0 10px;
    }
  }

  .code {
    pre {
      margin: 20px 0px 20px 0px;
      @media (min-width: 600px) {
        margin: 20px 0 20px 20px;
      }
    }
    code {
      font-size: 0.75rem;
      @media (min-width: 600px) {
        font-size: 0.8rem;
      }
      @media (min-width: 900px) {
        font-size: 0.9rem;
      }
      @media (min-width: 1200px) {
        font-size: 1rem;
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    margin: 0px 15px;
  }

  .buttons .btn {
    height: 14px;
    width: 14px;
    margin: 0px 5px;
    background-color: ${secondary};
    border-radius: 100%;
  }
`;
