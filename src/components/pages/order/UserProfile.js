import React from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function UserProfile({ username }) {
  return (
    <UserProfileStyled>
      <div className="profileTexts">
        <p className="welcome">
          Hey, <span className="username">{username}</span>
        </p>
        <Link to="/">
          <span className="disconnect">Se déconnecter</span>
        </Link>
      </div>
      <BsPersonCircle className="icon" />
    </UserProfileStyled>
  );
}

const UserProfileStyled = styled.div`
  gap: ${theme.spacing.xs};

  display: flex;
  justify-content: flex-end;
  align-items: center;

  .profileTexts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    a:link,
    a:visited {
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
      text-underline-offset: 5px;
      color: ${theme.colors.greyDark};
    }

    .welcome {
      font-size: ${theme.fonts.size.P0};
      color: ${theme.colors.greyBlue};
      margin: 0px;

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
