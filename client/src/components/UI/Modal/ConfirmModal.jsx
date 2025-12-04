import RectangleContainer from "../container/RectangleContainer";
import ModalOverlay from "../overlay/ModalOverlay";

import { confirmModalService } from "../../../services/dispatch/confirmModalService";
export default function ConfirmModal({ confirm, cancel, title }) {
  return (
    <>
      <ModalOverlay
        action={() => {
          confirmModalService.setClose();
        }}
      >
        <RectangleContainer>
          <h2 className="text-center">
            Are you sure you wanna delete {title}?
          </h2>
          <section className="flex justify-center gap-4 mt-10">
            <button className="dangerButton" onClick={confirm}>
              Confirm
            </button>
            <button className="normalButton" onClick={cancel}>
              Cancel
            </button>
          </section>
        </RectangleContainer>
      </ModalOverlay>
    </>
  );
}
