import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiLogin";

export function useUsers() {
  const { isLoading: fetchingUser, data: user } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ["user"],
  });
  return {
    fetchingUser,
    user,
    isAuthenticated: user?.role === "authenticated",
  };
}
