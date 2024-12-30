"use client";

import { useFormContext } from "@/context/formContext";

export default function Price() {
  const { formData, setFormData } = useFormContext();

  // Handle input changes and update the price-related data in formData
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update formData state with the new values for price and currency
    setFormData({
      ...formData,
      price: {
        ...formData.price,
        [name]: value,
      },
    });
  };

  return (
    <div className="p-6 ">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Set Car Price
      </h2>

      <form className="space-y-4">
        {/* Price Input Field */}
        <div>
          <label
            htmlFor="price"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Price
          </label>
          <input
            id="price"
            type="number"
            name="price"
            value={formData.price.price || ""}
            onChange={handleChange}
            placeholder="Enter the car price"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            required
          />
          {/* Optional: Add error handling for invalid input */}
          {formData.price.price < 0 && (
            <p className="text-red-500 text-sm mt-2">
              Price must be a positive value
            </p>
          )}
        </div>

        {/* Currency Input Field */}
        <div>
          <label
            htmlFor="currency"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Currency
          </label>
          <input
            id="currency"
            type="text"
            name="currency"
            value={formData.price.currency || ""}
            onChange={handleChange}
            placeholder="Enter the currency (e.g., USD)"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          {/* Optional: Add error handling for invalid input */}
          {formData.price.currency &&
            !/^[A-Za-z]{3}$/.test(formData.price.currency) && (
              <p className="text-red-500 text-sm mt-2">
                Currency must be a 3-letter code (e.g., USD, EUR)
              </p>
            )}
        </div>
      </form>
    </div>
  );
}
