// context/formContext.js
"use client";

import { createContext, useContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    carDetails: {},
    price: {},
    features: {},
    media: {},
    location: {},
  });
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <FormContext.Provider
      value={{ formData, setFormData, currentStep, setCurrentStep }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
