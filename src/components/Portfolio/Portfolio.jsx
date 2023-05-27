import React from "react";
import { css } from "@emotion/react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Container from "../Container";
import PortfolioItem from "./PortfolioItem.jsx";
import { background } from "../../colors";

import JATM from "../../../static/images/justanothertaskmanager.png";
import LMG from "../../../static/images/linuxMemoryGame.png";
import RT from "../../../static/images/rt-index.png";
import CK from "../../../static/images/cookies-1.png";
import desafio333 from "../../../static/images/desafio333.png";

const Portfolio = () => {
  const { t } = useTranslation();

  const Strings = {
    portfolio: t("header.portfolio"),
    leituraOrganicaDescription: t("portfolio.leituraOrganicaDescription"),
    rollingTetrisDescription: t("portfolio.rollingTetrisDescription"),
    cookiesDescription: t("portfolio.cookiesDescription"),
    justAnotherTaskManagerDescription: t(
      "portfolio.justAnotherTaskManagerDescription"
    ),
    memoryGameDescription: t("portfolio.memoryGameDescription"),
  };

  return (
    <section id="portfolio" css={sectionStyle}>
      <Container>
        <div className="portfolio">
          <h2 className="closingTags titleH2">Portfolio</h2>
          <div className="itens">
            <PortfolioItem
              title={"Leitura Orgânica"}
              text={Strings.leituraOrganicaDescription}
              linkAcessar={"https://leitura-organica-desafio333.vercel.app/"}
              linkCodigo={
                "https://github.com/VictorGom3s/leitura-organica-desafio333"
              }
              img={desafio333}
            />
            <PortfolioItem
              title={"Rolling Tetris"}
              text={Strings.rollingTetrisDescription}
              img={RT}
              linkCodigo={"https://github.com/VictorGom3s/rolling-tetris"}
              reversed={true}
            />
            <PortfolioItem
              title={"Cookies.com.br"}
              text={Strings.cookiesDescription}
              img={CK}
            />
            <PortfolioItem
              title={"Just Another Task Manager"}
              text={Strings.justAnotherTaskManagerDescription}
              linkAcessar={"https://just-another-task-manager.vercel.app/"}
              linkCodigo={
                "https://github.com/VictorGom3s/JustAnotherTaskManager"
              }
              img={JATM}
              reversed={true}
            />

            <PortfolioItem
              title={"Memory Game"}
              text={Strings.memoryGameDescription}
              linkAcessar={"https://victorgom3s.github.io/linuxmemorygame/"}
              linkCodigo={"https://github.com/VictorGom3s/linuxmemorygame"}
              img={LMG}
            />
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
  background-color: ${background};
  h2 {
    width: 100%;
    text-align: center;
    margin: 40px auto;
  }
`;

export default Portfolio;
