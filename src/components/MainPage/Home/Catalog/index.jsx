import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './style.module.css'
import { useSelector } from 'react-redux';
import CategoryItem from '../../../CategoryItem';


export default function Catalog() {

  const categories = useSelector(state => state.category);

  return (
    <div className={s.container}>
      <div className={s.title}>
        <p>Catalog</p>
        <NavLink to="/categories" className={s.button}>All categories</NavLink>
      </div>
      <div className={s.category_container}>
        {
          categories.slice(0, 3).map(item => <CategoryItem key={item.id} {...item} />)
        }
      </div>
    </div>
  )
}
