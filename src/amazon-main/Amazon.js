import React from "react";
import Header from "./components/Header.js";
import WishListPage from "./components/WishListPage.js";
import CheckOutPage from "./components/CheckOutPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/ProductPage.js";
import LoginPage from "./components/LoginPage.js"
import Rating from "./components/Rating.js"
import HomePage from "./components/HomePage.js";
import ProductDetails from "./components/ProductDetails"
import Footer from "./components/Footer"

const Amazon = () => {
  return (
    <>
       <Router>
        <Routes>
        <Route exact path="/CheckOutPage" element={<><Header/><CheckOutPage/><Footer/></>}/>
        <Route exact path="/ProductPage" element={<><Header/><Products/><Rating/><Footer/></>}/> 
        <Route exact path="/WishListPage" element={<><Header/><WishListPage/><Footer/></>}/> 
        <Route exact path="/" element={<><Header/><HomePage/><Footer/></>}/>  
        <Route exact path="/LoginPage" element={<><LoginPage/></>}/>  
        <Route exact path="/ProductPage/:productID" element={<><Header/><ProductDetails/><Footer/></>}/>  
        </Routes>
      </Router>
    </>
  );
};

export default Amazon;
