import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable/TextInput.js";
import Button from "../../reusable/Button";

export default function LoginForm() {
  //State
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  //Comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`/order/${inputValue}`);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //Affichage
  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <TextInput
        value={inputValue}
        onChange={handleChange}
        placeholder={"Entrez votre prénom"}
        Icon={<BsPersonCircle className="icon" />}
        variant="normal"
        required
      />
      <Button
        label={"Accéder à mon espace"}
        Icon={<IoChevronForward className="icon" />}
        variant="login"
      />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  margin-top: ${theme.spacing.xxl};
  display: flex;
  max-width: 500px;
  max-height: 400px;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.round};

  h1 {
    margin: 0px;
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P5};
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.white};
  }

  hr {
    border: none;
    flex-shrink: 0;
    min-width: 400px;
    height: 3px;
    background-color: ${theme.colors.loginLine};
  }

  h2 {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.white};
    margin-bottom: 0px;
  }
`;
