import React, { useEffect } from 'react'
import { styled } from 'styled-components';
import ProductCard from '../Components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/GetProducts/action';
import Sidebar from '../Components/Sidebar';




import { useSearchParams ,useParams} from 'react-router-dom';
import Loader from '../Components/Loading';

const Products = () => {
    const products= useSelector((store)=>store.productReducer.products);
    const dispatch= useDispatch();
    const [searchParams]= useSearchParams();

   


    const isLoading= useSelector((store)=>store.productReducer.isLoading)

    // const minPrice = products && Math.min(...products.map(product => parseFloat(product.price)));
    // let maxPrice = products && Math?.max(...products.map(product => parseFloat(product.price)));


// const priceGte= +searchParams.get("price_gte")
// const priceLte=  +searchParams.get("price_lte")
// console.log("gt", priceLte)
let paramObj = {
    params: {
        category: searchParams.getAll("category"),
        company: searchParams.getAll("company"),
        _sort:searchParams.get("order") && "price",
        _order:searchParams.get("order"),
        q:searchParams.get("search")
        // price_gte: priceGte,
        // price_lte:priceLte ===0?1000000:priceLte
    }
};
 
    useEffect(()=>{
        dispatch(getProducts(paramObj))
        

    },[searchParams])
  return (
    <DIV>
        <div className='sidebar'>
            <Sidebar
            //  minPrice={minPrice} maxPrice={maxPrice}
              />
        </div>
        {isLoading? <Loader />:(
        <div className='card_container'>
       
        {products?.map((product)=>(
            <ProductCard key={product.id} {...product} />
        ))}
        </div>

        ) }
    </DIV>
  )
}

export default Products

const DIV= styled.div`
    display: flex;
    width: 100%;
    gap:10px;
    margin-top: 15px;

    .sidebar{
        width:15%;
        height:550px;
        position: sticky;
        top: 70px;
        padding: 5px;
        margin-top: -10px;
        /* border: 1px solid red; */
        border-radius: 15px;
        background-color: #f6f2f2;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        margin-left: 15px;
    }
    .card_container{
        width: 85%;
        /* border: 1px solid green; */
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        overflow: auto;
        padding: 10px;
    }


    @media only screen and (max-width: 800px) and (min-width:421px) {
        .card_container{
            width: 70%;
               grid-template-columns: repeat(2,1fr);
               /* height: 300px; */
           }
           .sidebar{
            width: 24%;
            height: 640px;
           }
        }
    @media only screen and (max-width:420px){
        .card_container{
            width: 60%;
            grid-template-columns: repeat(1,1fr);
        }
        .sidebar{
            width: 35%;
        }
    }

`