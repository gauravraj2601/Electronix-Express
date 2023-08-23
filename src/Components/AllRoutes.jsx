import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Products from '../Pages/Products'
import SingleProducts from '../Pages/SingleProducts'
import CartItems from '../Pages/CartItems'
import WishList from '../Pages/WishList'
import Login from '../Pages/Login'
import PrivateRoute from './PrivateRoute'
import AddForm from '../Pages/Admin'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />\
        <Route path="/product" element={<Products />} />
        <Route path="/admin" element={<AddForm />} />
        <Route path="/singleproduct/:id" element={<SingleProducts />} />
        <Route path='/cartitems' element={
                    <PrivateRoute>
                        <CartItems />
                    </PrivateRoute>
        } />
        <Route path='/wishlist' element={
                <PrivateRoute>
                    <WishList />
                </PrivateRoute>
        } />
        <Route path='/login' element={<Login />}  />
    </Routes>
  )
}

export default AllRoutes