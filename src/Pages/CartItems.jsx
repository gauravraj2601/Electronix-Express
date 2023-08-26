import React from 'react'
import { styled } from 'styled-components';
import CartCard from '../Components/CartCard';

const CartItems = () => {
  return (
    <DIV>
      <div className='product-cart'>
            <CartCard />
      </div>
      <div className='cart-total'>
        <h4>PRICE DETAILS</h4>
        <hr />
        <div style={{display:"flex", justifyContent:"space-around", marginTop:"10px"}}>
        <p>Price {"(1 items)"} </p>
          <p>₹ {"1200"}</p>
        </div>
        <div style={{display:"flex", justifyContent:"space-around", marginTop:"10px"}}>
        <p>Delivery Charges</p>
          <p style={{color:"green"}}>Free</p>
        </div>
        <hr />
        <br />
        <h1>Total Amount {`₹ 1200`}</h1>
        <br />
        <hr />

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
  .product-cart{
    width: 77%;
    border: 1px solid green;
  }
  .cart-total{
    width: 20%;
    border: 1px solid red;
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