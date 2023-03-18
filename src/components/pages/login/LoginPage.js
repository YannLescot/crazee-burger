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
  gap: ${theme.spacing.xl};

  background-color: ${theme.colors.background_dark};
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${bgImage});

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  hr {
    border: none;
    flex-shrink: 0;
    min-width: 550px;
    height: 5px;
    background-color: ${theme.colors.loginLine};
  }
`;
