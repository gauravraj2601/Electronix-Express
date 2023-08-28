import React, { useEffect } from 'react'
import { styled } from 'styled-components';
import ProductCard from '../Components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/GetProducts/action';

import { useSearchParams } from 'react-router-dom';
import { deleteProduct } from '../Redux/Crud/action';
import { useToast } from '@chakra-ui/react';

const AdminProducts = ({handleEdit}) => {
    const products= useSelector((store)=>store.productReducer.products);
    const dispatch= useDispatch();
    const [searchParams]= useSearchParams();
    const toast= useToast();
   



let paramObj = {
    params: {
        category: searchParams.getAll("category"),
        company: searchParams.getAll("company"),
   
    }
};
 
    useEffect(()=>{
        dispatch(getProducts(paramObj))

    },[searchParams])
   
    const handleDelete=(id)=>[
        dispatch(deleteProduct(id)).then(()=>{
            toast({
                title: 'Delete Success',
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
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

    @media only screen and (max-width: 800px) and (min-width: 600px){
        .card_container{
        grid-template-columns: repeat(2,1fr)
         }
    }
    @media only screen and (max-width: 1000px) and (min-width: 800px){
        .card_container{
        grid-template-columns: repeat(3,1fr)
         }
    }
    @media only screen and (max-width: 600px) and (min-width: 200px){
        .card_container{
        grid-template-columns: repeat(1,1fr)
         }
    }
`