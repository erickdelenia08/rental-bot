import SideBar from "../partials/sidebar/SideBar"
import QRCode from 'react-qr-code';
import succesImage from '../assets/Images/succesfuly.png'
import Dropdownmenu from "../partials/dropdown";
import { useState } from "react";

function Device() {
    const [isConnected, _] = useState(true)
    return (
        <>
            <div className="bg-base-color h-screen w-full flex flex-row">
                <SideBar />
                <div className="flex flex-col flex-1 items-center h-full w-full justify-center">
                    <div className="flex flex-col xl:flex-row w-2/3 h-2/3 shadow-[0_0_25px_-18px_rgba(0,0,0,0.4)] rounded-2xl bg-white">
                        <div className="px-10 flex-1 rounded-md justify-center items-center flex xl:order-1 order-2">
                            <div className="w-full h-2/3 flex flex-col bg-base-color/70 rounded-2xl">
                                <span className="font-rubik text-black/65 mx-5 mt-5 mb-3 text-3xl font-bold">Log</span>
                                <ul className="ml-5 text-lg font-rubik text-black/40 font-medium">
                                    <li>Waiting for server...</li>
                                    <li>Connecting...</li>
                                    <li>Succesfuly Connected</li>
                                </ul>

                            </div>
                        </div>
                        <div className="relative flex-1 flex flex-row justify-center items-center rounded-md xl:order-2 order-1">
                            <div className="absolute right-2 top-2">
                                <Dropdownmenu />
                            </div>
                            <div className=" w-2/3 h-2/3 flex">
                                {isConnected ? <QRCode
                                    // title="GeeksForGeeks"
                                    value={'GeeksForGeeks'}
                                    bgColor={'#FFFFFF'}
                                    fgColor={'#000000'}
                                    size={20}
                                    className="w-full h-full"
                                /> :
                                    <div className="w-full h-full flex flex-col justify-center items-center">
                                        <img src={succesImage} alt="succesfuly" className="w-36" />
                                        <span className="font-rubik font-bold text-custom-green text-2xl">Connected</span>
                                    </div>
                                }


                            </div>
                            {/* <img src="" alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Device
