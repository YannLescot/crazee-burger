import React from "react";
import { Link, useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function UserProfile() {
  const { username } = useParams();

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
      font-size: ${theme.font.sizes.SM};
      color: ${theme.colors.greyBlue};
      margin: 0px;

      .username {
        font-weight: ${theme.font.weights.bold};
        color: ${theme.colors.primary};
      }
    }

    .disconnect {
      font-size: ${theme.font.sizes.XXS};
      font-weight: ${theme.font.weights.regular};
      color: ${theme.colors.greyBlue};
    }
  }

  .icon {
    font-size: ${theme.font.sizes.P4};
    color: ${theme.colors.greyBlue};
  }
`;
