import {createSlice} from "@reduxjs/toolkit";
import { enableMapSet } from 'immer';

enableMapSet();

const fileSlice = createSlice({
    name:"file",
    initialState:{
        file:null,
        count:0,
        pages:[],
        pagesToDelete:new Set(),
    },
    reducers:{
        addfile:(state,action)=>{
            state.file = action.payload;
            state.count = 1
        },
        addPages:(state, action)=>{
            state.pages = action.payload
        },
        pushPageToDelete: (state, action)=>{
            state.pagesToDelete.add(action.payload);
        },
        removePageToDelete: (state, action) =>{
            state.pagesToDelete.delete(action.payload)
        }
    }
})

export const {addfile, addPages, pushPageToDelete, removePageToDelete} = fileSlice.actions;
export default fileSlice.reducer;