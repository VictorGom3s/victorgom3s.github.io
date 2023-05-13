import React from "react";
import { css } from "@emotion/core";

import Container from "../Container";
import PortfolioItem from "./PortfolioItem.jsx";
import { background } from "../../../src/components/colors";

import * as JATM from "../../images/justanothertaskmanager.png";
import * as LMG from "../../images/linuxMemoryGame.png";
import * as RT from "../../images/rt-index.png";
import * as CK from "../../images/cookies-1.png";
import * as desafio333 from "../../images/desafio333.png";

const Portfolio = () => {
  return (
    <section id="portfolio" css={sectionStyle}>
      <Container>
        <div className="portfolio">
          <h2 className="closingTags titleH2">Portfolio</h2>
          <div className="itens">
            <PortfolioItem
              title={"Leitura Orgânica"}
              text={
                "Landing Page e Teste de leitura para o curso Leitura Orgânica. Desenvolvido com HTML5, CSS3, SASS, JavaScript Vanilla e Parcel como bundler. A UI foi desenvolvida por mim através do Figma e as ilustrações foram retiradas de bibliotecas open-source."
              }
              linkAcessar={"https://desafio333-leitura-organica.herokuapp.com/"}
              linkCodigo={
                "https://github.com/VictorGom3s/leitura-organica-desafio333"
              }
              img={desafio333}
            />
            <PortfolioItem
              title={"Rolling Tetris"}
              text={
                "Rolling Tetris é uma variação do jogo Tetris onde, cada vez que o player elimina uma linha que contenha uma peça especial, o tabuleiro do tetris é rotacionado, ficando de ponta cabeça. Em conjunto com o jogo, desenvolvido com HTML5 Canvas e JavaScript, desenvolvemos também uma plataforma full-stack para hospedar o jogo."
              }
              img={RT}
              reversed={true}
            />
            <PortfolioItem
              title={"Cookies.com.br"}
              text={
                "Plataforma de e-commerce para um negócio de venda de Cookies. Desenvolvido em Node.js, Express, MySQL, HTML5 e CSS3."
              }
              img={CK}
            />
            <PortfolioItem
              title={"Just Another Task Manager"}
              text={
                "Lista de tarefas e Pomodoro Timer. Desenvolvido em ReactJS. Foram utilizados Dexie.js para armazenar as tarefas no indexedDB do Browser, e SASS como pré-processador CSS."
              }
              linkAcessar={"https://justanothertaskmanager.herokuapp.com/"}
              linkCodigo={
                "https://github.com/VictorGom3s/JustAnotherTaskManager"
              }
              img={JATM}
              reversed={true}
            />

            <PortfolioItem
              title={"Memory Game"}
              text={
                "Jogo da memória temático utilizando apenas HTML, CSS e JavaScript. Criado a partir de um tutorial do FreeCodeCamp."
              }
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
