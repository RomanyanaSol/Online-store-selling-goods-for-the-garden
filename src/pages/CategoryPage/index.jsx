import React from 'react'
import { useSelector } from 'react-redux'
import CategoryItem from '../../components/CategoryItem';
import s from './style.module.css';

export default function CategoryPage() {
  

  const categories = useSelector(state => state.category);


  return (
    <div className={s.container}>
      <h1>Categories</h1>
      <div className={s.category_container}>
        {
          categories.map(item => <CategoryItem key={item.id} {...item} />)
        }
      </div>
    </div>
  )
}
