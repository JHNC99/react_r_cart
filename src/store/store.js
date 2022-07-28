import { configureStore } from '@reduxjs/toolkit';
import {cartSlices} from './slices/cart';	
export const store = configureStore({
    reducer: {
        cart: cartSlices.reducer,
    },
});