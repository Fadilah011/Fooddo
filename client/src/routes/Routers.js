import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../pages/Home";
import AllFood from '../pages/AllFood';
import FoodDetail from '../pages/FoodDetail';
import Login from '../pages/Login';
import Register from '../pages/Register';
import About from '../pages/About';
import Contact from '../pages/Contact' ;   
import Favorite from '../pages/Favorite';  

const Routers =() =>{
  return <Routes>
    <Route path='/' element={<Navigate to='/home'/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/foods' element={<AllFood/>}/>
    <Route path='/favorite' element={<Favorite/>}/>
    <Route path='/foods/:id' element={<FoodDetail/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/about us' element={<About/>}/>
    <Route path='/contact us' element={<Contact/>}/>
  </Routes >
};

export default Routers;