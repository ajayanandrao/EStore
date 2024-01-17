import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    cartViews: false
};

const CartBtn = createSlice({
    name: "product",
    initialState,
    reducers: {
        CartOn: (state) => {
            state.cartViews = true;
        },
        CartOff: (state) => {
            state.cartViews = false;
        },

    }
});

export const { CartOn, CartOff } = CartBtn.actions;

export default CartBtn.reducer;