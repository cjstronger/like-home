import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

export default function AddCabins() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="add-new">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="add-new">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
