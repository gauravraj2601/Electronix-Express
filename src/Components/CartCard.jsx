
import React from 'react'
import { styled } from 'styled-components'

const CartCard = ({id,image,Highlights,name,price, handleRemove}) => {
    const currentDate = new Date();
  const deliveryDate = new Date(currentDate);
  deliveryDate.setDate(currentDate.getDate() + 4);
  return (
    <DIV>
        <div className='product-img'>
            <img src={image} alt="cartProduct-img" />
        </div>
        <div className='details-div'>
            <h2>{name}</h2>
            <p>{Highlights[0]}</p>
            <p>{Highlights[1]}</p>
            <p>Seller: MASAI ELECTRONIX RETEIL</p>
            <h2>₹ {price}</h2>
        </div>
        <div className='delivery-div'>
            <h2>Delivery by <span>{deliveryDate.toDateString()} </span>| </h2>
            <button onClick={()=>handleRemove(id)} >Remove</button>
        </div>
        </DIV>
  )
}

// {Highlights[0]}

export default CartCard

const DIV= styled.div`
display: flex;
height: 170px;
margin-bottom: 10px;
border: 1px solid gray;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    .product-img{
        width: 27%;
        height: 100%;
    }
    .product-img img{
        height: 80%;
        margin: auto;
        margin-top: 10%;
    }
    .details-div{
        width: 43%;
        height: 100%;
        text-align: start;
        padding: 20px;
    }
    h2{
        font-weight: 600;
    }
    p{
        color:gray
    }
    span{
        color:gray;
        font-weight: 400;
    }
    .delivery-div{
        padding: 30px 0 0 5px;
    }
    button{
        padding: 5px;
        border: 1px solid gray;
        margin-top:50px;
        font-weight: bold;
        background-color:#c36319 ;
        color: white;
    }
    button:hover{
        color:#c36319 ;
        border: 1px solid gray;
        background-color: white;
    }
`