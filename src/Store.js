import { configureStore } from "@reduxjs/toolkit";
import Product from "./Redux/Product";

export const Store = configureStore({
    reducer: {
        product: Product
    }
});