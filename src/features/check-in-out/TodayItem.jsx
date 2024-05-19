/*eslint-disable react/prop-types */

import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import useCheckin from "./useCheckin";
import useCheckout from "./useCheckout";

export const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;
const statusToTagName = {
  unconfirmed: "blue",
  "checked-in": "green",
  "checked-out": "silver",
};

export const Guest = styled.div`
  font-weight: 500;
`;

export default function TodayItem({ today }) {
  const { id, status, numNights, guests } = today;
  const { checkinMutate, isCheckingIn } = useCheckin();
  const { checkoutMutate, isCheckingOut } = useCheckout();
  return (
    <StyledTodayItem>
      {status === "unconfirmed" ? (
        <Tag type="blue">Arriving</Tag>
      ) : (
        <Tag type="green">Leaving</Tag>
      )}
      <Flag
        src={today.guests.countryFlag}
        alt={`Flag of ${today.guests.nationality}`}
      />
      <Guest>{guests.fullName}</Guest>
      <div>{numNights} nights</div>
      {status === "unconfirmed" ? (
        <Button
          size="small"
          variation="primary"
          disabled={isCheckingIn}
          onClick={() => checkinMutate({ bookingId: id, breakfast: {} })}
        >
          Checkin
        </Button>
      ) : (
        <Button
          size="small"
          variation="primary"
          disabled={isCheckingOut}
          onClick={() => checkoutMutate(id)}
        >
          Checkout
        </Button>
      )}
    </StyledTodayItem>
  );
}
