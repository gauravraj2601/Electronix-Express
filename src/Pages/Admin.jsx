import React from 'react'
import AddForm from '../Components/Form'
import Products from './Products'
import { styled } from 'styled-components'

const Admin = () => {
  return (
    <DIV>
      <AddForm/>
      <Products/>
    </DIV>
  )
}

const DIV=styled.div`
  
  display: flex;
`

export default Admin