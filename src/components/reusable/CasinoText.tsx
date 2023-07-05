import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { casinoTextAnimation } from "../../keyframes/animations";

interface CasinoTextProps {
  count: string;
  className: string;
  alignment?: "left" | "right";
}

const CasinoText = ({ count, className, alignment }: CasinoTextProps) => {
  return (
    <CasinoTextStyled>
      <TransitionGroup className="transition-group">
        <CSSTransition
          classNames="casino-text-animated"
          timeout={300}
          key={count}
        >
          <span className={className}>{count}</span>
        </CSSTransition>
      </TransitionGroup>
    </CasinoTextStyled>
  );
};

export default CasinoText;

const CasinoTextStyled = styled.div<{ alignment?: string }>`
  position: relative;
  overflow-y: hidden;

  span {
    display: inline-block;
  }

  ${casinoTextAnimation}

  .casino-text-animated-exit {
    ${({ alignment }) => (alignment === "left" ? "left: 0;" : "right: 0;")}
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
