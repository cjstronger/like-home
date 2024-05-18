import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiLogin";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signUpMutate, isLoading: signingUp } = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      console.log(data);
      toast.success(
        "Successfully signed up, verify then new account from the email you provided."
      );
    },
  });
  return { signUpMutate, signingUp };
}
