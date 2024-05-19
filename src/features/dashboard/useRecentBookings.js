import { useQuery } from "@tanstack/react-query";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";

export default function useRecentBookings() {
  const [searchPerams] = useSearchParams();
  const numDays = !searchPerams.get("last")
    ? 7
    : Number(searchPerams.get("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isLoading: loadingBookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDate),
    queryKey: ["bookings", `bookings:${numDays}`],
  });
  return { bookings, loadingBookings };
}
