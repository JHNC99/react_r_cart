import React from 'react'
import CartItem from './CartItem'
import {openModal} from '../store/slices/modal'
import { useSelector,useDispatch} from 'react-redux'
const CartContainer = () => {
    const { cartItems, amount, total } = useSelector(state => state.cart)

    const dispatch = useDispatch()
    if (amount < 1) {
        return (
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        );
    }

    return (
        <section className='cart'>
            {/* Header  */}
            <header>
                <h2>Your bag</h2>
            </header>
            {/* End Header */}

            {/* Cart Items */}
            <div>
                {/*  {cartItems.map(item => <CartItem key={item.id} item={item} />)} */}
                {
                    cartItems.map((item) => {
                        return <CartItem key={item.id} {...item} />
                    })
                }
            </div>
            {/* End Cart Items */}
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4> total <span>${total.toFixed(2)}</span> </h4>
                </div>
                <button className='btn clear-btn' onClick={()=>(dispatch(openModal()))}>clear cart</button>
            </footer>
        </section>
    )
}

export default CartContainer