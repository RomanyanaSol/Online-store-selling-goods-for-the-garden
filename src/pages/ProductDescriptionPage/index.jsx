import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import s from './style.module.css';
import { basketAddAction } from '../../store/reducer/basketReducer';
import { BsCurrencyDollar } from "react-icons/bs";



export default function ProductDescriptionPage() {

  const { id } = useParams();
  const products = useSelector(({ products }) => products);

  const dispatch = useDispatch();




  const render = () => {
    if (products.length === 0) {
      return <p>данные грузятся</p>
    } else {
      const { title, image, discont_price, price, description } =
        products.find(item => item.id === +id);
        
      const percentDiscount = 100 - Math.round(price / discont_price * 100);


      const picture = `http://localhost:3333/${image}`;

      return (
        <div className={s.container}>
          <h1 className={s.product_title}>{title}</h1>
          <div className={s.flex}>
            <div className={s.left_side}>
              <img src={picture} alt={title} />
            </div>
            <div>
              {
                discont_price === null
                  ?
                  (
                    <div className={s.onlyPrice}>
                      <BsCurrencyDollar size={19} className={s.dollarOnlyPrice} />
                      <p>{price}</p>
                    </div>
                  )
                  :
                  (
                    <div className={s.price_block}>
                      <div className={s.sign_price_flex}>
                        <p className={s.discont_price}>
                          <BsCurrencyDollar size={19} className={s.dollarDiscontPrice} />
                          {discont_price}
                        </p>
                      </div>
                      <p className={s.price}>
                        <BsCurrencyDollar size={19} className={s.dollarPrice} />
                        {price}
                      </p>
                      <p className={s.percent}>{percentDiscount}%</p>
                    </div>
                  )
              }

              <button onClick={() => dispatch(basketAddAction(+id))} className={s.btn}>To cart</button>
              <p className={s.line}></p>
              <div>
                <p className={s.description_title}>Description</p>
                <p className={s.description_body}>{description}</p>
              </div>
            </div>
          </div>
        </div >
      )
    }
  }



  return (
    <div>
      {render()}
    </div>
  )
}
