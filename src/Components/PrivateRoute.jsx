import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => { 
    const isAuth= useSelector((store)=>store.authReducer.isAuth);
    // const isAuth=true;
    const location= useLocation();
  return (
    //    giving the pathname to state in location
    <div>{isAuth?children:<Navigate state={location.pathname} to='/login' />}</div>
  )
}

export default PrivateRoute