import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../../../theme";
import UserDescription from "./UserDescription";

export default function UserProfile() {
  return (
    <UserProfileStyled>
      <UserDescription />
      <BsPersonCircle className="icon" />
    </UserProfileStyled>
  );
}

const UserProfileStyled = styled.div`
  gap: ${theme.spacing.xs};
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .icon {
    font-size: ${theme.font.sizes.P4};
    color: ${theme.colors.greyBlue};
  }
`;
