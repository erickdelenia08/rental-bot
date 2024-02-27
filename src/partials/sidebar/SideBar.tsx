import logo from '../../assets/Logo.svg';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import MenuItem from "./MenuItem";
import { sidebar_item } from '../../utils/sidebar_Item';
import { IoIosArrowDroprightCircle } from "react-icons/io";

const SideBar = () => {
    const [visitedNavbar, setVisitedNavbar] = useState('home')
    const [extendNavbar, setextedNavbar] = useState(false)

    return (
        <nav className={`bg-white h-screen ${extendNavbar ? 'min-w-max' : 'md:w-64'} shadow-[0_0_30px_-6px_rgba(0,0,0,0.3)] rounded-tr-3xl rounded-br-3xl absolute md:static flex-col flex items-center justify-between pt-6 pb-2 pr-4 md:translate-x-0 -translate-x-56 transition duration-500 ease-in-out`}>
            <div className='w-full flex flex-col items-center px-4'>
                <NavLink to='/' onClick={() => { setVisitedNavbar('home') }}>
                    <img src={logo} alt="ini logonya" width="40px" className='cursor-pointer select-none' />
                </NavLink>
                <span className={`${extendNavbar?'scale-0':'scale-100'} font-bold mt-3 text-xl text-black text-opacity-70 duration-200 transition ease-in-out origin-center`}>Rental Bot</span>
                <IoIosArrowDroprightCircle style={{ color: "black", opacity: "0.6", fontSize: "1.8em" }} className={`absolute -right-4 top-28 ${extendNavbar && 'rotate-180'}`} onClick={() => { setextedNavbar(!extendNavbar) }} />
                <hr className='w-full mt-5 mb-5' />
                {sidebar_item.map((item, index) => {
                    return (
                        <MenuItem key={index} path={item.path} label={item.label} MenuIcon={item.icon} visitedNavbar={visitedNavbar} setVisitedNavbar={setVisitedNavbar} isExtendNavbar={extendNavbar} />
                    );
                })}
            </div>
        </nav>

    )
}


export default SideBar;