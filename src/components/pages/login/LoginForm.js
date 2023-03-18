import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable/TextInput.js";
import PrimaryButton from "../../reusable/PrimaryButton";

export default function LoginForm() {
  //State
  const [name, setName] = useState("");
  const navigate = useNavigate();

  //Comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    navigate(`/order/${name}`);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  //Affichage
  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <h2>Connectez-vous</h2>
      <TextInput
        value={name}
        onChange={handleInputChange}
        placeholder={"Entrez votre prénom"}
        Icon={<BsPersonCircle className="icon" />}
        required
      />
      <PrimaryButton
        label={"Accéder à mon espace"}
        Icon={<IoChevronForward className="icon" />}
      />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: 10%;

  h2 {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.P5};
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.white};
  }

  .icon {
    font-size: 25px;
  }
`;
