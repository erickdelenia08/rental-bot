import { NavLink } from "react-router-dom";

interface MenuItemProps {
    label: String;
    path: string;
    key: React.Key;
    MenuIcon: any;
    isExtendNavbar: Boolean;
    visitedNavbar: String;
    setVisitedNavbar: React.Dispatch<React.SetStateAction<string>>
}
const iconStyles = { color: "black", opacity: "0.2", fontSize: "1.5em" };
const selectedIconStyles = { color: "white", opacity: "0.7", fontSize: "1.5em" };

const MenuItem = ({ setVisitedNavbar, visitedNavbar, MenuIcon, label, key, path, isExtendNavbar }: MenuItemProps) => {

    const clickedNavbar = () => {
        setVisitedNavbar(path)
    }

    return (
        <NavLink to={`/${path}`} key={key} className={`flex flex-row h-full ${isExtendNavbar && 'justify-center'} items-center mt-4 w-full hover:bg-black hover:bg-opacity-80 gap-3 p-2 rounded-md cursor-pointer select-none hover:text-white text-black hover:text-opacity-100 text-opacity-40`} onMouseEnter={clickedNavbar} onClick={clickedNavbar} onMouseLeave={() => { setVisitedNavbar('false') }}>
            <MenuIcon style={visitedNavbar === path ? selectedIconStyles : iconStyles} />
            <span className={`font-semibold ${isExtendNavbar ? 'hidden opacity-0' : 'block opacity-100'} transition ease-in-out duration-200`}>{label}</span>
        </NavLink>
    )
}

export default MenuItem
