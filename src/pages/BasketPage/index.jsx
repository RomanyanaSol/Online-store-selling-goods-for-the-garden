import React from 'react'
import { useSelector } from 'react-redux'
import BasketItem from '../../components/BasketItem';
import s from './style.module.css';
import { BsChevronRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import BasketCalculation from '../../components/BasketCalculation';
import { BsCurrencyDollar } from "react-icons/bs";
import { useState } from 'react';


export default function BasketPage() {

  const { basket, products } = useSelector((state) => state);
  const [phone, setPhone] = useState('');

  const data = basket.map(item => {
    const product = products.find(({ id }) => id === item.id)
    return { ...item, ...product }
  })

  const link = `/products`;

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3333/order/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, data }),
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <div className={s.container}>

      <div className={s.title_flex}>
        <h1 className={s.titleH1}>Shopping cart</h1>
        <Link to={link} className={s.toTheStoreFlex}>
          <p className={s.toTheStore}>Back to the store</p>
          <BsChevronRight className={s.arrow} />
        </Link>
      </div>
      <p className={s.topLine}></p>

      <div className={s.flex_container}>
        <div className={s.left}>
          {
            data.length === 0
              ? <p className={s.titleOrder}>The cart is epty</p>
              : data.map((item) => <BasketItem key={item.id} {...item} />)
          }
        </div>
        <div className={s.right}>
          <p className={s.titleOrder}>Order details</p>
          <div className={s.totalFlex}>
            <p className={s.total}>Total</p>
            <div className={s.summ}>
              <BasketCalculation />
              <BsCurrencyDollar size={10} className={s.dollarPriceBasket} />
            </div>
          </div>
          <form className={s.form} onSubmit={handleSubmit}>
            <input type="number" placeholder='Phone number' className={s.raz} value={phone} onChange={(event) => setPhone(event.target.value)} />
            <button className={s.order}>Order</button>
          </form>
        </div>
      </div>

    </div>
  )
}
