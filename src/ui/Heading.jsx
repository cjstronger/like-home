import styled, { css } from "styled-components";

const Header = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 800;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 800;
    `}
    ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 400;
    `}
`;
export default Header;
