import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdEdit, MdDelete } from 'react-icons/md';
import CarsCreate from './CarsCraete'; 
import CarsDelete from './CarsDelete';
import CarsEdit from './CarsEdit';
import '../Cars/Cars.css';

const Cars = () => {
  const [carsData, setCarsData] = useState([]);
  const url = 'https://autoapi.dezinfeksiyatashkent.uz/api/cars';
  const [loading, setLoading] = useState(false);
  const [addOpen, setOpenAdd] = useState(false);
  const [deleteOpen, setOpenDelete] = useState(false);
  const [editOpen, setOpenEdit] = useState(false);
  const [carId, setCarId] = useState('');
  const [singleCarData, setSingleCarData] = useState({});
   const  token = localStorage.getItem('accessToken');

  useEffect(() => {
    getCarsData();
  }, []);

  async function getCarsData() {
    setLoading(true);
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data); 
      setCarsData(response.data.data); 
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function openAddModal() {
    setOpenAdd(true);
  }
  function closeAddModal() {
    setOpenAdd(false);
  }

  function openDeleteModal(id) {
    setCarId(id);
    setOpenDelete(true);
  }
  function closeDeleteModal() {
    setOpenDelete(false);
  }

  function openEditModal(id) {
    const car = carsData.find((car) => car.id === id);
    setSingleCarData(car);
    setCarId(id);
    setOpenEdit(true);
  }
  function closeEditModal() {
    setOpenEdit(false);
  }

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold leading-tight">Cars</h2>
          <button onClick={openAddModal} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add New Car
          </button>
        </div>
		{deleteOpen && <CarsDelete closeModal={closeDeleteModal} carId={carId} refreshData={getCarsData} />}
        {editOpen && <CarsEdit closeModal={closeEditModal} carData={singleCarData} refreshData={getCarsData} />}
        {addOpen && <CarsCreate closeModal={closeAddModal} refreshData={getCarsData} />}
        <div className="overflow-x-auto">
          <div className="min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Car ID
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Brand
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Model
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Year
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    City
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {carsData.map((car,number) => (
                  <tr key={car.id}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{number+1}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{car.brand.title}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{car.model.name}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{car.year}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{car.city.name}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <button onClick={() => openEditModal(car.id)} className="bg-green-500 text-white px-4 py-2 rounded">
                        Edit
                      </button>
                      <button onClick={() => openDeleteModal(car.id)} className="bg-red-500 text-white px-4 py-2 rounded ml-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Cars;
