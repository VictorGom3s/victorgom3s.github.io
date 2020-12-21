import React from "react";
import { css } from "@emotion/core";
import { primary, secondary, auxiliary } from "../../colors";

const PortfolioItem = ({
  title,
  img,
  text,
  linkAcessar,
  linkCodigo,
  reversed,
}) => {
  return (
    <div css={reversed ? styleItemReverse : styleItem}>
      <img src={img} alt="Imagem do projeto" css={imgStyle} />
      <div className="description" css={descriptionStyle}>
        <h3 css={titleStyle}>{title}</h3>
        <p css={textStyle}>{text}</p>
        <div className="links" css={links}>
          <a
            href={linkCodigo || "#"}
            className="linkCodigoFonte"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver código fonte
          </a>
          <a
            href={linkAcessar || "#"}
            className="linkAcessar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar
          </a>
        </div>
      </div>
    </div>
  );
};

const styleItem = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 100px auto;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const styleItemReverse = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  @media (min-width: 900px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const descriptionStyle = css`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  @media (min-width: 900px) {
    max-width: 40%;
  }
`;

const links = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  a {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 18%;
      width: 60%;
      height: 1px;
    }
  }
  .linkAcessar {
    color: ${primary};
    transition: 0.2s;
    &:after {
      background: ${primary};
    }
    &:hover {
      color: ${auxiliary};
      &:after {
        background: ${auxiliary};
      }
    }
  }
  .linkCodigoFonte {
    color: ${secondary};
    transition: 0.2s;
    &:after {
      background: ${secondary};
    }
    &:hover {
      color: ${auxiliary};
      &:after {
        background: ${auxiliary};
      }
    }
  }
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
  margin: 20px 0;
`;

const imgStyle = css`
  width: 100%;
  @media (min-width: 900px) {
    margin: 0 25px;
    width: 65%;
  }
  @media (min-width: 1200px) {
    margin: 0 25px;
    width: 60%;
  }
`;

export default PortfolioItem;
