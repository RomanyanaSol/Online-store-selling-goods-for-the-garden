import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
import { basketAddAction } from '../../store/reducer/basketReducer';
import { BsCurrencyDollar } from "react-icons/bs";



export default function ProductItem({ id, image, title, price, discont_price }) {


  const picture = `http://localhost:3333/${image}`;

  const link = `/product/${id}`;

  const dispatch = useDispatch();


  const percentDiscount = 100 - Math.round(price / discont_price * 100);

  const priceLine = () => {
    if (discont_price === null) {
      return <p className={s.onlyPrice}>
        <BsCurrencyDollar size={19} className={s.dollarForOnlyPrice} /> {price}
      </p>
    } else {
      return (
        <div className={s.priceFlex}>
          <p className={s.discontPrice}>
            <BsCurrencyDollar size={19} className={s.dollarForOnlyPrice} />
            {discont_price}
          </p>
          <p className={s.price}>
            <BsCurrencyDollar size={19} className={s.dollarForPrice} />
            {price}
          </p>
          <p className={s.percentDiscount}>{percentDiscount}%</p>
        </div>
      )
    }
  };

  return (
    <div className={s.item}>
      <div className={s.opacity}>
        <Link to={link}>
          <img className={s.img} src={picture} alt={title} />
        </Link>
        <button onClick={() => dispatch(basketAddAction(id))} className={s.button}>Add to cart</button>
      </div>
      <div >
          {priceLine()}
      </div>
      <p className={s.title}>{title}</p>
    </div>
  )
}
