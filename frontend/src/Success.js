import React, { useEffect } from 'react';

function Success() {
    useEffect(() => {
        localStorage.removeItem('cart');
      }, []);
      
  return (
    <div className="success-page">
      <h1> Payment Successful!</h1>
      <p>Thank you for your purchase. Your flowers will be delivered soon.</p>
      <a href="/">Return to Shop</a>
    </div>
  );
}

export default Success;
