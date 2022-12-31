import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import AllProduct from '../pages/AllProducts';
import ProductDetails from '../pages/ProductDetails';
import WishList from '../pages/WishList';
import Contact from '../pages/Contact';
import Post from '../pages/Post';
import Signup from '../pages/login_signup/Signup';
import Login from '../pages/login_signup/Login';

// for testing user page
import UserPages from '../pages/Peronal/Pages'

const Routers = () => {
  return <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<AllProduct />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/post' element={<Post />} />
        <Route path ='/signup' element={<Signup />} />
        <Route path ='/login' element={<Login/>} />
        <Route path ='/userpage' element={<UserPages/>} />
    </Routes>
}

export default Routers