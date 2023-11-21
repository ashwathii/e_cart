import { createSlice } from "@reduxjs/toolkit";




const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:[],//to store more than one value
    reducers:{
        //actions
        //function to add items to the state
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeWishlist:(state,action)=>{
          return  state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishlist,removeWishlist}=wishlistSlice.actions

export default wishlistSlice.reducer