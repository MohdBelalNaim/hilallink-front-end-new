import {configureStore} from '@reduxjs/toolkit'
import searchSlice from './searchSlice'
import createPostSlice from './createPostSlice'
import profileSlice from './profileSlice'

const store = configureStore({
    reducer:{
        search:searchSlice,
        create:createPostSlice,
        profile:profileSlice
    }
})
export default store