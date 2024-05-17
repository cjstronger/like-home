/*eslint-disable react/prop-types */

import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import Spinner from "../../ui/Spinner";
import useBookingQuery from "../bookings/useBookingQuery";
import Checkbox from "../../ui/Checkbox";
import { useEffect } from "react";
import { useState } from "react";
import useCheckin from "./useCheckin";
import useSettings from "../settings/useSettings";
import { formatCurrency } from "../../utils/helpers";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [hasPaid, setHasPaid] = useState(false);
  const [hasBr, setHasBr] = useState(false);
  const { booking, isLoading } = useBookingQuery();
  const { settings, isLoading: isLoadingSettings } = useSettings() || {};

  useEffect(() => setHasPaid(booking?.isPaid ?? false), [booking]);

  const moveBack = useMoveBack();
  const { checkinMutate, isCheckingIn } = useCheckin();

  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking || {};

  const fullBreakfastPrice = settings.breakfastPrice * numGuests * numNights;

  function handleCheckin() {
    if (!hasPaid) return;
    if (hasBr) {
      checkinMutate({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: fullBreakfastPrice,
          totalPrice: fullBreakfastPrice + totalPrice,
        },
      });
    } else {
      checkinMutate({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={hasBr}
            id="breakfast"
            onChange={() => {
              setHasBr((hasBr) => !hasBr);
              setHasPaid(false);
            }}
          >
            Add breakfast to the trip for {formatCurrency(fullBreakfastPrice)}
          </Checkbox>
        </Box>
      )}
      <Box>
        <Checkbox
          disabled={hasPaid}
          checked={hasPaid}
          id="paid"
          onChange={() => setHasPaid((hasPaid) => !hasPaid)}
        >
          I confirm that {guests.fullName} has paid the full amount.{" "}
          {!hasBr
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + fullBreakfastPrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                fullBreakfastPrice
              )})`}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button disabled={!hasPaid || isCheckingIn} onClick={handleCheckin}>
          Check in booking #{bookingId}
        </Button>
        <Button
          disabled={isCheckingIn}
          variation="secondary"
          onClick={moveBack}
        >
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
