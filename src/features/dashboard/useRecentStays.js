import { useQuery } from "@tanstack/react-query";
import { getStaysAfterDate } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { subDays } from "date-fns";

export default function useRecentStays() {
  const [searchPerams] = useSearchParams();
  const numDays = !searchPerams.get("last")
    ? 7
    : Number(searchPerams.get("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: stays, isLoading: loadingStays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["stays", `stays:${numDays}`],
  });

  const confirmedStays = stays?.filter((stay) => stay.status !== "unconfirmed");

  return { stays, confirmedStays, loadingStays, numDays };
}
