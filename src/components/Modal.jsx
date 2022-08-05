import React from 'react'
import { useDispatch } from 'react-redux'
import {clearCart} from '../store/slices/cart'
import {closeModal} from '../store/slices/modal'
const Modal = () => {
    const dispatch = useDispatch()


    return (
        <aside className='modal-container'>
            <div className='modal'>
                <h4>Remove all items from  your  shopping cart?</h4>
                <div className='btn-container'>
                    <button type='button' className='btn confirm-btn'
                    onClick={()=>{
                        dispatch(clearCart())
                        dispatch(closeModal())
                    }}>Confirm</button>
                    <button type='button' className='btn clear-btn' onClick={()=>{
                        dispatch(closeModal());
                    }}>Cancel</button>
                </div>
            </div>
        </aside>
    )
}

export default Modal