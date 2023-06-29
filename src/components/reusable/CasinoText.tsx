import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

interface CasinoTextProps {
  count: string;
  className: string;
}

const CasinoText = ({ count, className }: CasinoTextProps) => {
  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        classNames="casino-text-animated"
        timeout={5000}
        key={count}
      >
        <CasinoTextStyled className={className}>{count}</CasinoTextStyled>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default CasinoText;

const CasinoTextStyled = styled.div`
  .casino-text-animated-enter {
    background: red;
  }
  .casino-text-animated-enter-active {
    background: blue;
  }
  .casino-text-animated-enter-done {
    background: orange;
  }

  .casino-text-animated-exit {
    background: green;
  }
  .casino-text-animated-exit-active {
    background: yellow;
  }
`;
