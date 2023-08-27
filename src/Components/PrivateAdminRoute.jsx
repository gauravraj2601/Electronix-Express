import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateAdminRoute = ({children}) => {
    const isAuthAdmin= useSelector((store)=>store.authReducer.isAuthAdmin);
  return (
    <div>
        {isAuthAdmin? children: <Navigate to="/login" />}
    </div>
  )
}

export default PrivateAdminRoute