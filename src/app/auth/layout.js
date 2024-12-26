import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { GrApple } from "react-icons/gr";

function Layout({ children }) {
  return (
    <div className="min-w-screen min-h-screen bg-white flex justify-center pt-10">
      {/* Adjusting max-width of the form */}
      <div className="form  w-2/5 shadow-md rounded-lg p-8">
        {/* Navigation */}
        <div className="mb-6 border-b-0 border-b-gray-400">
          <nav>
            <ul className="flex items-center space-x-8 border-b py-2 ">
              <li className="relative group text-gray-700 font-semibold hover:text-blue-500 cursor-pointer">
                <Link href="/auth/login">Signin</Link>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </li>
              <li className="relative group text-gray-700 font-semibold hover:text-blue-500 cursor-pointer">
                <Link href="/auth/signup">Register</Link>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </li>
            </ul>
          </nav>
        </div>

        {/* Children (Form Content) */}
        <div className="mb-6 ">{children}</div>
        <div className="rule w-full my-4  flex items-center gap-x-3">
          <hr className="bg-gray-50 w-full h-[0.5px]" />
          OR
          <hr className="bg-gray-50 w-full h-[0.5px]" />
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-4  ">
          <div className="action-btns flex justify-around items-center gap-x-4 mb-4">
            <button className="flex items-center gap-x-3 text-red-950  py-4 px-4 border border-red-600 rounded-2xl hover:bg-red-600 transition duration-300 ease-out">
              <FaGoogle />
              Login with Google
            </button>
            <button className="text-gray-950 flex items-center gap-x-3 bg-transparent py-4 px-4 border border-gray-950 rounded-2xl hover:text-gray-100 hover:bg-gray-950 transition duration-300 ease-out">
              <GrApple className="text-2xl" />
              Login with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
