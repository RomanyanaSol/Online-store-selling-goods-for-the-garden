import React from 'react'
import { useSelector } from 'react-redux'

export default function BasketCalculation() {

    const { products, basket } = useSelector(state => state);

    const data = basket.map(item => {
        const product = products.find(({ id }) => id === item.id)
        return { ...item, ...product }
    })


    const totalSumWithDiscount = data.reduce((acc, { discont_price, count, id }) => {
        if (discont_price !== null) {
            return acc + discont_price * count
        } else {
            const product = products.find(({ id: productId }) => productId === id)
            return acc + product.price * count
        }
    }, 0)

    



    return (
        <div>
            {totalSumWithDiscount.toFixed(2)}
        </div>
    )
}
