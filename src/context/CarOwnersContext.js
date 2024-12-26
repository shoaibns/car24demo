import { createContext, useContext, useState } from "react";

const CarOwnersContext = createContext();

export const useCarOwners = () => useContext(CarOwnersContext);

export const CarOwnersContextProvider = ({ children }) => {
  const [carOwners, setCarOwners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all car owners
  const fetchCarOwners = async ({ page, limit }) => {
    try {
      setLoading(true);
      setError(null);

      //   const response = await fetch("/api/carowners");
      const response = await fetch(
        `/api/carowners?page=${page}&limit=${limit}`
      );
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to fetch car owners");
      }

      setCarOwners(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Create a new car owner
  const createCarOwner = async (data) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/carowners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to create car owner");
      }

      // Update the state with the newly created car owner
      setCarOwners((prev) => [...prev, result]);
      return result;
    } catch (err) {
      setError(err.message);
      throw err; // Re-throw for further handling if needed
    } finally {
      setLoading(false);
    }
  };

  // Update an existing car owner
  const updateCarOwner = async (id, updates) => {
    try {
      setLoading(true);
      setError(null);

      console.log("owner update id in context", id);
      console.log("owner update in context", updates);

      const response = await fetch(`/api/carowners`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, ...updates }),
      });

      const result = await response.json();

      console.log("result in context", result);

      if (!response.ok) {
        throw new Error(result.error || "Failed to update car owner");
      }

      // Update the state with the updated car owner
      // setCarOwners((prev) =>
      //   prev.map((owner) => (owner._id === id ? result : owner))
      // );

      setCarOwners((prev) =>
        Array.isArray(prev)
          ? prev.map((owner) => (owner._id === id ? result : owner))
          : [result]
      );

      console.log("Result 2 Car Owner:", result);

      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete a car owner
  const deleteCarOwner = async (id) => {
    try {
      setLoading(true);
      setError(null);

      console.log("id in car context", id);

      const response = await fetch(`/api/carowners?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to delete car owner");
      }

      // Update the state to remove the deleted car owner
      // setCarOwners((prev) => prev.filter((owner) => owner._id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <CarOwnersContext.Provider
      value={{
        carOwners,
        fetchCarOwners,
        createCarOwner,
        updateCarOwner,
        deleteCarOwner,
        loading,
        error,
      }}
    >
      {children}
    </CarOwnersContext.Provider>
  );
};
