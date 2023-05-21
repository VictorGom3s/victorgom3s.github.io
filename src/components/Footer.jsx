import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { css } from "@emotion/react";
import { secondary } from "../colors";

const Footer = () => {
  const { t } = useTranslation();

  const Strings = {
    developedWith: t("footer.developedWith"),
  };

  return (
    <footer css={footerStyle}>
      {Strings.developedWith}{" "}
      <a href="https://github.com/victorgom3s">VictorGom3s</a>
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
