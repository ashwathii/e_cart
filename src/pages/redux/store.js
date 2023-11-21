import { configureStore } from "@reduxjs/toolkit";
import wishslice from "./slices/wishslice";
import cartSlice from "./slices/cartSlice";





const store= configureStore({
    reducer:{
wishlistReducer:wishslice,
cartReducer:cartSlice
    }
})
export default store;