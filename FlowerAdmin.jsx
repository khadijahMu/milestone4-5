// src/components/admin/FlowerAdmin.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
const FlowerAdmin = () => {
  const [flowers, setFlowers] = useState([
    { id: 1, name: 'Rose', category: 'Flowers', price: 10 },
    { id: 2, name: 'Tulip', category: 'Flowers', price: 8 }
  ]);
  const handleAddFlower = async (newFlower) => {
    try {
      // Sends to backend
      const response = await fetch('/api/flowers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFlower)
      });
      // 2. Updates frontend only if successful
      if (response.ok) {
        setFlowers([...flowers, newFlower]);
        toast.success('Flower added successfully!');
      } else {
        toast.error('Failed to add flower');
      }
    } catch (error) {
      toast.error('Network error');
    }
  };
  return (
    <div className="flower-admin">
      { }
    </div>
  );
};
export default FlowerAdmin;