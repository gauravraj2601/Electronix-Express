import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Products from "../Pages/Products";
import SingleProducts from "../Pages/SingleProducts";
import CartItems from "../Pages/CartItems";
import WishList from "../Pages/WishList";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import AddForm from "../Pages/Admin";
import Admin from "../Pages/Admin";
import { PageNotFound } from "../Pages/NotFoundPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />\
      <Route path="/product/:categorys" element={<Products />} />
      <Route path="/admin" element={<Admin />} />
      <Route
        path="/singleproduct/:id/:averageRating"
        element={<SingleProducts />}
      />
      <Route
        path="/cartitems"
        element={
          <PrivateRoute>
            <CartItems />
          </PrivateRoute>
        }
      />
      <Route
        path="/wishlist"
        element={
          <PrivateRoute>
            <WishList />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
