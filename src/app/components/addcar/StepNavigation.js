"use client";

import { FormContext } from "@/context/formContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function StepNavigation() {
  const { currentStep, setCurrentStep, formData } = useContext(FormContext); // Accessing formData from context
  const router = useRouter();

  const steps = [
    { id: 1, label: "Car Details", href: "/dashboard/addcar/car-details" },
    { id: 2, label: "Price", href: "/dashboard/addcar/price" },
    { id: 3, label: "Features", href: "/dashboard/addcar/features" },
    { id: 4, label: "Media", href: "/dashboard/addcar/media" },
    { id: 5, label: "Location", href: "/dashboard/addcar/location" },
  ];

  // Handlers for Previous and Next buttons
  const handlePrev = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      router.push(steps[prevStep - 1].href);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      router.push(steps[nextStep - 1].href);
    } else {
      // When on the last step, submit the form
      handleSubmit();
    }
  };

  // Function to validate the form data before submission
  const isValidForm = () => {
    // Example validation: Ensure each step has data
    // Modify this to fit your actual form data structure
    return (
      formData.carDetails &&
      formData.price &&
      formData.features &&
      formData.media &&
      formData.location
    );
  };

  // Handle form submission
  const handleSubmit = () => {
    // Check if form is valid
    if (isValidForm()) {
      // Perform form submission logic
      console.log("Form submitted successfully with data:", formData);
      alert("Form submitted successfully!");
      // Optionally, redirect or reset form after submission
      // router.push("/success");
    } else {
      alert("Please complete all the steps before submitting.");
    }
  };

  return (
    <div className="mt-8">
      <ul className="flex space-x-4 mb-6 border-b-2 border-b-gray-300 w-fit">
        <li className={currentStep === 1 ? "text-blue-600 font-bold" : ""}>
          <Link
            href="/dashboard/addcar/car-details"
            onClick={() => setCurrentStep(1)}
          >
            Car Details
          </Link>
        </li>
        <li className={currentStep === 2 ? "text-blue-600 font-bold" : ""}>
          <Link
            href="/dashboard/addcar/price"
            onClick={() => setCurrentStep(2)}
          >
            Price
          </Link>
        </li>
        <li className={currentStep === 3 ? "text-blue-600 font-bold" : ""}>
          <Link
            href="/dashboard/addcar/features"
            onClick={() => setCurrentStep(3)}
          >
            Features
          </Link>
        </li>
        <li className={currentStep === 4 ? "text-blue-600 font-bold" : ""}>
          <Link
            href="/dashboard/addcar/media"
            onClick={() => setCurrentStep(4)}
          >
            Media
          </Link>
        </li>
        <li className={currentStep === 5 ? "text-blue-600 font-bold" : ""}>
          <Link
            href="/dashboard/addcar/location"
            onClick={() => setCurrentStep(5)}
          >
            Location
          </Link>
        </li>
      </ul>

      {/* Buttons - Prev & Next */}
      <div className="flex justify-between pb-4">
        <button
          onClick={handlePrev}
          disabled={currentStep === 1} // Disable Previous on the first step
          className="py-2 px-5 text-gray-700 text-sm border border-gray-400 rounded-xl"
        >
          Previous
        </button>

        {/* Next or Submit Button */}
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length && !isValidForm()} // Disable if not valid on last step
          className="py-2 px-5 text-gray-700 text-sm border border-gray-400 rounded-xl"
        >
          {currentStep === steps.length ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}
