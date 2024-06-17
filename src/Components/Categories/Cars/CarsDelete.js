import React from 'react';
import axios from 'axios';

const CarsDelete = ({ closeModal, carId, refreshData }) => {
  const deleteCar = async () => {
    try {
      await axios.delete(`https://autoapi.dezinfeksiyatashkent.uz/api/locations/${carId}`);
      refreshData(); 
      closeModal();  
    } catch (err) {
      console.error("Error deleting car:", err);
    }
  };

  return (
    <div>
      <p>Are you sure you want to delete this car?</p>
      <button onClick={deleteCar} className="bg-red-500 text-white px-4 py-2 rounded">
        Confirm
      </button>
      <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">
        Cancel
      </button>
    </div>
  );
};

export default CarsDelete;
