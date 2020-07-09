import React from "react";
import { css } from "@emotion/core";
import Container from "./Container";
import { backgroundDarken, background } from "../colors";

const EnviarEmail = () => {
  return (
    <>
      <form css={formStyle}>
        <input type="text" placeholder="Assunto" />
        <input type="email" placeholder="Seu e-mail" />
        <button className="btn btn-primary" disabled>
          Enviar
        </button>
      </form>
    </>
  );
};
const formStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    margin: 10px 0;
    border-radius: 5px;
    padding: 15px 10px;
    border: 1px solid ${background};
    color: ${backgroundDarken};
  }
  button {
    margin: 20px 0;
    align-self: flex-end;
  }
`;

export default EnviarEmail;
