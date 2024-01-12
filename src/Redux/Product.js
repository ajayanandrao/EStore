import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const Product = createSlice({
    name: "product",
    initialState,
    reducers: {
        AddProduct: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(id, name, image, price, count) {
                return {
                    payload: {
                        id: nanoid(),
                        uid: id,
                        count: count,
                        name,
                        image,
                        price,
                        time: new Date().toISOString(),
                    }
                }
            }
        },
        remove(state, action) {
            const postIdToRemove = action.payload;
            return state.filter((post) => post.id !== postIdToRemove);
        },
        updateTodo(state, action) {
            const { id , count } = action.payload;
            const postToUpdate = state.find((post) => post.id === id);
            if (postToUpdate) {
                postToUpdate.count = count;
            }
        },
    }
});

export const { AddProduct, remove, updateTodo } = Product.actions;

export default Product.reducer;