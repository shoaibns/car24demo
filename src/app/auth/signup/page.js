"use client";

import { useAuth } from "@/context/AuthContext";
import { useForm } from "react-hook-form";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

function SignupForm() {
  const { signup, loading, error: contextError } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { username, email, password, confirmPassword, acceptTerms } = data;

    console.log("form data", data);

    // Client-side validation (only necessary if not handled by react-hook-form)
    if (password !== confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match.",
      });
      return;
    }

    if (!acceptTerms) {
      setError("acceptTerms", {
        type: "manual",
        message: "You must accept the terms and conditions.",
      });
      return;
    }

    try {
      await signup({ username, email, password, confirmPassword });
      reset(); // Reset the form on successful signup
    } catch (err) {
      // Error is handled by the context
    }
  };

  return (
    <div className="flex justify-center items-center bg-transparent">
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 w-full">
        {/* Username Field */}
        <div className="mb-4 border rounded-xl border-gray-300 p-2">
          <label
            htmlFor="username"
            className="block text-sm text-gray-500 font-medium mb-1"
          >
            Username
          </label>
          <input
            {...register("username", { required: "Username is required" })}
            id="username"
            className="w-full text-gray-600 bg-transparent focus:outline-none"
            placeholder="Enter your username"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4 border rounded-xl border-gray-300 p-2">
          <label
            htmlFor="email"
            className="block text-sm text-gray-500 font-medium mb-1"
          >
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email address",
              },
            })}
            id="email"
            className="w-full text-gray-600 bg-transparent focus:outline-none"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
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
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            id="password"
            className="w-full text-gray-600 bg-transparent focus:outline-none"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="mb-4 border rounded-xl border-gray-300 p-2">
          <label
            htmlFor="confirmPassword"
            className="block text-sm text-gray-500 font-medium mb-1"
          >
            Confirm Password
          </label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Confirm your password",
            })}
            id="confirmPassword"
            className="w-full text-gray-600 bg-transparent focus:outline-none"
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Accept Terms Checkbox */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            {...register("acceptTerms", {
              required: "You must accept the terms and conditions",
            })}
            id="acceptTerms"
            className="mr-2"
          />
          <label htmlFor="acceptTerms" className="text-sm text-gray-500">
            Accept Terms and Conditions
          </label>
          {errors.acceptTerms && (
            <p className="text-red-500 text-sm">{errors.acceptTerms.message}</p>
          )}
        </div>

        {/* Error Messages */}
        {contextError && (
          <div className="text-red-500 mb-4 text-center">{contextError}</div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-x-3 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
          <span>
            <MdArrowOutward />
          </span>
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
