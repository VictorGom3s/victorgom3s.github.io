import React from "react";

import { css } from "@emotion/react";
import { Link } from "gatsby";
import logo from "../../static/images/LOGO.svg";
import { auxiliary, background, primary, secondary } from "../colors";
import Container from "./Container";
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const { languages, changeLanguage, language } = useI18next();

  const Strings = {
    aboutMe: t("header.aboutMe"),
    portfolio: t("header.portfolio"),
    contact: t("header.contact"),
  };

  const handleLanguageChange = e => {
    e.preventDefault();
    changeLanguage(e.target.value);
  };

  const getLanguageValue = lang => {
    switch (lang) {
      case "en":
        return "English";
      case "pt":
        return "Português";
      case "es":
        return "Español";
      default:
        return "English";
    }
  };

  const LanguageSwitcher = () => {
    return (
      <select
        css={languageSwitcherStyle}
        onChange={handleLanguageChange}
        value={language}
      >
        {languages.map(lng => (
          <option value={lng} key={lng}>
            {getLanguageValue(lng)}
          </option>
        ))}
      </select>
    );
  };

  return (
    <header
      css={css`
        background-color: ${background};
        color: ${secondary};
      `}
    >
      <Container>
        <nav css={navStyle}>
          <Link to="/" className="logo" css={logoContainer}>
            <img src={logo} alt="VictorGom3s Logo" />
          </Link>
          <div className="links" css={linksStyle}>
            <a href="#aboutMe">{Strings.aboutMe}</a>
            <a href="#portfolio">{Strings.portfolio}</a>
            <a href="#contato">{Strings.contact}</a>
          </div>
          <div className="languages">
            <LanguageSwitcher />
          </div>
        </nav>
      </Container>
    </header>
  );
};

const logoContainer = css`
  margin: 0 auto;
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  @media (min-width: 900px) {
    margin: 0;
  }
`;

const languageSwitcherStyle = css`
  min-width: 100px;
  background: none;
  border: 1px solid ${primary};
  color: ${secondary};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1rem;
`;

const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  width: 100%;
`;

const linksStyle = css`
  display: none;
  justify-content: space-evenly;
  width: 50%;
  a {
    position: relative;
    margin: 0 15px;
    transition: 0.2s;
    &:after {
      content: " />";
      color: ${secondary};
      position: absolute;
      padding-left: 5px;
    }
    &:hover {
      color: ${primary};
      transform: scale(1.05);
      &:after {
        color: ${primary};
      }
    }
  }

  @media (min-width: 900px) {
    display: flex;
  }
`;

export default Header;
