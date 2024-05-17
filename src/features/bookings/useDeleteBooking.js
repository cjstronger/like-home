import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export default function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteMutate, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      toast.success(`Booking has been successfully deleted`),
        queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("Booking could not be deleted, bling blow"),
  });
  return { deleteMutate, isDeleting };
}
