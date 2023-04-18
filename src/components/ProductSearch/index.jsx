import React from 'react';
import { useEffect, useState } from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
import { priceFilterAction, productsDiscontAction, productsSortAction } from '../../store/reducer/productsReducer';


export default function ProductSearch() {

    const [price, setPrice] = useState({ min: -Infinity, max: Infinity });
    const [discount, setDiscount] = useState(false);


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

    useEffect(() => {
        dispatch(productsDiscontAction(discount));
    }, [discount]);

   



    return (
        <div>
            <form className={s.form}>
                <div className={s.price}>
                    <p>Price</p>
                    <input type="number" placeholder='from' onChange={setMinPrice} />
                    <input type="number" placeholder='to' onChange={setMaxPrice} />
                </div>
                <div className={s.checkbox}>
                    <p>Discounted items</p>
                    <input type="checkbox" id='checkBox' checked={discount} onChange={(e) => setDiscount(e.target.checked)}/>
                </div>
                <div className={s.sorted}>
                    <p>Sorted by</p>
                    <select placeholder='By default' onChange={sort} className={s.placeholder}>
                        <option value='1'>By default</option>
                        <option value='2'>Price</option>
                        <option value='3'>Discount price</option>
                        <option value='4'>Title</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
