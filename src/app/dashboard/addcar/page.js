"use client";
import React, { useState } from "react";

function AddCar() {
  const [currentStep, setCurrentStep] = useState(1);

  // Function to handle the next step
  const handleNextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Function to handle the previous step
  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* <div className="mb-11">
        <h1 className="mt-11 text-3xl font-bold text-gray-900">Add Listings</h1>
        <p className="text-gray-600 pt-2">
          Lorem ipsum dolor sit amet, consectetur.
        </p>
      </div> */}
      <div className="overflow-x-auto border rounded-xl p-6">
        <div className="form-box">
          <ul className="flex space-x-4 mb-6  border-b-2 border-b-gray-300 w-fit">
            <li
              className={
                currentStep === 1
                  ? "text-blue-600 font-bold border-b-2 border-b-blue-600"
                  : ""
              }
            >
              <button>Car Details</button>
            </li>
            <li
              className={
                currentStep === 2
                  ? "text-blue-600 font-bold border-b-2 border-b-blue-600"
                  : ""
              }
            >
              <button>Price</button>
            </li>
            <li
              className={
                currentStep === 3
                  ? "text-blue-600 font-bold border-b-2 border-b-blue-600"
                  : ""
              }
            >
              <button>Features</button>
            </li>
            <li
              className={
                currentStep === 4
                  ? "text-blue-600 font-bold border-b-2 border-b-blue-600"
                  : ""
              }
            >
              <button>Media</button>
            </li>
            <li
              className={
                currentStep === 5
                  ? "text-blue-600 font-bold border-b-2 border-b-blue-600"
                  : ""
              }
            >
              <button>Location</button>
            </li>
          </ul>

          <div className="tab-content">
            {/* Step 1 - Car Details */}
            {currentStep === 1 && (
              <div
                id="car-details"
                className="p-6 bg-gray-100 rounded-lg shadow-lg"
              >
                <form>
                  <div className="grid grid-cols-2 gap-6">
                    {/* Dropdown 1 */}
                    <div className="space-y-2">
                      <label
                        htmlFor="car-make"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Car Make
                      </label>
                      <select
                        id="car-make"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option>Select Make</option>
                        <option>Honda</option>
                        <option>Toyota</option>
                      </select>
                    </div>

                    {/* Dropdown 2 */}
                    <div className="space-y-2">
                      <label
                        htmlFor="car-model"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Car Model
                      </label>
                      <select
                        id="car-model"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option>Select Model</option>
                        <option>Civic</option>
                        <option>Corolla</option>
                      </select>
                    </div>

                    {/* Dropdown 3 */}
                    <div className="space-y-2">
                      <label
                        htmlFor="car-year"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Year
                      </label>
                      <select
                        id="car-year"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option>Select Year</option>
                        <option>2022</option>
                        <option>2023</option>
                      </select>
                    </div>

                    {/* Dropdown 4 */}
                    <div className="space-y-2">
                      <label
                        htmlFor="car-color"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Color
                      </label>
                      <select
                        id="car-color"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option>Select Color</option>
                        <option>Red</option>
                        <option>Blue</option>
                      </select>
                    </div>

                    {/* Dropdown 5 */}
                    <div className="space-y-2">
                      <label
                        htmlFor="car-transmission"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Transmission
                      </label>
                      <select
                        id="car-transmission"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option>Select Transmission</option>
                        <option>Automatic</option>
                        <option>Manual</option>
                      </select>
                    </div>

                    {/* Dropdown 6 */}
                    <div className="space-y-2">
                      <label
                        htmlFor="car-fuel"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Fuel Type
                      </label>
                      <select
                        id="car-fuel"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option>Select Fuel</option>
                        <option>Petrol</option>
                        <option>Diesel</option>
                      </select>
                    </div>

                    {/* Dropdown 7 */}
                    <div className="space-y-2">
                      <label
                        htmlFor="car-condition"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Condition
                      </label>
                      <select
                        id="car-condition"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option>Select Condition</option>
                        <option>New</option>
                        <option>Used</option>
                      </select>
                    </div>

                    {/* Dropdown 8 */}
                    <div className="space-y-2">
                      <label
                        htmlFor="car-price-range"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Price Range
                      </label>
                      <select
                        id="car-price-range"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option>Select Price Range</option>
                        <option>$10,000 - $20,000</option>
                        <option>$20,000 - $30,000</option>
                      </select>
                    </div>

                    {/* Dropdown 9 */}
                    <div className="space-y-2">
                      <label
                        htmlFor="car-milage"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mileage
                      </label>
                      <select
                        id="car-milage"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option>Select Mileage</option>
                        <option>0-10,000 km</option>
                        <option>10,000-50,000 km</option>
                      </select>
                    </div>

                    {/* Dropdown 10 */}
                    <div className="space-y-2">
                      <label
                        htmlFor="car-doors"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Doors
                      </label>
                      <select
                        id="car-doors"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option>Select Doors</option>
                        <option>2</option>
                        <option>4</option>
                      </select>
                    </div>

                    {/* Dropdown 11 */}
                    <div className="space-y-2">
                      <label
                        htmlFor="car-seats"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Seats
                      </label>
                      <select
                        id="car-seats"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option>Select Seats</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>

                    {/* Dropdown 12 */}
                    <div className="space-y-2">
                      <label
                        htmlFor="car-drive"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Drive Type
                      </label>
                      <select
                        id="car-drive"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option>Select Drive Type</option>
                        <option>FWD</option>
                        <option>AWD</option>
                      </select>
                    </div>
                  </div>

                  {/* Description Box */}
                  <div className="mt-6">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      rows="4"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Enter car details description here..."
                    ></textarea>
                  </div>
                </form>
              </div>
            )}

            {/* Step 2 - Price */}
            {currentStep === 2 && (
              <div id="price">
                {/* Price form fields here */}
                <div className="form-col">
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    id="price"
                    className="form-input"
                    placeholder="Enter price"
                  />
                </div>
              </div>
            )}

            {/* Step 3 - Features */}
            {currentStep === 3 && (
              <div id="features">
                {/* Features form fields here */}
                <div className="form-col">
                  <label htmlFor="features">Features</label>
                  <textarea
                    id="features"
                    className="form-input"
                    placeholder="Enter car features"
                  ></textarea>
                </div>
              </div>
            )}

            {/* Step 4 - Media */}
            {currentStep === 4 && (
              <div id="media">
                {/* Media form fields here */}
                <div className="form-col">
                  <label htmlFor="media">Media (Image/Video)</label>
                  <input type="file" id="media" className="form-input" />
                </div>
              </div>
            )}

            {/* Step 5 - Location */}
            {currentStep === 5 && (
              <div id="location">
                {/* Location form fields here */}
                <div className="form-col">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    className="form-input"
                    placeholder="Enter location"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between mt-6">
          <button
            className={`px-4 py-2 bg-gray-300 text-gray-700 rounded ${
              currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePreviousStep}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            className={`px-4 py-2 bg-blue-500 text-white rounded ${
              currentStep === 5 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleNextStep}
            disabled={currentStep === 5}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCar;
