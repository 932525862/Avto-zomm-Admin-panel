import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ModelsEdit({ brand, setEditOpen, refreshData }) {
  const [title, setTitle] = useState("");
  const [brandTitle, setBrandTitle] = useState([]);
  const token = localStorage.getItem("accessToken");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const brandTitleChange = (e) => {
    setBrandTitle(e.target.value);
  };
  const BrandsEditFunc = (e) => {
    e.preventDefault();
    console.log(brand);
    console.log(title);
    console.log(brandTitle);

    const formDataEdit = new FormData();
    formDataEdit.append("name", title);
    formDataEdit.append("brand_title", brandTitle);
    console.log(formDataEdit);
    axios({
      url: `https://autoapi.dezinfeksiyatashkent.uz/api/models/${brand.id}`,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: formDataEdit,
    })
      .then((res) => {
        console.log(res?.response);
        toast.success("Successfully edited!", {
          position: "top-right",
          className: "bg-gray-800 text-white px-4 py-3 rounded-lg shadow-md",
        });
        refreshData();
      })
      .then((data) => console.log(data))
      .catch((err) => {
        toast.error("Xatolik!", {
          position: "top-right",
          className: "bg-red-800 text-white px-4 py-3 rounded-lg shadow-md",
        });
        console.log(err);
      })
      .finally(() => {
        setEditOpen(false);
      });
  };
  return (
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full z-20 shadow-md rounded-lg">
          <div class="px-4 pt-5 pb-6 sm:p-6 sm:pb-4">
            <div class=" flex items-center justify-center ">
              <div class="bg-white  p-6 w-full max-w-md ">
                <form>
                  <div class="mb-4">
                    <label
                      htmlFor="title"
                      class="block text-gray-500 text-sm mb-2"
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
                  <div class="mb-4">
                    <label
                      htmlFor="title"
                      class="block text-gray-500 text-sm mb-2"
                    >
                      Brand name
                    </label>
                    {/* <select
                      id="title"
                      onChange={brandTitleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="">Select a brand</option>
                      {brand.map((brand) => (
                        <option key={brand.id} value={brand.title}>
                          {brand.title}
                        </option>
                      ))}
                    </select> */}
                  </div>
                  <div className="flex justify-end mt-16">
                    <button className="  text-gray border  py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mx-4">
                      Cancel
                    </button>
                    <button
                      onClick={BrandsEditFunc}
                      type="submit"
                      class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline "
                    >
                      {" "}
                      Edit
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
