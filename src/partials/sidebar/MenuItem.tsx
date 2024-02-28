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
const iconStyles = { color: "black", opacity: "0.6", fontSize: "1.1em" };
const selectedIconStyles = { color: "black", opacity: "0.5", fontSize: "1.1em" };

const MenuItem = ({ setVisitedNavbar, visitedNavbar, MenuIcon, label, key, path, isExtendNavbar }: MenuItemProps) => {

    const clickedNavbar = () => {
        setVisitedNavbar(path)
    }

    return (
        <NavLink to={`/${path}`} key={key} className={`flex flex-row h-full ${isExtendNavbar && 'justify-center'} items-center mt-4 w-full hover:bg-black/10 hover:bg-opacity-80 gap-3 p-3 rounded-md cursor-pointer select-none text-black hover:text-opacity-100 text-opacity-40 duration-100`} onMouseEnter={clickedNavbar} onClick={clickedNavbar} onMouseLeave={() => { setVisitedNavbar('false') }}>
            <MenuIcon style={visitedNavbar === path ? selectedIconStyles : iconStyles} />
            <span className={`font-semibold ${isExtendNavbar ? 'hidden opacity-0' : 'block opacity-100'}`}>{label}</span>
        </NavLink>
    )
}

export default MenuItem
