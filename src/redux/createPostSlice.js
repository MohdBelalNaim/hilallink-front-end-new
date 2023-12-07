import {createSlice} from '@reduxjs/toolkit'

const createPost = createSlice({
    name:"create",
    initialState:{
        shown:false
    },
    reducers:{
        showCreate:(state)=>{
            state.shown=true
        },
        hideCreate:(state)=>{
            state.shown=false
        }
    }
})

export const{showCreate,hideCreate} = createPost.actions
export default createPost.reducer