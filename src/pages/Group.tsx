import SideBar from "../partials/sidebar/SideBar"
import { FaSearch } from "react-icons/fa";
import GroupCard from "../partials/group/GroupCard";

const GroupPage = () => {

    return (
        <>
            <div className="bg-base-color flex flex-row h-screen w-screen">
                <SideBar />
                <div className="flex flex-col flex-1 items-center overflow-auto">
                    <label htmlFor="search" className="flex relative m-10 shadow-[0_0_25px_-10px_rgba(0,0,0,0.5)]">
                        <FaSearch className="text-xl absolute top-3 left-3" />
                        <input autoComplete="off" placeholder="Search the Group" type="text" name="search" aria-label="search" className="pl-10 pr-2 py-2 outline-yellow-400 text-black/60 font-rubik text-lg text-ellipsis" />
                    </label>
                    <div className="w-full flex flex-wrap gap-3 justify-center">
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                        <GroupCard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroupPage
