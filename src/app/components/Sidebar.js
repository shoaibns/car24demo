import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsCardList } from "react-icons/bs";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { LuMessageSquareText } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="w-64 bg-[#050b20] text-white h-full flex flex-col p-6">
      {/* Sidebar Navigation List */}
      <ul className="space-y-6">
        <li className="text-lg hover:text-blue-400 cursor-pointer flex items-center space-x-2">
          <Link href="/dashboard" className="flex items-center gap-x-3">
            <LuLayoutDashboard /> <span>Dashboard</span>
          </Link>
        </li>
        <li className="text-lg hover:text-blue-400 cursor-pointer flex items-center space-x-2">
          <Link href="/dashboard/adduser" className="flex items-center gap-x-3">
            <MdOutlinePostAdd /> <span>Add User</span>
          </Link>
        </li>
        <li className="text-lg hover:text-blue-400 cursor-pointer flex items-center space-x-2">
          <Link
            href="/dashboard/userlist"
            className="flex items-center gap-x-3"
          >
            <BsCardList /> <span>User's List</span>
          </Link>
        </li>

        <li className="text-lg hover:text-blue-400 cursor-pointer flex items-center space-x-2">
          <Link href="/dashboard/addcar" className="flex items-center gap-x-3">
            <MdOutlinePostAdd /> <span>Add Car</span>
          </Link>
        </li>
        <li className="text-lg hover:text-blue-400 cursor-pointer flex items-center space-x-2">
          <Link href="/dashboard/carlist" className="flex items-center gap-x-3">
            <BsCardList /> <span>Car List</span>
          </Link>
        </li>

        <li className="text-lg hover:text-blue-400 cursor-pointer flex items-center space-x-2">
          <Link
            href="/dashboard/favorites"
            className="flex items-center gap-x-3"
          >
            <FaHeartCircleCheck /> <span>My Favorites</span>
          </Link>
        </li>
        <li className="text-lg hover:text-blue-400 cursor-pointer flex items-center space-x-2">
          <Link href="/dashboard/search" className="flex items-center gap-x-3">
            <CiSearch /> <span>Saved Search</span>
          </Link>
        </li>
        <li className="text-lg hover:text-blue-400 cursor-pointer flex items-center space-x-2">
          <Link
            href="/dashboard/messages"
            className="flex items-center gap-x-3"
          >
            <LuMessageSquareText /> <span>Messages</span>
          </Link>
        </li>
        <li className="text-lg hover:text-blue-400 cursor-pointer flex items-center space-x-2">
          <Link href="/dashboard/profile" className="flex items-center gap-x-3">
            <FaRegUser /> <span>My Profile</span>
          </Link>
        </li>
      </ul>
      {/* Logout Button */}
      <div className="mt-auto text-lg hover:text-blue-400 cursor-pointer">
        <Link className="flex items-center space-x-2" href="/home">
          <TbLogout2 /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
