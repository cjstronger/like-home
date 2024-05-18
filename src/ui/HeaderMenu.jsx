import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import Logout from "../features/authentication/Logout";
import { useNavigate } from "react-router";

const ButtonList = styled.ul`
  margin-top: 1px;
  display: flex;
`;

export default function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <ButtonList>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
    </ButtonList>
  );
}
