"use client";

import { useFormContext } from "@/context/formContext";

export default function CarDetails() {
  const { formData, setFormData } = useFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      carDetails: { ...formData.carDetails, [name]: value },
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Car Details</h2>
      <form>
        {/* Car Model */}
        <div className="grid grid-cols-3 grid-rows-6 gap-4">
          <div className="border border-gray-300 rounded-xl p-4 flex flex-col">
            <p className="text-gray-700">Model</p>
            <label htmlFor="carModel" className="text-sm">
              Select Model
            </label>
            <select
              name="carModel"
              id="carModel"
              className="mt-2 p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.carDetails.carModel || ""}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a Model
              </option>
              <option value="Model 01">Model 01</option>
              <option value="Model 02">Model 02</option>
              <option value="Model 03">Model 03</option>
              <option value="Model 04">Model 04</option>
            </select>
          </div>

          {/* Car Year */}
          <div className="border border-gray-300 rounded-xl p-4 flex flex-col">
            <p className="text-gray-700">Year</p>
            <label htmlFor="carYear" className="text-sm">
              Select Year
            </label>
            <select
              name="carYear"
              id="carYear"
              className="mt-2 p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.carDetails.carYear || ""}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a Year
              </option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </div>

          {/* Car Make */}
          <div className="border border-gray-300 rounded-xl p-4 flex flex-col">
            <p className="text-gray-700">Make</p>
            <label htmlFor="carMake" className="text-sm">
              Select Make
            </label>
            <select
              name="carMake"
              id="carMake"
              className="mt-2 p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.carDetails.carMake || ""}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a Make
              </option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Ford">Ford</option>
              <option value="BMW">BMW</option>
            </select>
          </div>

          {/* Car Color */}
          <div className="border border-gray-300 rounded-xl p-4 flex flex-col">
            <p className="text-gray-700">Color</p>
            <label htmlFor="carColor" className="text-sm">
              Select Color
            </label>
            <select
              name="carColor"
              id="carColor"
              className="mt-2 p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.carDetails.carColor || ""}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a Color
              </option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
            </select>
          </div>

          {/* Car Engine */}
          <div className="border border-gray-300 rounded-xl p-4 flex flex-col">
            <p className="text-gray-700">Engine</p>
            <label htmlFor="carEngine" className="text-sm">
              Select Engine Type
            </label>
            <select
              name="carEngine"
              id="carEngine"
              className="mt-2 p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.carDetails.carEngine || ""}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Engine
              </option>
              <option value="V6">V6</option>
              <option value="V8">V8</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          {/* Car Transmission */}
          <div className="border border-gray-300 rounded-xl p-4 flex flex-col">
            <p className="text-gray-700">Transmission</p>
            <label htmlFor="carTransmission" className="text-sm">
              Select Transmission
            </label>
            <select
              name="carTransmission"
              id="carTransmission"
              className="mt-2 p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.carDetails.carTransmission || ""}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Transmission
              </option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>

          {/* Car Mileage */}
          <div className="border border-gray-300 rounded-xl p-4 flex flex-col">
            <p className="text-gray-700">Mileage</p>
            <label htmlFor="carMileage" className="text-sm">
              Mileage (in km)
            </label>
            <input
              type="number"
              name="carMileage"
              id="carMileage"
              className="mt-2 p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.carDetails.carMileage || ""}
              onChange={handleChange}
              placeholder="Enter mileage"
            />
          </div>

          {/* Car Price */}
          {/* <div className="border border-gray-300 rounded-xl p-4 flex flex-col">
            <p className="text-gray-700">Price</p>
            <label htmlFor="carPrice" className="text-sm">
              Enter Price
            </label>
            <input
              type="number"
              name="carPrice"
              id="carPrice"
              className="mt-2 p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.carDetails.carPrice || ""}
              onChange={handleChange}
              placeholder="Enter price"
            />
          </div> */}

          {/* Car Fuel Type */}
          <div className="border border-gray-300 rounded-xl p-4 flex flex-col">
            <p className="text-gray-700">Fuel Type</p>
            <label htmlFor="carFuelType" className="text-sm">
              Select Fuel Type
            </label>
            <select
              name="carFuelType"
              id="carFuelType"
              className="mt-2 p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.carDetails.carFuelType || ""}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Fuel Type
              </option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          {/* Car Doors */}
          <div className="border border-gray-300 rounded-xl p-4 flex flex-col">
            <p className="text-gray-700">Doors</p>
            <label htmlFor="carDoors" className="text-sm">
              Select Number of Doors
            </label>
            <select
              name="carDoors"
              id="carDoors"
              className="mt-2 p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.carDetails.carDoors || ""}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Number of Doors
              </option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
