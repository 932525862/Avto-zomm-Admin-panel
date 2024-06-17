import React, { useState } from 'react';
import axios from 'axios';

const CarsEdit = ({ carId, closeModal, refreshData }) => {
  const [brandId, setBrandId] = useState('');
  const [modelId, setModelId] = useState('');
  const [cityId, setCityId] = useState('');
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');
  const [seconds, setSeconds] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [images, setImages] = useState([]);
  const [maxSpeed, setMaxSpeed] = useState('');
  const [maxPeople, setMaxPeople] = useState('');
  const [transmission, setTransmission] = useState('');
  const [motor, setMotor] = useState('');
  const [driveSide, setDriveSide] = useState('');
  const [petrol, setPetrol] = useState('');
  const [limitPerDay, setLimitPerDay] = useState('');
  const [deposit, setDeposit] = useState('');
  const [premiumProtection, setPremiumProtection] = useState('');
  const [priceInAed, setPriceInAed] = useState('');
  const [priceInUsd, setPriceInUsd] = useState('');
  const [priceInAedSale, setPriceInAedSale] = useState('');
  const [priceInUsdSale, setPriceInUsdSale] = useState('');
  const [locationId, setLocationId] = useState('');
  const [inclusive, setInclusive] = useState('');
  const [cover, setCover] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('brand_id', brandId);
      formData.append('model_id', modelId);
      formData.append('city_id', cityId);
      formData.append('color', color);
      formData.append('year', year);
      formData.append('seconds', seconds);
      formData.append('category_id', categoryId);
      images.forEach((image) => formData.append('images', image));
      formData.append('max_speed', maxSpeed);
      formData.append('max_people', maxPeople);
      formData.append('transmission', transmission);
      formData.append('motor', motor);
      formData.append('drive_side', driveSide);
      formData.append('petrol', petrol);
      formData.append('limitperday', limitPerDay);
      formData.append('deposit', deposit);
      formData.append('premium_protection', premiumProtection);
      formData.append('price_in_aed', priceInAed);
      formData.append('price_in_usd', priceInUsd);
      formData.append('price_in_aed_sale', priceInAedSale);
      formData.append('price_in_usd_sale', priceInUsdSale);
      formData.append('location_id', locationId);
      formData.append('inclusive', inclusive);
      formData.append('cover', cover);

      await axios.put(`https://autoapi.dezinfeksiyatashkent.uz/api/cars/${carId}`, formData);
      closeModal();
      refreshData();
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  return (
    <div>
      <h2>Edit Car</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for editing car details */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default CarsEdit;
