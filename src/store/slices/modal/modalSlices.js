import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    isOpen: false,
};
export const modalSlices = createSlice({
    name: 'modal',
    initialState,
    reducers: {

        openModal: (state) => {
            state.isOpen = true;
        }
        ,
        closeModal: (state) => {
            state.isOpen = false;
        }


    }

})
export const {openModal,closeModal} = modalSlices.actions;
export default modalSlices.reducer
