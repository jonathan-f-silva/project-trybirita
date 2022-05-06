import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/Products';
import GlobalContext from '../context/GlobalContext';
import Checkout from '../pages/Checkout';

function Router() {
  const { user } = useContext(GlobalContext);
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      {user && (
        <>
          <Route exact path="/customer/products" element={ <Products /> } />
          <Route exact path="/customer/checkout" element={ <Checkout /> } />
          <Route exact path="/seller/orders" />
        </>
      )}
      <Route exact path="*" element={ <Navigate to="/login" /> } />
    </Routes>
  );
}

export default Router;
