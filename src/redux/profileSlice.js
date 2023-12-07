import {createSlice} from '@reduxjs/toolkit'

const profileSLice = createSlice({
    name:"profile",
    initialState:{
        shown:false
    },
    reducers:{
        toggleProfile:(state)=>{
            state.shown=!state.shown
        }
    }
})

export const {toggleProfile} = profileSLice.actions
export default profileSLice.reducer