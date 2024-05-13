import Form from "../../ui/Form";
import FormRow from "../../ui/StyledFormRow";
import Input from "../../ui/Input";
import useSettings from "./useSettings";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import useEditSettings from "./useEditSettings";
import { useForm } from "react-hook-form";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      breakfastPrice,
      minimumBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
    } = {},
  } = useSettings();
  const { isEditing, editMutate } = useEditSettings();
  const { register, handleSubmit } = useForm();

  if (isLoading) return <Spinner />;

  function onSubmit(data) {
    editMutate(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="minimumBookingLength"
          defaultValue={minimumBookingLength}
          {...register("minimumBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="maxBookingLength"
          defaultValue={maxBookingLength}
          {...register("maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="maxGuestsPerBooking"
          defaultValue={maxGuestsPerBooking}
          {...register("maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfastPrice"
          defaultValue={breakfastPrice}
          {...register("breakfastPrice")}
        />
      </FormRow>
      <Button disabled={isEditing}>Save</Button>
    </Form>
  );
}

export default UpdateSettingsForm;
