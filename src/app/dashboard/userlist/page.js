"use client";
import React, { useState, useEffect } from "react";
import { GrView } from "react-icons/gr";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useCarOwners } from "@/context/CarOwnersContext";
import { BsFillCircleFill } from "react-icons/bs";
import Loader from "@/app/components/Loader";
import Link from "next/link";
import { IoPersonAddOutline } from "react-icons/io5";

function UserList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(4); // Items per page
  const [selectedOwner, setSelectedOwner] = useState(null); // Current selected owner
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal
  const [isEditMode, setIsEditMode] = useState(false); // Edit mode toggle
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Delete modal state

  const {
    carOwners,
    fetchCarOwners,
    loading,
    error,
    deleteCarOwner,
    updateCarOwner,
  } = useCarOwners();

  console.log("car owners in FE", carOwners.owners);

  useEffect(() => {
    fetchCarOwners({ page: currentPage, limit: pageSize });
  }, [currentPage, pageSize]);

  useEffect(() => {
    if (carOwners && carOwners.owners) {
      setTotalPages(carOwners.totalPages);
    }
  }, [carOwners]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const openModal = (owner, editMode = false) => {
    setSelectedOwner(owner);
    setIsEditMode(editMode);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOwner(null);
    setIsEditMode(false);
    setIsModalOpen(false);
  };

  const openDeleteModal = (owner) => {
    setSelectedOwner(owner);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedOwner(null);
    setIsDeleteModalOpen(false);
  };

  const handleDelete = async () => {
    try {
      // Logging to verify delete process
      console.log("Deleting user with ID:", selectedOwner._id);

      // Call delete API
      await deleteCarOwner(selectedOwner._id);

      // Fetch the updated list of car owners
      await fetchCarOwners({ page: currentPage, limit: pageSize });

      // Close the delete modal after success
      closeDeleteModal();
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete the user. Please try again.");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateCarOwner(selectedOwner._id, selectedOwner); // Update logic
    fetchCarOwners({ page: currentPage, limit: pageSize }); // Refresh data
    closeModal();
  };

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="w-fit p-2 mb-2 flex items-center gap-x-2 border rounded-lg border-gray-300">
        <IoPersonAddOutline className="text-gray-600" />
        <Link
          href="/dashboard/adduser"
          className="text-sm text-gray-600 my-auto leading-none"
        >
          Add User
        </Link>
      </div>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
          <tr>
            <th className="text-left px-6 py-4">Name</th>
            <th className="text-left px-6 py-4">Role</th>
            <th className="text-center px-6 py-4">Status</th>
            <th className="text-center px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {carOwners?.owners?.map((owner) => (
            <tr className="hover:bg-gray-50 transition" key={owner._id}>
              <td className="px-6 py-4 flex items-center">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={owner.image.url}
                    alt={owner.name}
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {owner.firstName} {owner.lastName}
                    </p>
                    <p className="text-sm text-gray-500">{owner.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <p className="font-medium text-gray-900">{owner.role}</p>
              </td>
              <td className="px-6 py-4 text-center">
                <div
                  className={`flex items-center ${
                    owner.status === "active"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  <BsFillCircleFill className="mr-2" />
                  {owner.status.charAt(0).toUpperCase() + owner.status.slice(1)}
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="flex gap-x-4 justify-center">
                  <button
                    className="view px-4 py-1 text-blue-600"
                    onClick={() => openModal(owner)}
                  >
                    <GrView />
                  </button>
                  <button
                    className="edit px-4 py-1 text-green-600"
                    onClick={() => openModal(owner, true)}
                  >
                    <BiEditAlt />
                  </button>
                  <button
                    className="delete px-4 py-1 text-red-600"
                    onClick={() => openDeleteModal(owner)}
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-lg"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </div>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-lg"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-96 max-w-lg transition-all duration-300 transform">
            <h2 className="text-xl font-semibold mb-6 text-gray-900">
              {isEditMode ? "Edit Car Owner" : "View Car Owner"}
            </h2>
            {isEditMode ? (
              <form onSubmit={handleUpdate}>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    value={selectedOwner.firstName}
                    onChange={(e) =>
                      setSelectedOwner({
                        ...selectedOwner,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    value={selectedOwner.lastName}
                    onChange={(e) =>
                      setSelectedOwner({
                        ...selectedOwner,
                        lastName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="px-6 py-2 bg-gray-500 text-white rounded-lg shadow-sm hover:bg-gray-600 transition-colors"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 transition-colors"
                  >
                    Save
                  </button>
                </div>
              </form>
            ) : (
              <div>
                <p className="mb-3 text-gray-800">
                  <strong className="font-semibold">First Name:</strong>{" "}
                  {selectedOwner.firstName}
                </p>
                <p className="mb-3 text-gray-800">
                  <strong className="font-semibold">Last Name:</strong>{" "}
                  {selectedOwner.lastName}
                </p>
                <p className="mb-3 text-gray-800">
                  <strong className="font-semibold">Email:</strong>{" "}
                  {selectedOwner.email}
                </p>
                <p className="mb-3 text-gray-800">
                  <strong className="font-semibold">Phone:</strong>{" "}
                  {selectedOwner.phoneNumber}
                </p>
                <p className="mb-4 text-gray-800">
                  <strong className="font-semibold">Status:</strong>{" "}
                  {selectedOwner.status}
                </p>
                <div className="flex justify-end space-x-4">
                  <button
                    className="px-6 py-2 bg-gray-500 text-white rounded-lg shadow-sm hover:bg-gray-600 transition-colors"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 w-96 max-w-lg transition-all duration-300 transform">
            <h2 className="text-xl font-semibold mb-6 text-gray-900">
              Confirm Delete
            </h2>
            <p className="text-gray-800 mb-6">
              Are you sure you want to delete this owner?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-6 py-2 bg-gray-500 text-white rounded-lg shadow-sm hover:bg-gray-600 transition-colors"
                onClick={closeDeleteModal}
              >
                Cancel
              </button>
              <button
                className="px-6 py-2 bg-red-500 text-white rounded-lg shadow-sm hover:bg-red-600 transition-colors"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserList;
