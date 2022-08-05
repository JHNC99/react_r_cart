import { configureStore } from '@reduxjs/toolkit';
import {cartSlices} from './slices/cart';	
import {modalSlices} from './slices/modal';
export const store = configureStore({
    reducer: {
        cart: cartSlices.reducer,
        modal: modalSlices.reducer,
    },
});