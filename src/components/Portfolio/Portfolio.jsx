import React from "react";
import { css } from "@emotion/core";

import Container from "../Container";
import PortfolioItem from "./PortfolioItem.jsx";
import { background } from "../../colors";

const Portfolio = () => {
  return (
    <section css={sectionStyle}>
      <Container>
        <div className="portfolio">
          <h2 className="closingTags">Portfolio</h2>
          <div className="itens">
            <PortfolioItem
              title={"My Project"}
              text={
                "Esse foi um baita de um projeto que eu fiz. Tenho muito orgulho dele"
              }
              linkAcessar={"teste.com"}
              linkCodigo={"github.com/victorgom3s"}
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
