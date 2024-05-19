import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export default function useTodayStays() {
  const { isLoading: loadingToday, data: todayStays } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["stays"],
  });
  return { loadingToday, todayStays };
}
