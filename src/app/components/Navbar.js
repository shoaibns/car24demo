import React from "react";

function Navbar() {
  return (
    <div className=" flex justify-between items-center bg-[#050b20] p-3">
      {/* Brand Logo */}

      <h2 className="text-2xl font-bold text-white">Car 24</h2>

      {/* Navigation Menu */}
      <ul className="flex space-x-8 text-gray-300">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">Inventory</li>
        <li className="hover:text-white cursor-pointer">Blog</li>
        <li className="hover:text-white cursor-pointer">Shop</li>
        <li className="hover:text-white cursor-pointer">Pages</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
      </ul>

      {/* Profile Section */}
      <div className="profile">
        <img
          className="rounded-full w-14 h-14 border-2 border-gray-300"
          src="https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default Navbar;
