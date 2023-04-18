import React, { useState } from 'react';
import s from './style.module.css';

export default function Offer() {

  const [phone, setPhone] = useState("+49");

  function handleInputChange(event) {
    const input = event.target;
    const value = input.value;

    const newValue = value.replace(/[^\d]/g, '');

    const formattedValue = newValue.startsWith('49') ? `+${newValue}` : `+49${newValue}`;

    setPhone(formattedValue);
  }


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3333/sale/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }




  return (
    <div className={s.container}>
      <img src={require('./image 3.png')} alt="Sale" />
      <div className={s.description}>
        <div>
          <p className={s.textBig}>5% off</p>
          <p className={s.textMedium}>on the first order</p>
        </div>
        <form className={s.elements} onSubmit={handleSubmit}>
          <input
            type="text"
            value={phone}
            onChange={handleInputChange}
            maxLength={17}
          />
          <button>Get a discount</button>
        </form>
      </div>
    </div>
  );
}



