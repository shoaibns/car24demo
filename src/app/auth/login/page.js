"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdArrowOutward } from "react-icons/md";

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [serverResponse, setServerResponse] = useState(""); // State for server messages
  const [responseType, setResponseType] = useState(""); // State to track success or error

  const onSubmit = (data) => {
    // Simulate form submission without actual API call
    console.log("Form data:", data);

    // Mock response (you can change this as needed)
    setResponseType("success");
    setServerResponse("Form submitted successfully!");
    router.push("/dashboard");
  };

  return (
    <div className="flex justify-center items-center  bg-transparent">
      <form onSubmit={handleSubmit(onSubmit)} className=" p-6  w-full ">
        {/* Email Field */}
        <div className="mb-4 border rounded-xl border-gray-200 p-2">
          <label
            htmlFor="email"
            className="block text-sm text-gray-500 font-medium mb-1 "
          >
            Username Or Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className={`w-full  text-gray-600 bg-transparent focus:outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Shoaib"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4 border rounded-xl border-gray-300 p-2">
          <label
            htmlFor="password"
            className="block text-sm text-gray-500 font-medium mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={`w-full text-gray-600 bg-transparent  focus:outline-none ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="****"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-x-3 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
          <span>
            <MdArrowOutward />
          </span>
        </button>

        {/* Server Response */}
        {serverResponse && (
          <p
            className={`mt-4 text-center font-medium ${
              responseType === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {serverResponse}
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
