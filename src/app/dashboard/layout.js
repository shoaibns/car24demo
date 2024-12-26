import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Full-width Navbar */}
      <div className="w-full bg-[#050b20] text-white">
        <Navbar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-[#050b20] text-white">
          <Sidebar />
        </div>

        {/* Content Section */}
        <div className="flex-1 bg-gray-50">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
