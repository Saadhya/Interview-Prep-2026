import { createSlice } from "@reduxjs/toolkit";

const initialState={value:0};
const addToCart=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
             state.value+=action.payload;
        }
    }
})

export const {addItem}=addToCart.actions;
export default addToCart.reducer