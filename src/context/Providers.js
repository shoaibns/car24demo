"use client";

import { AuthContextProvider } from "./AuthContext";
import { CarOwnersContextProvider } from "./CarOwnersContext";

export default function Providers({ children }) {
  return (
    <AuthContextProvider>
      <CarOwnersContextProvider>{children}</CarOwnersContextProvider>
    </AuthContextProvider>
  );
}
