import Modal from "../../../ui/Modal";
import CreateEventForm from "./CreateEventForm";

export default function AddEvent() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="event-form">
          <button className="py-2 px-4 bg-primary-orange text-white font-semibold rounded-md">
            Add New Event
          </button>
        </Modal.Open>
        <Modal.Window name="event-form">
          <CreateEventForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
