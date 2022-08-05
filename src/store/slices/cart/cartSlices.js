import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
/* import cartItems from "../../../cartItems" */


const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: false,
};

const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

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


    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        }
        ,
        [getCartItems.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false;
        }
    }


})
export const { clearCart, removeItem, increse, decrease, calculateTotal, isLoading } = cartSlices.actions;
export default cartSlices.reducer

/* Code resource */

/*  state.cartItems.map(item => {
            if (item.id === itemId) {
                item.amount += 1;
            }
        }
        ); */