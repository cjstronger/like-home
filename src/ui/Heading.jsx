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
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 3rem;
      font-weight: 800;
      text-align: center;
    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
`;
export default Header;
