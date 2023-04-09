import LoginForm from "./LoginForm";
import styled from "styled-components";
import bgImage from "../../../assets/images/F03_burger-background.jpg";
import { theme } from "../../../theme/index.js";
import Logo from "../../reusable/Logo";

export default function LoginPage() {
  return (
    <LoginStyled>
      <Logo className={"login-page-logo"} />
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
  background-color: ${theme.colors.background_dark};
  background-size: cover;
  background-position: center;
  background-position-y: 50%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${bgImage});
  .login-page-logo {
    transform: scale(2.5);
  }
`;
