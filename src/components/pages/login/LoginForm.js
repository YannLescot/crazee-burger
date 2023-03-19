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
      <small>Connectez-vous</small>
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
  margin-top: ${theme.spacing.xs};
  display: flex;
  max-width: 500px;
  max-height: 400px;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.round};
  margin-bottom: 10%;

  small {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weight.bold};
    color: ${theme.colors.white};
  }

  .icon {
    font-size: ${theme.fonts.size.P2};
  }
`;
