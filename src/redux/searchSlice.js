import {createSlice} from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name:"search",
    initialState:{
        shown:false
    },
    reducers:{
        showSearch:(state)=>{
            state.shown=true
        },
        hideSearch:(state)=>{
            state.shown=false
        }
    }
})

export const {showSearch,hideSearch} = searchSlice.actions
export default searchSlice.reducer