import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

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

  .casino-text-animated-enter {
    transform: translateY(100%);
  }
  .casino-text-animated-enter-active {
    transform: translateY(0%);
    transition: 300ms;
  }

  .casino-text-animated-exit {
    transform: translateY(0%);
    position: absolute;
    ${({ alignment }) => (alignment === "left" ? "left: 0;" : "right: 0;")}
    bottom: 0;
  }
  .casino-text-animated-exit-active {
    transform: translateY(-100%);
    transition: 300ms;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
