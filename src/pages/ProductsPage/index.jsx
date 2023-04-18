import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductItem from '../../components/ProductItem';
import s from './style.module.css';
import ProductSearch from '../../components/ProductSearch';

export default function ProductsPage() {


  const { oneCategory } = useParams();

  const products = useSelector(
    ({ products }) => {
      if (oneCategory === undefined) {
        return products
      } else {
        return products.filter(item => item.categoryId === +oneCategory)
      }
    }
  );

  const category = useSelector(
    ({ category }) => {
      if (oneCategory === undefined) {
        return category
      } else {
        return category.find(item => item.id === +oneCategory)
      }
    }
  );

  return (
    <div className={s.container}>
        {
          oneCategory === undefined
          ? <h1 className={s.h1}>All products</h1>
          : <h1 className={s.h1}>{category.title}</h1>
        }
        <ProductSearch />
        <div className={s.product_container}>
          {
            products.map(item => 
              item.show.price && item.show.discont_price &&
            <ProductItem key={item.id} {...item} />)
          }
        </div>
      </div>
  )
}
