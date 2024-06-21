import { message } from "antd";
import axios from "axios";

const CitiesDelete = ({ closeModal, cityId, refreshData }) => {
  const token = localStorage.getItem("accessToken");
  const deleteCities = (e) => {
    e.preventDefault();
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios({
      url: `https://autoapi.dezinfeksiyatashkent.uz/api/cities/${cityId}`,
      method: "DELETE",
      headers: headers,
    })
      .then((res) => {
        message.success("Deleted");
        refreshData();
        closeModal();
      })
      .catch((err) => {
        console.log(err);
        message.error("Couldn't delete");
        closeModal();
      });
  };

  return (
    <div>
      <div
        onSubmit={deleteCities}
        class="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      class="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Do you want to delete this city?
                    </h3>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={deleteCities}
                  class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                >
                  Ok
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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

export default CitiesDelete;
