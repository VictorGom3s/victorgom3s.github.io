import React from "react";
import { css } from "@emotion/core";

const Container = ({ children }) => {
  return (
    <div
      className="container"
      css={css`
        max-width: calc(100vw - 30%);
        margin: 0 auto;
        color: white;
        height: 100%;
        @media (max-width: 1024px) {
          max-width: calc(100vw - 10%);
        }
      `}
    >
      {children}
    </div>
  );
};

export default Container;
