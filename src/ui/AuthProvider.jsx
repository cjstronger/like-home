/*eslint-disable react/prop-types */

import styled from "styled-components";
import { useUsers } from "../features/authentication/UseUsers";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-300);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function AuthProvider({ children }) {
  const { fetchingUser, user, isAuthenticated } = useUsers();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && !fetchingUser) {
        navigate("/login");
      }
    },
    [fetchingUser, isAuthenticated, navigate]
  );

  if (fetchingUser)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthenticated) return <div>{children}</div>;
}
