import LoginForm from "./LoginForm";
import styled from "styled-components";
import bgImage from "../../../assets/images/F03_burger-background.jpg";
import { theme } from "../../../theme/index.js";
import LoginWelcome from "./LoginWelcome";

export default function Login() {
  return (
    <LoginStyled>
      <LoginWelcome />
      <hr />
      <LoginForm />
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: ${theme.spacing.lg};

  background-color: ${theme.colors.background_dark};
  background-size: cover;
  background-position: center;
  background-position-y: 40%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${bgImage});

  hr {
    border: none;
    flex-shrink: 0;
    min-width: 550px;
    height: 5px;
    background-color: ${theme.colors.loginLine};
  }
`;
