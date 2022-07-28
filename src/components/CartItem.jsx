import React from 'react'
import { ChevronDown, ChevronUp } from '../icons';
import { removeItem, increse, decrease } from '../store/slices/cart'
import { useDispatch } from 'react-redux'
const CartItem = ({ id, title, price, img, amount }) => {
    const dispatch = useDispatch()

    return (
        <article className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>
                    {price}
                </h4>
                {/* Remove btn */}
                <button className='remove-btn' onClick={() => {
                    dispatch(removeItem(id))
                }} >Remove</button>
            </div>
            <div>
                {/* Increase amount */}
                <button className='amount-btn' onClick={() => {
                    dispatch(increse(id))
                }}>
                    <ChevronUp />
                </button>
                {/* Amount */}
                <p className='amount'>{amount}</p>
                {/* Decrease amount */}
                <button className='amount-btn' onClick={() => {
                    if (amount === 1) {
                        dispatch(removeItem(id))
                        return;
                    }
                    dispatch(decrease(id))
                }}>
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
}

export default CartItem