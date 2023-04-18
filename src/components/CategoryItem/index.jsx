import React from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';

export default function CategoryItem({id, title, image }) {

  const picture = `http://localhost:3333/${image}`;

  const link = `/categories/${id}`;

  return (
    <div>
      <Link to={link}>
        <div className={s.item}>
          <img src={picture} alt={title} />
        </div>
      </Link>
      <p className={s.name}>{title}</p>
    </div>
  )
}
