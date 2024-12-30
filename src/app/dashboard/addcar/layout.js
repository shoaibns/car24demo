"use client";

import StepNavigation from "@/app/components/addcar/StepNavigation";
import { FormProvider } from "@/context/formContext";

export default function AddCarLayout({ children }) {
  return (
    <FormProvider>
      <div className=" h-full flex flex-col mx-6  ">
        {/* Navigation */}
        <StepNavigation />

        <div className="flex-1 overflow-y-auto ">
          {/* Content */}
          <div className="overflow-y-auto border rounded-xl p-6 h-[480px] bg-white shadow-md scrollbar-hide">
            {children}
          </div>
        </div>

        {/* Buttons - Prev & Next */}
        {/* <div className="flex justify-between p-4">
          <button className="py-2 px-5 text-gray-700 text-sm border border-gray-400 rounded-xl">
            Previous
          </button>
          <button className="py-2 px-5 text-gray-700 text-sm border border-gray-400 rounded-xl">
            Next
          </button>
        </div> */}
      </div>
    </FormProvider>
  );
}
