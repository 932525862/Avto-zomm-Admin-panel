import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CitiesCreate from './CitiesCreate'
import CitiesDelete from './Citiesdelete';
import CitiesEdit from './CitiesEdit';

export const Cities = () => {
  const [cityData, setCityData] = useState([]);
  const token = localStorage.getItem('accessToken')
  const [loading, setLoading] = useState(false);
  const imgurl = `https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/`
  const [createopen, setCreateopen] = useState(false);
  const [deleteopen, setDeleteopen] = useState(false);
  const [editopen, setEditopen] = useState(false);
  const [cityId, setCityId] = useState(null);
  const [data,setData] = useState({name:"", text:"", images:null})
 

  const getCityCategory = () =>{
    setLoading(true)
    axios({
      url:'https://autoapi.dezinfeksiyatashkent.uz/api/cities',
      method:`GET`,
    })
    .then((res) =>{
      setCityData(res.data.data)
      setLoading(false)
    })
    .catch((err) =>{
      console.log(err);
    } )
  }
  useEffect(() =>{
    getCityCategory()
  },[])


  const opencreateModal = () => {
    setCreateopen(true)
  }
  const closecreateModal = () => {
    setCreateopen(false)
  }

  const opendeleteModal = (id) => {
    setCityId(id);
    setDeleteopen(true)
  }
  const closedeleteModal = () => {
    setDeleteopen(false)
  }

  const openeditModal = (city) => {
     setCityId(city?.id)
    setData({...data,name:city?.name, text:city?.text, images:city?.image_src})
    setEditopen(true)
  }
   const closeEditModal = () => {
    setEditopen(false)
  }
 

  return (
	<div> <div className="container mx-auto px-4 sm:px-8">
  <div className="py-8">
    <div className="flex justify-between">
      <h2 className="text-2xl font-semibold leading-tight">City</h2>
      <button  type="submit" onClick={opencreateModal} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add City
      </button>
    </div>
    <div className="overflow-x-auto">
      <div className="min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal ">
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
            {cityData?.map((city) => (
              <tr key={city?.id}>
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
                  <p className="text-gray-900 whitespace-no-wrap"><img className="home__img w-18 h-16" src={`${imgurl}${city.image_src}`} alt="car"/></p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button  className="bg-green-500 text-white px-4 py-2 rounded" type="submit" onClick={() => openeditModal(city)}>
                    Edit
                  </button>
                  <button  className="bg-red-500 text-white px-4 py-2 rounded ml-2" type="submit" onClick={() => opendeleteModal(city.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

          }
        </table>
      </div>
    </div>
  </div>
</div>
{deleteopen && <CitiesDelete closeModal={closedeleteModal} cityId={cityId}  refreshData={getCityCategory} />}
{createopen && <CitiesCreate closeModal={closecreateModal} cityId={cityId}  refreshData={getCityCategory}/>}
{editopen && <CitiesEdit closeModal={closeEditModal} cityId={cityId} refresh={getCityCategory} data={data} setData={setData} />}
</div>
  )
}
