import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCreateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useEditCabin() {
  const queryClient = useQueryClient();
  const { mutate: editMutate, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => editCreateCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin edited successfully"),
        queryClient.invalidateQueries({
          queryKey: ["cabins"],
        });
    },
    onError: (err) => toast.error(err.message),
  });
  return { editMutate, isEditing };
}
