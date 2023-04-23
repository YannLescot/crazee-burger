import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function UserDescription() {
  const { username } = useParams();

  return (
    <UserDescriptionStyled>
      <p className="welcome">
        Hey, <span className="username">{username}</span>
      </p>
      <Link to="/">
        <span className="disconnect">Se déconnecter</span>
      </Link>
    </UserDescriptionStyled>
  );
}

const UserDescriptionStyled = styled.div`
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
      font-size: ${theme.font.sizes.P0};
    }
  }

  .disconnect {
    font-size: ${theme.font.sizes.XXS};
    font-weight: ${theme.font.weights.regular};
    color: ${theme.colors.greyBlue};
  }
`;
