import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

function CarList() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-11">
        <h1 className=" mt-11 text-3xl font-bold text-gray-900">My Listings</h1>
        <p className="text-gray-600 pt-2">
          Lorem ipsum dolor sit amet, consectetur.
        </p>
      </div>
      <div className="overflow-x-auto border rounded-xl p-6">
        <div className="search-nav flex justify-between items-center space-x-6">
          {/* Search Input */}
          <div className="relative flex items-center mb-4 border rounded-lg border-gray-500">
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              className="pl-10 pr-4 py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Search by name"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="w-60 flex items-center gap-x-4 border border-gray-100 rounded-md bg-gray-50 px-4 py-2">
            <label htmlFor="sortby" className="w-1/2 text-gray-700">
              Sort By
            </label>
            <select
              id="sortby"
              className="mx-auto bg-none border-none outline-none text-gray-700 w-1/2"
            >
              <option value="">Select</option>
              <option value="name">Newest</option>
              <option value="name">Old</option>
              <option value="name">Name</option>
              <option value="date">Date</option>
              <option value="role">Role</option>
            </select>
          </div>
        </div>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
            <tr>
              <th className="text-left px-6 py-4 ">Make</th>
              <th className="text-left px-6 py-4 ">Model</th>
              <th className="text-left px-6 py-4 ">Year</th>
              <th className="text-left px-6 py-4 ">Transmission</th>
              <th className="py-2 px-4 font-semibold text-left">Fuel Type</th>
              <th className="py-2 px-4 font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <tr key={index} className="hover:bg-gray-50 transition0">
                  <td className="px-6 py-4 flex flex-col gap-y-4">
                    <img
                      className="h-36 w-36 rounded"
                      src="https://creativelayers.net/themes/boxcar-html/images/resource/add-car1.jpg"
                      alt="Car"
                    />
                    <div>
                      <p className="font-bold text-gray-800">
                        Mercedes-Benz, C Class
                      </p>
                      <p className="text-gray-600 text-sm">
                        2023 C300e AMG Line Night Ed Premium Plus 5
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-700">Volo</td>
                  <td className="py-4 px-6 text-gray-700">2023</td>
                  <td className="py-4 px-6 text-gray-700">Automatic</td>
                  <td className="py-4 px-6 text-gray-700">Petrol</td>
                  <td className="py-4 px-6 text-center">
                    <button className="px-3 py-3 text-gray-950 text-1xl border-2 border-gray-300 rounded-2xl mr-4">
                      <AiOutlineDelete />
                    </button>
                    <button className="px-3 py-3 text-gray-950 text-1xl border-2 border-gray-300 rounded-2xl ">
                      <BiEditAlt />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CarList;
