import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable/TextInput.js";
import Button from "../../reusable/Button";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("Yann");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`/order/${inputValue}`);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <LoginFormStyled onSubmit={onSubmit}>
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
        variant="primary"
        size="xlarge"
        padding="medium"
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
  margin-bottom: ${theme.spacing.lg};

  h1 {
    margin: 0px;
    font-family: ${theme.font.families.stylish};
    font-size: ${theme.font.sizes.P5};
    font-weight: ${theme.font.weights.bold};
    color: ${theme.colors.white};
  }

  hr {
    border: none;
    flex-shrink: 0;
    min-width: 400px;
    height: 2px;
    background-color: ${theme.colors.loginLine};
  }

  h2 {
    font-family: ${theme.font.families.stylish};
    font-size: ${theme.font.sizes.P4};
    font-weight: ${theme.font.weights.bold};
    color: ${theme.colors.white};
    margin-top: 10px;
    margin-bottom: 0px;
  }
`;
