import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "./TextInput.js";

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
      <span>Connectez-vous</span>
      <div className="inputContainer">
        <TextInput
          value={name}
          onChange={handleInputChange}
          type="text"
          placeholder={"Entrez votre prénom"}
          Icon={
            <BsPersonCircle className="personIcon" color="gray" size="20px" />
          }
          required
        />
      </div>
      <button>
        Accéder à mon espace{" "}
        <IoChevronForward className="nextChevron" size="25px" />
      </button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: 10%;

  span {
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.P5};
    font-weight: ${theme.weights.bold};
    color: ${theme.colors.white};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 550px;
    height: 75px;
    gap: ${theme.spacing.xs};
    background-color: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.borderRadius.round};
    font-size: ${theme.fonts.P2};
    font-weight: ${theme.weights.bold};
    &:hover {
      border: 2px solid ${theme.colors.primary_burger};
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary_burger};
      .nextChevron {
        color: ${theme.colors.primary_burger};
      }
    }
  }
`;
