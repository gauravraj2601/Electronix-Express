import React, { useEffect } from 'react'
import { styled } from 'styled-components';
import ProductCard from '../Components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/GetProducts/action';

const Products = () => {
    const products= useSelector((store)=>store.productReducer.products);
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getProducts())
    },[])
    console.log(products)
  return (
    <DIV>
        <div className='sidebar'>sidebar</div>
        <div className='card_container'>
        {products?.map((product)=>(
            <ProductCard key={product.id} {...product} />
        ))}
        </div>
    </DIV>
  )
}

export default Products

const DIV= styled.div`
    display: flex;
    width: 100%;
    gap:15px;
    .sidebar{
        width:15%;
        height:500px;
        border: 1px solid red;
    }
    .card_container{
        width: 85%;
        border: 1px solid green;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;

    }
`