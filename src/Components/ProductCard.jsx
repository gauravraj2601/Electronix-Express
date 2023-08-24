import React from 'react'
import { StarIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react'; 
import { styled } from 'styled-components';

const ProductCard = ({image,name, category, review,company, price}) => {
    const averageRating = (review)? (review?.reduce((total, reviewItem) => total + reviewItem.rating, 0) / review.length ):([]);


  return (
    <DIV>
        <div className='image-div'>
        <img src={image} alt="product-img" />
        </div>
        <div className='product-details' >
            <h3>{name}</h3>
            <h5>{category}</h5>
            <p>{company}</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {Array.from({ length: 5 }, (_, index) => (
            <Box key={index} color={index < Math.floor(averageRating) ? '#FDCC0D' : 'gray'}>
              <StarIcon />
            </Box>
          ))}

       { (review)? (<p style={{ marginLeft: '8px' }}>{averageRating.toFixed(1)}</p>):(<p></p>)  }
        </div>
            <h5>₹ {price}</h5>

            
        </div>

    </DIV>
  )
}

export default ProductCard

const DIV= styled.div`
    border: 1px solid red;
    height: 400px;
    .image-div{
        width: 80%;
        height: 40%;
        border: 2px solid black;
        margin:auto;
        margin-top: 10px;
    }
    img{
        width: 90%;
        height: 95%;
    }
    .product-details{
        height: 50%;
        text-align: start;
        border: 4px solid orange;
    }
`