import React from "react";
import { css } from "@emotion/core";
import { secondary } from "../../src/components/colors";

const Footer = () => {
  return (
    <footer css={footerStyle}>
      Desenvolvido com{" "}
      <span role="img" aria-label="heart emoji">
        💗
      </span>{" "}
      por <a href="https://github.com/victorgom3s">VictorGom3s</a>
    </footer>
  );
};

const footerStyle = css`
  padding: 25px 0;
  background: linear-gradient(106.8deg, #fa7d09 -0.05%, #ff4301 99.95%);
  color: ${secondary};
  text-align: center;
  font-size: 0.75rem;
`;

export default Footer;
