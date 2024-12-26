"use client";
import Loader from "@/app/components/Loader";
import { useCarOwners } from "@/context/CarOwnersContext";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiUpload } from "react-icons/fi";

function AddUser() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState(null);
  const { loading, error } = useCarOwners(); // Assuming this is for API loading state

  const onSubmit = async (data) => {
    const payload = { ...data };

    if (image) {
      payload.image = image; // Include the base64 image string in the payload
    }

    try {
      const response = await fetch("/api/carowners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      reset();
      setImage(null);

      console.log(result); // Handle response as needed
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setImage(fileReader.result);
      }
    };
  };

  return (
    <div className="p-6 relative">
      {/* Show the Loader when the loading state is true */}
      {loading && (
        <div className="absolute left-1/2 top-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2">
          <Loader />
        </div>
      )}

      <h2 className="text-xl font-semibold mb-4">Add New User</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* First Name */}
        <div className="flex flex-col">
          <label htmlFor="firstname" className="text-sm font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            {...register("firstName", { required: "First name is required" })}
            placeholder="Enter first name"
            className={`border rounded-lg p-2 ${
              errors.firstName ? "border-red-500" : ""
            }`}
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label htmlFor="lastname" className="text-sm font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            {...register("lastName", { required: "Last name is required" })}
            placeholder="Enter last name"
            className={`border rounded-lg p-2 ${
              errors.lastName ? "border-red-500" : ""
            }`}
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="Enter email address"
            className={`border rounded-lg p-2 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label htmlFor="phone-number" className="text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            type="text"
            id="phone-number"
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
            placeholder="Enter phone number"
            className={`border rounded-lg p-2 ${
              errors.phoneNumber ? "border-red-500" : ""
            }`}
          />
          {errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber.message}</span>
          )}
        </div>

        {/* User Role Selection */}
        <div className="flex flex-col">
          <label htmlFor="role" className="text-sm font-medium mb-2">
            Role
          </label>
          <select
            id="role"
            {...register("role", { required: "Role is required" })}
            className={`border rounded-lg p-2 ${
              errors.role ? "border-red-500" : ""
            }`}
          >
            <option value="">Select Role</option>
            <option value="showroomOwner">Car Showroom Owner</option>
            <option value="selfOwner">Self Owner</option>
            <option value="agent">Agent</option>
          </select>
          {errors.role && (
            <span className="text-red-500">{errors.role.message}</span>
          )}
        </div>

        {/* Status Selection */}
        <div className="flex flex-col">
          <label htmlFor="status" className="text-sm font-medium mb-2">
            Status
          </label>
          <select
            id="status"
            {...register("status", { required: "Status is required" })}
            className={`border rounded-lg p-2 ${
              errors.status ? "border-red-500" : ""
            }`}
          >
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          {errors.status && (
            <span className="text-red-500">{errors.status.message}</span>
          )}
        </div>

        {/* Image Upload */}
        <div className="flex flex-col items-center">
          <label
            htmlFor="img"
            className="flex flex-col items-center justify-center w-full h-32 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition"
          >
            <div className="flex flex-col items-center">
              <FiUpload className="text-3xl text-gray-800 mb-2" />
              <p className="text-gray-500 text-sm">
                Drag & Drop or{" "}
                <span className="text-blue-500 underline">Browse</span>
              </p>
            </div>
            <input
              type="file"
              id="img"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
          {image && (
            <div className="mt-2 text-sm text-gray-500">Image selected.</div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
