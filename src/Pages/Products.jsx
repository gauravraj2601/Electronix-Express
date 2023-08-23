import React from 'react'
import { styled } from 'styled-components';
const Products = () => {
  return (
    <DIV>
        <div className='sidebar'>sidebar</div>
        <div className='card_container'>product container</div>
    </DIV>
  )
}

export default Products

const DIV= styled.div`
    display: flex;
    .sidebar{
        width:20%
    }
`