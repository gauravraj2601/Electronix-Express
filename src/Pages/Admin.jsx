import React, { useState } from 'react'
import AddForm from '../Components/Form'
import Products from './Products'
import { styled } from 'styled-components'
import AdminProducts from './AdminProducts'
import Sidebar from '../Components/Sidebar'
import EditForm from '../Components/EditForm'

const Admin = () => {
   
  const [Id,setId]=useState("")

  const handleEdit=(id)=>{
    console.log(id)
    setId(id)
  }
   
  return (
    <DIV>
      <div className='form'>
      <AddForm className='addForm' />
      <EditForm className="editForm" Id={Id}  />
       <Sidebar className="sideBar" />
       
      </div>
      <AdminProducts handleEdit={handleEdit}/>
    </DIV>
  )
}

const DIV=styled.div`
  
  display: flex;

  .form{
    width: 35%;
  }
  .addForm{
    width: 100%;
  }
  .editForm{
    width:100%
  }
  .sideBar{
    margin-left: 20px;
  }
`

export default Admin