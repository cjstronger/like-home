import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting } from "../../services/apiSettings";

export default function useEditSettings() {
  const queryClient = useQueryClient();
  const { mutate: editMutate, isLoading: isEditing } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("Settings edited successfully"),
        queryClient.invalidateQueries({
          queryKey: ["settings"],
        });
    },
    onError: (err) => toast.error(err.message),
  });
  return { editMutate, isEditing };
}
