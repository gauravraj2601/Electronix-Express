import React, { useEffect } from 'react'
import { styled } from 'styled-components';
import ProductCard from '../Components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/GetProducts/action';

import { useSearchParams } from 'react-router-dom';
import { deleteProduct } from '../Redux/Crud/action';

const AdminProducts = ({handleEdit}) => {
    const products= useSelector((store)=>store.productReducer.products);
    const loading=useSelector(store=>store.authReducer.isLoading);
    const dispatch= useDispatch();
    const [searchParams]= useSearchParams();

    // const minPrice = products && Math.min(...products.map(product => parseFloat(product.price)));
    // let maxPrice = products && Math?.max(...products.map(product => parseFloat(product.price)));


const priceGte= +searchParams.get("price_gte")
const priceLte=  +searchParams.get("price_lte")
console.log("gt", priceLte)
let paramObj = {
    params: {
        category: searchParams.getAll("category"),
        company: searchParams.getAll("company"),
        // price_gte: priceGte,
        // price_lte:priceLte ===0?1000000:priceLte
    }
};
 
    useEffect(()=>{
        dispatch(getProducts(paramObj))

    },[searchParams])
   
    const handleDelete=(id)=>[
        dispatch(deleteProduct(id)).then(()=>{
            dispatch(getProducts()) 
        })
    ]
  return (
    <DIV>
       
        <div className='card_container'>
            
        {products?.map((product)=>(
            <ProductCard key={product.id} {...product} handleEdit={handleEdit} handleDelete={handleDelete} />
        ))}
        </div>
    </DIV>
  )
}

export default AdminProducts

const DIV= styled.div`
    display: flex;
    width: 100%;
    gap:15px;
    margin: auto;

    
    .card_container{
        width: 100%;
        /* border: 1px solid green; */
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        overflow: auto;
        padding: 10px;
        margin: auto;

    }
`