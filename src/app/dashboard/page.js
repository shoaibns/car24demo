import React from "react";
import { FaCarSide } from "react-icons/fa";
import { RiPriceTag3Fill } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { IoMail } from "react-icons/io5";
import Chart from "../components/Charts";

function Dashboard() {
  return (
    <div className="w-full rounded-xl bg-white shadow-lg p-6">
      <h2 className="text-3xl font-bold text-gray-950">Dashboard</h2>
      <p className="text-gray-700 py-4">
        Your personalized overview at a glance.
      </p>
      <div className="top grid grid-cols-4 gap-4 mb-6">
        {/* Card 1 */}
        <div className="flex items-center justify-around gap-x-4 p-5 border rounded-xl shadow-md bg-gray-50">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-600">Published</p>
            <p className="font-bold text-2xl text-gray-900">3</p>
          </div>
          <div className="rounded-full bg-blue-100 flex items-center justify-center p-3">
            <FaCarSide className="text-3xl text-blue-500" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center justify-around gap-x-4 p-5 border rounded-xl shadow-md bg-gray-50">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-600">My Favorites</p>
            <p className="font-bold text-2xl text-gray-900">0</p>
          </div>
          <div className="rounded-full bg-pink-100 flex items-center justify-center p-3">
            <RiPriceTag3Fill className="text-3xl text-pink-500" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center justify-around gap-x-4 p-5 border rounded-xl shadow-md bg-gray-50">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-600">Messages</p>
            <p className="font-bold text-2xl text-gray-900">2</p>
          </div>
          <div className="rounded-full bg-green-100 flex items-center justify-center p-3">
            <TiMessages className="text-3xl text-green-500" />
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-center justify-around gap-x-4 p-5 border rounded-xl shadow-md bg-gray-50">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-600">Reviews</p>
            <p className="font-bold text-2xl text-gray-900">1</p>
          </div>
          <div className="rounded-full bg-yellow-100 flex items-center justify-center p-3">
            <IoMail className="text-3xl text-yellow-500" />
          </div>
        </div>
      </div>

      <div className="flex gap-10 items-start">
        {/* Chart Section */}
        <div className="rechart w-2/3 bg-white p-6 rounded-xl shadow-md">
          <Chart />
        </div>

        {/* Notification Section */}
        <div className="notification  bg-gray-50 border rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Notifications
          </h3>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                className="message flex items-center gap-x-4 p-3 border rounded-md bg-white hover:bg-gray-100"
              >
                <img
                  src="https://placehold.co/60"
                  alt="User"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="text-gray-900 font-medium">
                    User Name{" "}
                    <span className="text-gray-600">Message content</span>
                  </p>
                  <p className="text-gray-500 text-sm">User role or profile</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
