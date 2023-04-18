import React from 'react'
import { useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import s from './style.module.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { priceFilterAction,  productsSortAction } from '../../store/reducer/productsReducer';




export default function AllSales() {

  const products = useSelector(
    ({ products }) => {
      return products.filter(item => item.discont_price !== null)
    }
  );

  const [price, setPrice] = useState({ min: -Infinity, max: Infinity });


  const setMaxPrice = (event) => {
      setPrice(pre => ({ ...pre, max: +event.target.value || Infinity }))
  };

  const setMinPrice = (event) => {
      setPrice(pre => ({ ...pre, min: +event.target.value || -Infinity }))
  };

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(priceFilterAction(price));
  }, [price]);


  const sort = event => {
      const value = event.target.value;
      dispatch(productsSortAction(value))
  }




  return (
    <div className={s.container}>
      <h1 className={s.h1}>Products with sale</h1>
      <div>
        <form className={s.form}>
          <div className={s.price}>
            <p>Price</p>
            <input type="number" placeholder='from' onChange={setMinPrice} />
            <input type="number" placeholder='to' onChange={setMaxPrice} />
          </div>
          <div className={s.sorted}>
            <p>Sorted by</p>
            <select placeholder='By default' onChange={sort} className={s.placeholder}>
              <option value='1'>By default</option>
              <option value='2'>Price</option>
              <option value='4'>Title</option>
            </select>
          </div>
        </form>
      </div>
      <div className={s.product_container}>
        {
          products.map(item =>
            item.show.price &&
            <ProductItem key={item.id} {...item} />)
        }
      </div>
    </div>
  )
}
