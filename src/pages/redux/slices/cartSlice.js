import { createSlice } from "@reduxjs/toolkit";



const cartslice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //action
        //fun to add items to cart
        addToCart :(state,action)=>{
            state.push(action.payload)
        },
        //fun to remove item from cart
        removeFromCart : (state, action)=>{
          return  state.filter(item=>item.id!=action.payload)
        } ,
        emptyCart:(state)=>{
            return state=[]
        }
    }
})

export const {addToCart,removeFromCart,emptyCart} = cartslice.actions
export default cartslice.reducer