import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index.js";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable/TextInput";
import Button from "../../reusable/Button";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState<string>("Yann");
  const navigate = useNavigate();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue("");
    navigate(`/order/${inputValue}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <LoginFormStyled onSubmit={handleOnSubmit}>
      <h1>Régalez-vous chez nous !</h1>
      <hr />
      <h2>Quel est votre prénom ?</h2>
      <TextInput
        value={inputValue}
        onChange={(e) => handleChange(e as any)}
        placeholder={"Entrez votre prénom"}
        Icon={<BsPersonCircle className="icon" />}
        variant="normal"
        required
      />
      <Button
        label="Accéder à mon espace"
        Icon={<IoChevronForward className="icon" />}
        iconPos="right"
        variant="primary"
        size="xlarge"
        onClick={() => {}}
      />

      <p className="copyright">
        Copyright © 2023 Yann Lescot - Tous droits réservés.
      </p>
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
    font-weight: ${theme.font.weights.regular};
    color: ${theme.colors.white};
  }

  hr {
    border: none;
    flex-shrink: 0;
    min-width: 400px;
    height: 2px;
    background-color: ${theme.colors.primary};
  }

  h2 {
    font-family: ${theme.font.families.stylish};
    font-size: ${theme.font.sizes.P4};
    font-weight: ${theme.font.weights.regular};
    color: ${theme.colors.white};
    margin-top: 8px;
    margin-bottom: 0px;
  }

  .copyright {
    position: absolute;
    bottom: 0;
    color: rgba(255, 255, 255, 0.4);
  }

  @media ${theme.devices.mobile} {
    margin-top: ${theme.spacing.xl};

    h1 {
      font-size: ${theme.font.sizes.P3};
    }
    h2 {
      font-size: ${theme.font.sizes.P2};
    }

    hr {
      min-width: 200px;
    }

    p {
      font-size: ${theme.font.sizes.SM};
    }
  }
`;
