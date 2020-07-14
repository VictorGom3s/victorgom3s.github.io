import React from "react";
import { css } from "@emotion/core";
import { backgroundDarken, background } from "../colors";

const EnviarEmail = () => {
  return (
    <>
      <form css={formStyle}>
        <input type="text" name="assunto" placeholder="Assunto" disabled />
        <input type="email" name="email" placeholder="Seu e-mail" disabled />
        <button className="btn btn-primary" type="submit" disabled>
          <span>Enviar</span>
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
