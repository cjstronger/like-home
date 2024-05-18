import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../services/apiLogin";
import toast from "react-hot-toast";

export default function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: userMutate, isLoading: isUpdating } = useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      toast.success(`${data.user.user_metadata.fullName} updated successfully`);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () => toast.error("User could not be updated"),
  });
  return { userMutate, isUpdating };
}
