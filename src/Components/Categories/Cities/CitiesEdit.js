import { message } from "antd";

const CitiesEdit = ({cityId,closeModal,refreshData,data,setData}) =>{
  const token = localStorage.getItem('accessToken')
  const editCities = (e) =>{
    e.preventDefault();
    const formData = new FormData()
    console.log(data,"dattataa")
    formData.append("name",data.name);
    formData.append("text",data.text);
    formData.append("images",data.images);
    fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/cities/${cityId}`,{
      headers:{
        Authorization:`Bearer ${token}`
      },
      method:'PUT',
      body:formData,
    })
    .then(res=>res.json())
    .then(res=>{
      if(res.success){
        message.success("Ajoyib")
        refreshData();
  
      }
      else{
        message.error("Xatolik")
      }
      closeModal();
      refreshData();

    })
    .catch(error=>{
      console.log(error);
    })
  }



    return(
        <div>
            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Edit city</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">Name</p><br/>
                <input
                   value={data?.name} onChange={(e) => setData({...data, name:e.target.value})}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    id="name"
                    required
                /><br/>
                 <p class="text-sm text-gray-500">Text</p><br/>
                <input
                    value={data?.text} onChange={(e) => setData({...data, text:e.target.value})}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="text"
                    id="text"
                    required
                /><br/>
                <p class="text-sm text-gray-500">Images</p><br/>
                 <input
                    onChange={(e) =>setData({...data,images:e.target.files[0]})}
                    className="block w-30 h-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    type="file"
                    id="images"
                    required
                /><br/>
                
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" onClick={editCities} class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto">Ok</button>
          <button type="submit" onClick={closeModal} class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
export default CitiesEdit;