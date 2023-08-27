import React from 'react'
import { styled } from 'styled-components';
import CartCard from '../Components/CartCard';
import { useDispatch, useSelector } from 'react-redux';
import {  removeFromCart } from '../Redux/GetProducts/action';
import { Button } from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';

const CartItems = () => {
  const cartProducts= useSelector(store=>store.productReducer.cart)
  const dispatch= useDispatch()
  // console.log(cartProducts)
  const cartTotal= cartProducts?.reduce((acc,curr)=>acc+curr.price,0)



  const navigate= useNavigate();

  const handleRemove=(id)=>{
      dispatch(removeFromCart(id))
  }
  const handleProcced = () =>{
navigate('/user_payment')

  }
  return (
    <DIV>
      <div className='product-cart'>
        {cartProducts?.map((el)=>(
          <CartCard  key={el.id} {...el} handleRemove={handleRemove}/>

        ))} <br /><br />
        <Button width="400px" bg="#c36319" color='white' onClick={handleProcced}>proceed</Button> <br /><br />
      </div>
      <div className='cart-total'>
        <h4>PRICE DETAILS</h4>
        <hr />
        <div style={{display:"flex", justifyContent:"space-around", marginTop:"10px"}}>
        <p>Price {`(${cartProducts?.length} items)`} </p>
          <p>₹ {cartTotal}</p>
        </div>
        <div style={{display:"flex", justifyContent:"space-around", marginTop:"10px"}}>
        <p>Delivery Charges</p>
          <p style={{color:"green"}}>Free</p>
        </div>
        <hr />
        <br />
        <h1>Total Amount ₹{cartTotal}</h1>
        <br />
    

      </div>
    </DIV>
  )
}

export default CartItems;

const DIV= styled.div`
width: 85%;
display: flex;
gap: 20px;
margin:auto;
margin-top: 10px;
  .product-cart{
    width: 77%;
    overflow: auto;
  }
  .cart-total{
    width: 20%;
    height: 180px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    border: 1px solid gray;
    position: sticky;
    top:0;
  }
  h4{
    font-weight: 600;
    color: gray;
  }
  hr{
    border:1px solid #9c9898;
  }
  h1{
    font-size: large;
    font-weight: 600;
  }
`