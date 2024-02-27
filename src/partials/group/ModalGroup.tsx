import * as React from 'react';
import {TriggerButton,Modal,ModalContent, StyledBackdrop} from './modal_setup'

type Props = {
  open: boolean;
  setOpen:React.Dispatch<React.SetStateAction<boolean>>;
};


export default function ModalGroup({open, setOpen}:Props) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <TriggerButton type="button" onClick={handleOpen}>
        Open modal
      </TriggerButton>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={{ width: 400 }}>
          <h2 id="unstyled-modal-title" className="modal-title">
            Text in a modal
          </h2>
          <p id="unstyled-modal-description" className="modal-description">
            Aliquid amet deserunt earum!
          </p>
        </ModalContent>
      </Modal>
    </div>
  );
}