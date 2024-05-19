/*eslint-disable react/prop-types */

import {
  HiBriefcase,
  HiCalendarDays,
  HiChartBar,
  HiCurrencyDollar,
} from "react-icons/hi2";
import Stat from "./Stat";
import Spinner from "../../ui/Spinner";
import { formatCurrency } from "../../utils/helpers";
import useCabinQuery from "../cabins/useCabinQuery";

export default function Stats({ confirmedStays, numNights, stays }) {
  const totalConfirmedStays = confirmedStays.length;
  const totalStays = stays.length;
  const totalMoney = confirmedStays.reduce(
    (acc, curr) => acc + curr.totalPrice,
    0
  );
  const { cabins, isLoading } = useCabinQuery();
  if (isLoading) return <Spinner />;

  const occupencyRate = Math.round(
    (totalConfirmedStays / (numNights * cabins.length)) * 100
  );

  return (
    <>
      <Stat
        color="blue"
        icon={<HiBriefcase />}
        title="Bookings"
        value={totalStays}
      />
      <Stat
        color="green"
        icon={<HiCurrencyDollar />}
        title="Sales"
        value={formatCurrency(totalMoney)}
      />
      <Stat
        color="blue"
        icon={<HiCalendarDays />}
        title="Check-ins"
        value={totalConfirmedStays}
      />
      <Stat
        color="yellow"
        icon={<HiChartBar />}
        title="Occupancy Rate"
        value={`${occupencyRate}%`}
      />
    </>
  );
}
