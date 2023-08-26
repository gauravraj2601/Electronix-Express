import React from 'react'
import { styled } from 'styled-components'

const CartCard = () => {
  return (
    <DIV>
        <div className='product-img'>
            <img src="https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/a/e/g/iphone-13-pro-mlvw3hn-a-apple-original-imag6vpcvspnzyfy.jpeg?q=70" alt="" />
        </div>
        <div></div>
        <div></div>
    </DIV>
  )
}

export default CartCard

const DIV= styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 250px;
    .product-img img{
        height: 80%;
        
    }
`