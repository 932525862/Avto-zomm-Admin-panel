import axios from "axios";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

const BrandsEdit = ({ brand, setEditOpen }) => {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const token = localStorage.getItem("accessToken");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleImagesChange = (e) => {
    setImages(e.target?.files[0]);
  };
  const BrandsEditFunc = (e) => {
    e.preventDefault();
    console.log(brand);

    const formDataEdit = new FormData();
    formDataEdit.append("name", title); 
    formDataEdit.append("images", images);

    axios({
      url: `https://autoapi.dezinfeksiyatashkent.uz/api/brands/${brand.id}`,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formDataEdit
    })
    .then(res => console.log(res)
    )
    .catch(err => err)
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
                <Toaster />
                <form>
                  <div class="mb-4">
                    <label
                      htmlFor="title"
                      class="block text-gray-500 text-sm mb-2"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                    //   value={brand.title}
                      onChange={handleTitleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div class="mb-4">
                    <p class="block text-gray-500 text-sm mb-12">Images</p>
                    <label
                      htmlFor="images"
                      class=" border rounded w-full py-10 px-10 text-gray-700  focus:outline-none focus:shadow-outline"
                    >
                      +
                    </label>
                    <input
                      type="file"
                      id="images"
                      accept="image/*"
                      class="hidden"
                      onChange={handleImagesChange}
                    />
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
};

export default BrandsEdit;
