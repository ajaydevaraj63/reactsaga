import React from 'react'
import {addToCart, emptyCart, removeCart}from '../redux/action'
import { useDispatch } from 'react-redux'
const Reduxtest = () => {
    const dispatch=useDispatch();
    const product={
        name:"iphone",
        catagery:"mobile",
        color:"red"
    }
  return (
    <div>
      <button  onClick={()=>dispatch(addToCart(product))}>add to cart</button>
      <button  onClick={()=>dispatch(removeCart(product))}>Remove to cart</button>
      <button  onClick={()=>dispatch(emptyCart())}>empty cart</button>
    </div>

  )
}

export default Reduxtest