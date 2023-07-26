import { ADD_TO_CART,EMPTY_CART,REMOVE_CART } from "../constant"
export const addToCart=(data)=>{
    return {
        type:ADD_TO_CART,
        data
    }
}
export const removeCart=(data)=>{
  
    return {
        type:REMOVE_CART,
        data
    }
}
export const emptyCart=()=>{
   
    return {
        type:EMPTY_CART,
       
    }
}