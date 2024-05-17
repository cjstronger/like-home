import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/apiLogin";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: loginMutate, isLoading: loggingIn } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (data) => {
      toast.success(`Successfully logged in`);
      navigate("/");
    },
    onError: () => toast.error("Login credentials are incorrect"),
  });
  return { loginMutate, loggingIn };
}
