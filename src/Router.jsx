import React from 'react'
import { Routes, Route, redirect } from 'react-router-dom';import Landing from './Pages/Landing/Landing'
import Payment from './Pages/Payment/Payment'
import Auth from './Pages/Auth/Auth'
import Orders from './Pages/Orders/Orders'
import Category from './Components/Category/Category';
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';;
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';

function Routing() {

  const stripePromise = loadStripe("pk_test_51RVwpxCTKgGlT9S9JC1xBPS6rjZjZSzJ9BRZlIetaCCcbNRLwbmEqgUwSEETQpXrBSmvUkPgiTSx3ixGWA0a0vCI00jGGioqIp");

  return (
    <>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/payments" element={
              <ProtectedRoute 
              msg={"You must log in to pay"} redirect={"/payments"}>
                <Elements stripe={stripePromise}>
                  <Payment/>
                </Elements>
              </ProtectedRoute>
              }/>
            <Route path="/orders" element={
              <ProtectedRoute msg="Login required to view your orders" redirect="/orders">
                <Orders />
              </ProtectedRoute>
            } />
            <Route path="/Category" element={<Category/>}/>
            <Route path="/cart" element={<Cart />} />            
            <Route path="/category/:categoryName" element={<Results />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
    </>
  )
}

export default Routing;