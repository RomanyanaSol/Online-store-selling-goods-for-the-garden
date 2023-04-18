import React from 'react';
import s from './style.module.css';

export default function NotFoundPage() {
  return (
    <div className={s.container}>
      <img src={require('./notFoundPage.png')} alt="Fertilizer" className={s.responsive}/>
    </div>
  )
}
