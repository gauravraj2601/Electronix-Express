import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from 'styled-components'
import WishListCard from '../Components/WishListCard';
import { addToCart, removeFromWishlist } from '../Redux/GetProducts/action';

const WishList = () => {
  const wishlistProducts= useSelector(store=>store.productReducer.wishlist);
  const cartItems= useSelector(store=>store.productReducer.cart);
  const dispatch= useDispatch();

  const handleRemove=(id)=>{
    dispatch(removeFromWishlist(id))
  }

  const handleAddtoCart=(id)=>{
    if(cartItems.find((el)=>el.id===id)){
      alert("Already in Cart")
    }
    else{
      const cart= wishlistProducts.find((el)=>el.id===id);
      dispatch(addToCart(cart))
      dispatch(removeFromWishlist(id))
      alert("Product Added To Cart")
    }
  }
  return (
    <DIV>
        {wishlistProducts.length===0 && <div style={{width:"100%",height:"150px"}}><h1 style={{marginTop:"120px", fontWeight:"700", fontSize:"20px"}}>No Product in Wishlist</h1></div> }
          {wishlistProducts?.map((el)=>{
            return <WishListCard key={el.id} {...el} handleAddtoCart={handleAddtoCart} handleRemove={handleRemove}/>
          })}
    </DIV>
  )
}

export default WishList

const DIV= styled.div`
  width: 70%;
  margin: auto;

`