import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ModelsCreate({ setPostOpen, refreshData }) {
  const [title, setTitle] = useState("");
  const [brandTitle, setBrandTitle] = useState("");
  const [options, setOptions] = useState([]);
  const token = localStorage.getItem("accessToken");

  const getBrands = () => {
    axios({
      url: "https://autoapi.dezinfeksiyatashkent.uz/api/brands",
      method: `GET`,
    })
      .then((res) => {
        setOptions(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getBrands();
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const brandTitleChange = (e) => {
    setBrandTitle(e.target.value);
  };
  const BrandsEditFunc = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", title);
    formData.append("brand_id", brandTitle);

    axios({
      url: `https://autoapi.dezinfeksiyatashkent.uz/api/models/`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: formData,
    })
      .then((res) => {
        toast.success("Successfully edited!", {
          position: "top-right",
          className: "bg-gray-800 text-white px-4 py-3 rounded-lg shadow-md",
        });
        refreshData();
      })
      .catch((err) => {
        toast.error("Error!", {
          position: "top-right",
          className: "bg-red-800 text-white px-4 py-3 rounded-lg shadow-md",
        });
        console.log(err);
      })
      .finally(() => {
        setPostOpen(false);
      });
  };
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full z-20 shadow-md rounded-lg">
          <div className="px-4 pt-5 pb-6 sm:p-6 sm:pb-4">
            <div className=" flex items-center justify-center ">
              <div className="bg-white  p-6 w-full max-w-md ">
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="title"
                      className="block text-gray-500 text-sm mb-2"
                    >
                      Model name
                    </label>
                    <input
                      type="text"
                      id="title"
                      onChange={handleTitleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="title"
                      className="block text-gray-500 text-sm mb-2"
                    >
                      Brand name
                    </label>
                    <select
                      id="title"
                      onChange={brandTitleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="">Select a brand</option>
                      {options.map((option) => (
                        <option key={option.id} value={option.id}>{option.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex justify-end mt-16">
                    <button
                      className="text-gray border py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mx-4"
                      onClick={() => setPostOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={BrandsEditFunc}
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
