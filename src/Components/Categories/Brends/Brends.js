import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import 'font-awesome/css/font-awesome.min.css';

function Brands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = () => {
    setLoading(true);
    axios({
      url: 'https://autoapi.dezinfeksiyatashkent.uz/api/brands',
      method: 'GET',
    })
      .then((res) => {
        setBrands(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    axios({
      url: `https://autoapi.dezinfeksiyatashkent.uz/api/brands/${id}`,
      method: 'DELETE',
    })
      .then((res) => {
        fetchBrands();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (brand) => {

  };

  const handleAddBrand = () => {
    
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Brands</h1>
        <button
          onClick={handleAddBrand}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Brand
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal ">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Image</th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand) => (
                <tr key={brand.id} className="border-b">
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{brand.title}</td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <img src={brand.image_src} alt={brand.title} className="h-12 w-12 object-contain" />
                  </td>
                  <td className=" flex justify-start space-x-2 px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <button
                      onClick={() => handleEdit(brand)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(brand.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Brands;