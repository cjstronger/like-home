import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
import DarkMode from "./DarkMode";

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

export default function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
      <DarkMode />
    </StyledHeader>
  );
}
