import { useState } from "react";
import { HiMiniUserGroup } from "react-icons/hi2";
import {  Modal, ModalContent, StyledBackdrop } from './modal_setup'

const GroupCard = () => {
    const [openModal, setOpenModal] = useState(false)
    // const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    return (
        <>
            <div className="relative min-w-80 max-w-96 h-max bg-white shadow-[0_0_10px_-10px_rgba(0,0,0,0.5)] rounded-lg flex flex-col p-4 hover:bg-slate-200" onClick={() => { setOpenModal(true) }}>
                <span className="font-rubik font-bold text-3xl text-black/55">Arisan 1</span>
                <span className="font-rubik font-medium text-lg text-black/55">191810101079</span>
                <div className="w-full h-32 bg-base-color rounded-lg justify-center items-center mt-1">
                    <HiMiniUserGroup className="w-full h-full text-black/30" />
                </div>
                <div className="flex justify-between mt-3 font-rubik font-bold">
                    <span className="text-lg text-black/55 hover:text-black/70 cursor-pointer">Details</span>
                    <span className="text-white bg-green-600 px-2 py-1 rounded-lg text-sm">Active</span>
                </div>
            </div>
            <Modal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={openModal}
                onClose={handleClose}
                slots={{ backdrop: StyledBackdrop }}
            >
                <ModalContent className="outline-none">
                    <div className="w-96 p-7">
                        <form className="flex flex-col gap-2">
                            <label htmlFor="name" className="flex flex-col font-rubik gap-1">
                                <span className="text-black/55 font-bold text-xl">Name</span>
                                <input placeholder="Your Name" type="text" name="name" autoComplete="off" className="text-black/70 rounded-lg text-xl p-3 outline outline-black/40 focus:outline-2 focus:outline-blue-400" />
                            </label>
                            <label htmlFor="name" className="flex flex-col font-rubik gap-1">
                                <span className="text-black/55 font-bold text-xl">Name</span>
                                <input placeholder="Your Name" type="text" name="name" autoComplete="off" className="text-black/70 rounded-lg text-xl p-3 outline outline-black/40 focus:outline-2 focus:outline-blue-400" />
                            </label>
                            <label htmlFor="name" className="flex flex-col font-rubik gap-1">
                                <span className="text-black/55 font-bold text-xl">Name</span>
                                <input placeholder="Your Name" type="text" name="name" autoComplete="off" className="text-black/70 rounded-lg text-xl p-3 outline outline-black/40 focus:outline-2 focus:outline-blue-400" />
                            </label>
                            <div className="flex justify-between gap-6 mt-4">
                                <input type="button" value="Cancel" className="flex-1 p-3 bg-red-600 text-white rounded-lg" />
                                <input type="button" value="Submit" className="flex-1 p-3 bg-green-700 text-white rounded-lg" />
                            </div>
                        </form>

                    </div>
                </ModalContent>
            </Modal>
        </>
    )
}

export default GroupCard
