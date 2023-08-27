import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Products from "../Pages/Products";
import SingleProducts from "../Pages/SingleProducts";
import CartItems from "../Pages/CartItems";
import WishList from "../Pages/WishList";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";import Admin from "../Pages/Admin";
import { PageNotFound } from "../Pages/NotFoundPage";
import { PaymentPage } from "../Pages/PaymentPage";
import PrivateAdminRoute from "./PrivateAdminRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />\
      <Route path="/product" element={<Products />} />
      <Route path="/admin" element={
                <PrivateAdminRoute>
                  <Admin />
                </PrivateAdminRoute>
              } />
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
      <Route path="/user_payment" element={<PaymentPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoutes;
