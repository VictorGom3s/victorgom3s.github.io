import React from "react";
import { css } from "@emotion/core";

const PortfolioItem = ({
  title,
  img,
  text,
  linkAcessar,
  linkCodigo,
  reversed,
}) => {
  return (
    <div css={styleItem}>
      <img src={img} alt="Imagem do projeto" />
      <h3 css={titleStyle}>{title}</h3>
      <p css={textStyle}>{text}</p>
      <div className="links" css={links}>
        <a href={linkAcessar || "#"}>Acessar</a>
        <a href={linkCodigo || "#"}>Ver código fonte</a>
      </div>
    </div>
  );
};

const styleItem = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const links = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const titleStyle = css`
  align-self: center;
  padding-bottom: 3px;
  border-bottom: 2px solid;
  border-image-slice: 1;
  border-width: 2px;
  border-image-source: linear-gradient(
    173.31deg,
    #fa7d09 -0.05%,
    #ff4301 99.95%
  );
  margin: 15px 0 10px 0;
`;

const textStyle = css`
  margin: 10px 0;
`;

export default PortfolioItem;
