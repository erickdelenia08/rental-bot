import { MdDevices } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

export const sidebar_item = [
    { label: 'Dasboard', icon: FaHome, path: '' },
    { label: 'Whatsapp Group', icon: HiMiniUserGroup, path: 'group' },
    { label: 'Whatsapp Device', icon: MdDevices, path: 'device' },
    { label: 'Setting', icon: IoSettingsSharp, path: 'setting' }
]