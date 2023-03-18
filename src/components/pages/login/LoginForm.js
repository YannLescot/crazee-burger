import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";

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
        <BsPersonCircle className="personIcon" color="gray" size="20px" />
        <input
          type="text"
          placeholder="Entrez votre prénom"
          value={name}
          onChange={handleInputChange}
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

  .inputContainer {
    gap: ${theme.spacing.xs};
    display: flex;
    align-items: center;
    background-color: ${theme.colors.white};
    width: 550px;
    height: 75px;
    border: none;
    border-radius: ${theme.borderRadius.round};
    input {
      width: 70%;
      font-size: ${theme.fonts.P1};
      font-weight: ${theme.weights.medium};
      border-radius: ${theme.borderRadius.round};
      border: none;
    }
    .personIcon {
      margin-left: ${theme.spacing.md};
      padding: 0px 10px;
    }
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
