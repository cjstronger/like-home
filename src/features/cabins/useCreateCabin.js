import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editCreateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createMutate, isLoading: isCreating } = useMutation({
    mutationFn: editCreateCabin,
    onSuccess: () => {
      toast.success("Cabin created successfully"),
        queryClient.invalidateQueries({
          queryKey: ["cabins"],
        });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createMutate, isCreating };
}
