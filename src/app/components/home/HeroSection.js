import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

function HeroSection() {
  return (
    <div
      className="min-w-screen min-h-screen bg-gray-800 flex flex-col items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Navigation */}
      <nav className="w-full pt-3 px-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="brand-logo text-2xl font-bold text-white">Car 24</div>

        {/* Centered Navigation Items */}
        <ul className="absolute left-1/2 transform -translate-x-1/2 flex gap-x-6">
          <li className="relative group text-gray-50">
            All
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group text-gray-50">
            New
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
          <li className="relative group text-gray-50">
            Used
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
        </ul>

        {/* Right-side Actions */}
        <div className="action flex items-center gap-x-4">
          <div className="signin ">
            {/* <Link className='flex items-center gap-x-2 text-gray-50' href="/dashboard"> */}
            <Link
              className="flex items-center gap-x-2 text-gray-50"
              href="/auth/login"
            >
              <FaRegUser />
              Sign in
            </Link>
          </div>
          <div className="add-listing">
            <button className="py-3 px-7 border rounded-full text-gray-50">
              Add Listing
            </button>
          </div>
        </div>
      </nav>

      {/* Search Navigation */}
      <div className="w-3/4 search-nav bg-gray-50/10 backdrop-blur-md border py-3 pl-9 pr-3 rounded-full mt-3">
        <ul className="flex justify-between items-center text-gray-100">
          <li>Add Model</li>
          <span className="w-[2px] h-8 bg-gray-50/20"></span>
          <li>Any Makes</li>
          <span className="w-[2px] h-8 bg-gray-50/20"></span>
          <li>Any Model</li>
          <span className="w-[2px] h-8 bg-gray-50/20"></span>
          <li>Any Price</li>
          <span className="w-[2px] h-8 bg-gray-50/20"></span>
          <li>Any Price</li>
          <span className="w-[2px] h-8 bg-gray-50/20"></span>
          <li>
            <button className="flex items-center gap-x-1 text-gray-950 bg-gray-200 py-4 px-8 rounded-full border-gray-950">
              <IoSearchOutline />
              Search 999+ Cars
            </button>
          </li>
        </ul>
      </div>

      {/* Hero Content */}
      <p className="mt-24 mb-8 text-gray-100 text-2xl">
        We make finding the right car simple
      </p>
      <h2 className="text-7xl text-gray-50 font-bold mb-14">
        Search Less. Live More.
      </h2>
      <div className="action-btns flex items-center gap-x-4 mb-4">
        <button className="view-inventry text-gray-950 bg-gray-200 py-4 px-8 rounded-full">
          View Inventory
        </button>
        <button className="view-inventry text-gray-100 bg-transparent py-4 px-8 border border-gray-100-100 rounded-full">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
