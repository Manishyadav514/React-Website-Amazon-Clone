// import React, { useState, useEffect } from "react";
import AmazonLogo from "../media/AmazonLogo (3).png";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import IndianFlag from "../media/indian-flag.jpg";
import { Link } from "react-router-dom";
import { CartState } from "../functionality/Context.js";
import {AiFillHeart } from "react-icons/ai";

const Header = () => {

  const {
    state: { cart },
  } = CartState();

  return (
    <>
      <div className="navbar-show">
        <div>
          <Link to="/">
            <img className="navbar-logo" src={AmazonLogo} alt="Amazon Logo" />
          </Link>
        </div>

        <div className="header-options">
          <div className="header-option-menu">
            <span className="header-option-menu-one">Deliver to FoxArchive</span>
            <span className="header-option-menu-two">Delhi 110001</span>
          </div>
        </div>

        <div className="search-bar">
          <span className="search-bar-text">All&#709;</span>

          <input className="search-bar-input" type="text"></input>
          <SearchIcon className="search-bar-icon" />
        </div>

        <div className="header-options">
          <div className="header-option-menu">
            <img className="flag" src={IndianFlag} alt="Amazon Logo" />
          </div>

          <div className="header-option-menu">
            <span className="header-option-menu-one">Hello, Manish</span>
            <span className="header-option-menu-two">Account & Lists</span>
          </div>

          <div className="header-option-menu">
            <span className="header-option-menu-one">Return</span>
            <span className="header-option-menu-two">& Order</span>
          </div>
          <Link to="/WishListPage">
          <div className="header-basket">            <AiFillHeart
              style={{ color: "white", fontSize: "1.3rem", margin: 5 }}
            /></div>

          </Link>
          <Link to="/CheckOutPage">
            <div className="header-basket">
              <ShoppingCartOutlinedIcon />
              <span className="header-basket-count">{cart.length}</span>
              <span className="header-basket-text">Cart</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="secondNavbar">
        <div className="secondNavbar-text-content">
        <Link to="/ProductPage">
          <p>≡ All</p>
        </Link>
          <p>Fresh</p>
          <p>Mobiles</p>
          <p>Computers</p>
          <p>Buy Again</p>
          <p>Gift Cards</p>
          <Link to="/ProductPage">
          <p>Baby</p>
        </Link>
          <p>Browsing History</p>
          <p>Amazon Pay</p>
          <p>Grocery & Gourmet Foods</p>
        </div>

        <Link to="/ProductPage">
          <img
            className="secondNavbar-image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/FT_SWM_400x39_211._CB623007921_.jpg"
            alt="PrimeLogo"
          />
        </Link>
      </div>
    </>
  );
};
export default Header;
