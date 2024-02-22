import { configureStore } from "@reduxjs/toolkit";
import favirotSlice from './slice/faverotSlice';

export default configureStore({
    reducer: {
       favirot : favirotSlice,
         
    }
})