import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkoutMutate, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} has been checked out`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("There was an error checking out"),
  });
  return { checkoutMutate, isCheckingOut };
}
