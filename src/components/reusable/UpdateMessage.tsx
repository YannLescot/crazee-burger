import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

interface UpdateMessageProps {
  label: string;
  Icon: React.ReactNode;
  color: string;
  isDisplayed: boolean;
}

export default function UpdateMessage({
  label,
  Icon,
  color,
  isDisplayed,
}: UpdateMessageProps) {
  return (
    <UpdateMessageStyled color={color}>
      {isDisplayed && (
        <div>
          <span>{Icon}</span>

          <span>{label}</span>
        </div>
      )}
    </UpdateMessageStyled>
  );
}

const UpdateMessageStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: ${theme.font.sizes.SM};
  margin: 8px 18px;
  color: ${(props) => props.color};

  .icon {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }
`;
