import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme/index";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable/TextInput";
import Button from "../../reusable/Button";
import { authanticateUser } from "../../../api/user";
import Welcome from "./Welcome";

export default function LoginForm() {
  const [username, setUsername] = useState<string>("Yann");
  const navigate = useNavigate();

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    authanticateUser(username);

    setUsername("");
    navigate(`/order/${username}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <LoginFormStyled onSubmit={handleOnSubmit}>
      <Welcome />
      <TextInput
        value={username}
        onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>)}
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
