import React, { useRef } from "react";
import { css } from "@emotion/core";
import { backgroundDarken, background } from "../colors";
import Swal from "sweetalert2";

const EnviarEmail = () => {
  const inputEmailRef = useRef();
  const inputMsgRef = useRef();

  const onFormSubmit = async e => {
    e.preventDefault();

    const sender = inputEmailRef.current.value;
    const msg = inputMsgRef.current.value;

    try {
      const response = await fetch(
        "https://send-myself-an-email.herokuapp.com/me",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            token: process.env.TOKEN,
            sender,
            msg,
          },
        }
      );
      if (response.status === 200)
        Swal.fire("Sucesso", "E-mail enviado com sucesso :)", "success");
      else Swal.fire("Erro", "Algo deu errado ao enviar o e-mail :(", "error");

      inputEmailRef.current.value = "";
      inputMsgRef.current.value = "";
    } catch (error) {
      console.log(error);
      Swal.fire("Erro", "Algo deu errado ao enviar o e-mail :(", "error");
    }
  };

  return (
    <>
      <form onSubmit={onFormSubmit} css={formStyle}>
        <input
          ref={inputEmailRef}
          type="email"
          name="email"
          placeholder="Seu e-mail"
        />
        <textarea
          ref={inputMsgRef}
          name="msg"
          id="msg"
          rows="4"
          defaultValue="Mensagem"
        ></textarea>
        <button className="btn btn-primary" type="submit">
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
  input,
  textarea {
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
  button:disabled {
    background-color: gray !important;
  }
`;

export default EnviarEmail;
