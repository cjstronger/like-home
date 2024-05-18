import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/apiLogin";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: loginMutate, isLoading: loggingIn } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success(`Successfully logged in`);
      navigate("/", { replace: true });
    },
    onError: () => toast.error("Login credentials are incorrect"),
  });
  return { loginMutate, loggingIn };
}
