import LoginForm from "./LoginForm";
import styled from "styled-components";
import bgImage from "../../../assets/images/F03_burger-background.jpg";
import { theme } from "../../../theme/index.js";
import LoginWelcome from "./LoginWelcome";

export default function Login() {
  return (
    <LoginStyled>
      <LoginWelcome />
      <div className="lineSeparator"></div>
      <LoginForm />
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  gap: ${theme.spacing.xl};
  //background-color: aliceblue;
  background-color: ${theme.colors.background_dark};
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${bgImage});
  background-size: cover;
  background-position: center;
  opacity: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  .lineSeparator {
    flex-shrink: 0;
    width: 30%;
    height: 5px;
    background-color: orangered;
  }
`;
