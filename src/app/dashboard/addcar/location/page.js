"use client";

import { useFormContext } from "@/context/formContext";

export default function Location() {
  const { formData, setFormData } = useFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      location: { ...formData.location, [name]: value },
    });
  };

  return (
    <div className="">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Location</h2>
      {/* <form className="overflow-y-auto h-96 space-y-6"> */}
      <form className="overflow-y-auto space-y-6">
        {/* Address and City */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="address"
              className="text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              name="address"
              value={formData.location.address || ""}
              onChange={handleChange}
              placeholder="Enter your address"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="city" className="text-sm font-medium text-gray-700">
              City
            </label>
            <input
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              name="city"
              value={formData.location.city || ""}
              onChange={handleChange}
              placeholder="Enter your city"
              required
            />
          </div>
        </div>

        {/* Zip Code and Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="zipCode"
              className="text-sm font-medium text-gray-700"
            >
              Zip Code
            </label>
            <input
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              name="zipCode"
              value={formData.location.zipCode || ""}
              onChange={handleChange}
              placeholder="Enter zip code"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="country"
              className="text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <input
              className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              name="country"
              value={formData.location.country || ""}
              onChange={handleChange}
              placeholder="Enter country"
              required
            />
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full border border-gray-200 rounded-xl mx-auto bg-red-500 overflow-hidden">
          <iframe
            className="w-full h-64"
            src="https://www.google.com/maps/@20.5562374,74.5298123,15.75z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            frameBorder="0"
            title="Location Map"
          ></iframe>
        </div>
      </form>
    </div>
  );
}
