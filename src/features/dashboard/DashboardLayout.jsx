import styled from "styled-components";
import useRecentStays from "./useRecentStays";
import Spinner from "../../ui/Spinner";
import useRecentBookings from "./useRecentBookings";
import Stats from "./Stats";
import DashboardBox from "./DashboardBox";
import Today from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  const { stays, loadingStays, confirmedStays, numDays } = useRecentStays();
  const { bookings, loadingBookings } = useRecentBookings();

  if (loadingBookings || loadingStays) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        confirmedStays={confirmedStays}
        isLoading={loadingStays}
        numNights={numDays}
        stays={stays}
      />
      <Today />
      <p>Chart stay durations</p>
      <p>Chart sales</p>
    </StyledDashboardLayout>
  );
}
