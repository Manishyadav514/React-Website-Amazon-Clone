import React from "react";
import Header from "./components/Header.js";
import ProductPage from "./components/ProductPage.js";
import HomePage from "./components/HomePage.js";
// import Test from './components/test.js'
// import MultiActionAreaCard from './components/MultiActionAreaCard.js'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./Amazon.css";
const Amazon = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route exact path="/ProductPage" element={<><Header/><HomePage/></>}/>
        <Route exact path="/CheckOut" element={<><Header/></>}/> 
        <Route exact path="/" element={<><Header/><ProductPage/></>}/>  
        </Routes>
      </Router>
    </>
  );
};

export default Amazon;
