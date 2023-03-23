import React from "react";
import { Link, useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../../theme";

/*
    Le hook useParams permet de récupérer les paramètres de l'URL (passé dans le path de la route)

  */
export default function UserPanel() {
  const { username } = useParams();
  return (
    <UserPanelStyled>
      <div className="panelText">
        <span className="welcomeTxt">
          Hey, <span className="username">{username}</span>
        </span>
        <Link to="/">
          <span className="disconnect">Se déconnecter</span>
        </Link>
      </div>
      <BsPersonCircle className="icon" />
    </UserPanelStyled>
  );
}

const UserPanelStyled = styled.div`
  gap: ${theme.spacing.xs};
  margin-right: 70px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  .panelText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a:link,
    a:visited {
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
      text-underline-offset: 5px;
    }

    .welcomeTxt {
      font-size: ${theme.fonts.size.P0};
      color: ${theme.colors.greyBlue};

      .username {
        font-weight: ${theme.fonts.weight.bold};
        color: ${theme.colors.primary};
      }
    }

    .disconnect {
      font-size: ${theme.fonts.size.XXS};
      font-weight: ${theme.fonts.weight.regular};
      color: ${theme.colors.greyBlue};
    }
  }

  .icon {
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`;
