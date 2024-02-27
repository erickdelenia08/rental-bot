import { useState } from "react";
import { HiMiniUserGroup } from "react-icons/hi2";
import {TriggerButton,Modal,ModalContent, StyledBackdrop} from './modal_setup'

const GroupCard = () => {
    const [openModal, setOpenModal] = useState(false)
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    return (
        <div className="relative min-w-80 max-w-96 h-max bg-white shadow-[0_0_10px_-10px_rgba(0,0,0,0.5)] rounded-lg flex flex-col p-4 hover:bg-slate-200" onClick={() => { setOpenModal(true) }}>
            <span className="font-rubik font-bold text-3xl">Arisan 1</span>
            <span className="font-rubik font-medium text-lg text-black/55">191810101079</span>
            <div className="w-full h-32 bg-base-color rounded-lg justify-center items-center mt-1">
                <HiMiniUserGroup className="w-full h-full text-black/30" />
            </div>
            <div className="flex justify-between mt-3 font-rubik font-bold">
                <span className="text-lg text-black/55 hover:text-black/70 cursor-pointer">Details</span>
                <span className="text-white bg-green-600 px-2 py-1 rounded-lg text-sm">Active</span>
            </div>
            <div>
                <TriggerButton type="button" onClick={handleOpen}>
                    Open modal
                </TriggerButton>
                <Modal
                    aria-labelledby="unstyled-modal-title"
                    aria-describedby="unstyled-modal-description"
                    open={openModal}
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

        </div>
    )
}

export default GroupCard
