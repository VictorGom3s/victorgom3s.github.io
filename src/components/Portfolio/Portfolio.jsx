import React from "react";
import { css } from "@emotion/core";

import Container from "../Container";
import PortfolioItem from "./PortfolioItem.jsx";
import { background } from "../../colors";

import * as JATM from "../../images/justanothertaskmanager.png";
import * as LMG from "../../images/linuxMemoryGame.png";
import * as desafio333 from "../../images/desafio333.png";

const Portfolio = () => {
  return (
    <section css={sectionStyle}>
      <Container>
        <div className="portfolio">
          <h2 className="closingTags titleH2">Portfolio</h2>
          <div className="itens">
            <PortfolioItem
              title={"Leitura Orgânica"}
              text={
                "Esse foi um baita de um projeto que eu fiz. Tenho muito orgulho dele"
              }
              linkAcessar={"teste.com"}
              linkCodigo={"github.com/victorgom3s"}
              img={desafio333}
            />
            <PortfolioItem
              title={"Just Another Task Manager"}
              text={
                "Esse foi um baita de um projeto que eu fiz. Tenho muito orgulho dele"
              }
              linkAcessar={"teste.com"}
              linkCodigo={"github.com/victorgom3s"}
              img={JATM}
              reversed={true}
            />
            <PortfolioItem
              title={"Memory Game"}
              text={
                "Esse foi um baita de um projeto que eu fiz. Tenho muito orgulho dele"
              }
              linkAcessar={"teste.com"}
              linkCodigo={"github.com/victorgom3s"}
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
