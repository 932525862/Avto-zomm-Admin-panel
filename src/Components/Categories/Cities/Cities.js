import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const Cities = () => {
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('accessToken')
  const [citycategory, setCityCategory] = useState([])
  const imgurl = `https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/`
 
  const getCityCategory = () =>{
    setLoading(true)
    axios({
      url:'https://autoapi.dezinfeksiyatashkent.uz/api/cities',
      method:`GET`,
    })
    .then((res) =>{
      setCityCategory(res.data.data)
      setLoading(false)
    })
    .catch((err) =>{
      console.log(err);
    } )
  }
  useEffect(() =>{
    getCityCategory()
  },[])

 

  return (
	<div> <div className="container mx-auto px-4 sm:px-8">
		
  <div className="py-8">
    <div className="flex justify-between">
      <h2 className="text-2xl font-semibold leading-tight">City</h2>
      <button  className="bg-blue-500 text-white px-4 py-2 rounded">
        Add City
      </button>
  
    </div>
    <div className="overflow-x-auto">
      <div className="min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal  ">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                 ID
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Text
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Images
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          {
            loading ? <div className="loading text-2xl ">Loading ...</div> :
            <tbody>
            {cityData.map((city) => (
              <tr key={city.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{city.id}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{city.name}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{city.text}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {/* <p className="text-gray-900 whitespace-no-wrap"><img className="home__img" src={`${imgurl}${city.image_src}`} alt="car"/></p> */}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {/* <button onClick={() => openEditModal(city.id)} className="bg-green-500 text-white px-4 py-2 rounded">
                    Edit
                  </button>
                  <button onClick={() => openDeleteModal(city.id)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>

          }
        </table>
      </div>
    </div>
    {/* {deleteOpen && <CarsDelete closeModal={closeDeleteModal} carId={carId} refreshData={getCarsData} />}
    {editOpen && <CarsEdit closeModal={closeEditModal} carData={singleCarData} refreshData={getCarsData} />}
    {addOpen && <CarsCreate closeModal={closeAddModal} refreshData={getCarsData} />} */}
  </div>
</div>
</div>
  )
}
