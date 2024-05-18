import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/apiLogin";
import { useNavigate } from "react-router";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logoutMutate, isLoading: signingOut } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigate("/login", { replace: true });
      queryClient.removeQueries();
    },
  });
  return { logoutMutate, signingOut };
}
