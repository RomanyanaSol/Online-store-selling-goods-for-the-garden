import React from 'react'
import HeaderTitle from './Home/HeaderTitle';
import Catalog from './Home/Catalog';
import Offer from './Home/Offer';
import { useSelector } from 'react-redux';
import s from './style.module.css';
import ProductItem from '../ProductItem';

export default function MainPage() {

  const products = useSelector(
    ({ products }) => {
      return products.filter(item => item.discont_price !== null)
    }
  );

  return (
    <div>
      <HeaderTitle />
      <Catalog />
      <Offer/>
      <div className={s.container}>
      <h1 className={s.h1}>Sale</h1>
      <div className={s.product_container}>
        {
          products.slice(0, 3).map(item => <ProductItem key={item.id} {...item} />)
        }
      </div>
    </div>
    </div>
  )
}
