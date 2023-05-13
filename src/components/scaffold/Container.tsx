/** @jsx jsx */
import styled from "@emotion/styled";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const StyledContainer = styled.div`
  max-width: calc(100vw - 30%);
  margin: 0 auto;
  color: white;
  height: 100%;
  @media (max-width: 1024px) {
    max-width: calc(100vw - 10%);
  }
`;

const Container = ({ children }: Props) => {
  return <StyledContainer className="container">{children}</StyledContainer>;
};

export default Container;
