import axios from "axios";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const BrandsDelete = ({ setDelOpen, id }) => {
  const token = localStorage.getItem("accessToken");

  const deleteBrandsFunc = (e) => {
    e.preventDefault();
    axios({
      url: `https://autoapi.dezinfeksiyatashkent.uz/api/brands/${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        toast.success("Successfully deleted!", {
          position: "top-right",
          className: "bg-gray-800 text-white px-4 py-3 rounded-lg shadow-md",
        });
      })
      .catch((err) => {
        toast.error("Error deleting item", {
          position: "top-right",
          className: "bg-red-800 text-white px-4 py-3 rounded-lg shadow-md",
        });
        console.log(err);
      })
      .finally(() => {
        setDelOpen(false);
      });
  };


  const closeModal = () => {
    setDelOpen(false);
  };

  return (
    <div>
      <Toaster />
      <div
        onSubmit={deleteBrandsFunc}
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Do you want to delete this brand?
                    </h3>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={deleteBrandsFunc}
                  className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                >
                  Ok
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsDelete;
