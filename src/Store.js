import { configureStore } from "@reduxjs/toolkit";
import Product from "./Redux/Product";
import CartBtn from "./Redux/CartView";

export const Store = configureStore({
    reducer: {
        product: Product,
        catView: CartBtn
    }
});