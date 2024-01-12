import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:'cart',
    initialState:{
        item:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.item.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.item.pop(item===action.payload);
        },
        clearAll:(state)=>{
            state.item =[];
        },
    }
});


export const{addItem,removeItem,clearAll}= cartSlice.actions;

export default cartSlice.reducer;