import { createSlice } from '@reduxjs/toolkit'
import cartItems from "../../../cartItems"
const initialState = {
    cartItems: cartItems,
    amount: 1,
    total: 0,
    isLoading: true,
};
export const cartSlices = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];

        }
        ,
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== itemId);

            console.log(action)
        },

        increse: (state, { payload }) => {
            const cardItem = state.cartItems.find(item => item.id === payload);
            cardItem.amount += 1;
        }
        ,

        decrease: (state, { payload }) => {
            const cardItem = state.cartItems.find(item => item.id === payload)
            cardItem.amount -= 1;
        },

        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach(item => {
                amount += item.amount;
                total += item.price * item.amount;
            }
            )
            state.amount = amount;
            state.total = total;
        }


    }

})
export const { clearCart, removeItem, increse, decrease,calculateTotal } = cartSlices.actions;
export default cartSlices.reducer

/* Code resource */

/*  state.cartItems.map(item => {
            if (item.id === itemId) {
                item.amount += 1;
            }
        }
        ); */