import React, { useEffect } from 'react'
import { styled } from 'styled-components';
import ProductCard from '../Components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/GetProducts/action';
import Sidebar from '../Components/Sidebar';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
    const products= useSelector((store)=>store.productReducer.products);
    const dispatch= useDispatch();
    const [searchParams]= useSearchParams();

    let paramObj={
        params:{
            category:searchParams.getAll("category"),
            company:searchParams.getAll("company"),
            price_gte:+searchParams.get("price_gte"),
            price_lte:+searchParams.get("price_lte")
        }
    }
    // console.log(paramObj)
    useEffect(()=>{
        dispatch(getProducts(paramObj))
    },[searchParams])
    // console.log(products)
  return (
    <DIV>
        <div className='sidebar'>
            <Sidebar />
        </div>
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
    margin-top: 15px;

    .sidebar{
        width:15%;
        height:550px;
        border: 1px solid red;
        margin-left: 10px;
    }
    .card_container{
        width: 85%;
        border: 1px solid green;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;

    }
`