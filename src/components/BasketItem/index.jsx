import React from 'react'
import { useDispatch } from 'react-redux';
import { basketClearAction, basketDecrementAction, basketIncrementAction } from '../../store/reducer/basketReducer';
import s from './style.module.css';
import { BiMinus, BiPlus } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";



export default function BasketItem({ id, image, title, discont_price, price, count }) {

    const picture = `http://localhost:3333/${image}`;

    const dispatch = useDispatch();

    return (
        <div className={s.container}>
            <div className={s.left}>
                <img src={picture} alt={title} />
                <p className={s.line}></p>
            </div>
            <div className={s.right}>
                <div className={s.title_and_price}>
                    <p className={s.title}>{title}</p>
                    <div className={s.btns}>
                        <BiMinus size={30} className={s.minus} onClick={() => dispatch(basketDecrementAction(id))} />
                        <p>{count}</p>
                        <BiPlus size={30} className={s.plus} onClick={() => dispatch(basketIncrementAction(id))} />
                    </div>
                </div>
                <div>
                    {
                        discont_price === null
                            ? (
                                <div className={s.priceOnlyFlex}>
                                    <BsCurrencyDollar size={19} />
                                    <p className={s.discont_price} >{price}</p>
                                </div>
                            )
                            : (
                                <div className={s.flex_price}>
                                    <div className={s.priceFlex}>
                                        <BsCurrencyDollar size={19} />
                                        <p className={s.discont_price}>{discont_price}</p>
                                    </div>
                                    <div className={s.priceFlexGrey}>
                                        <BsCurrencyDollar size={19} className={s.dollarPrice} />
                                        <p className={s.price}>{price}</p>
                                    </div>
                                </div>
                            )
                    }
                </div>
                <FiX size={25} className={s.x} onClick={() => dispatch(basketClearAction(id))} />
            </div>
        </div>
    )
}
