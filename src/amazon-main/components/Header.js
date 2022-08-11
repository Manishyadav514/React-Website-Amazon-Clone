// import React, { useState, useEffect } from "react";
import AmazonLogo from "../media/AmazonLogo (3).png";
import "./Header.css";
import IndianFlag from "../media/indian-flag.jpg";
import { Link } from "react-router-dom";
import { CartState } from "../functionality/Context.js";
import { AiFillHeart } from "react-icons/ai";
import {FaSearch } from "react-icons/fa";
import { FiMapPin,FiShoppingCart } from "react-icons/fi";
import {RiArrowDropDownLine} from "react-icons/ri"

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
          <div className="header-pin-logo">
            <FiMapPin style={{ color: "white" }} />
          </div>
          <div className="header-option-menu">
            <span className="header-option-menu-one">
              Deliver to FoxArchive
            </span>
            <span className="header-option-menu-two">Delhi 110001</span>
          </div>
        </div>

        <div className="search-bar">
          <span className="search-bar-text">All <RiArrowDropDownLine/></span>
          <input className="search-bar-input" type="text"></input>
          <span className="search-bar-icon"> <FaSearch/></span>

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
        </div>
        <div className="checkout-box">
        <Link to="/WishListPage">
            <div className="header-basket">
              {" "}
              <AiFillHeart
                style={{ color: "red", fontSize: "1.3rem", margin: 5 }}
              />
            </div>
          </Link>
          <Link to="/CheckOutPage">
            <div className="header-basket">
              <FiShoppingCart 
              style={{ color: "#fff", fontSize: "1.5rem", margin: 5 }}
              />
              <span className="header-basket-count">{cart.length}</span>
              <span className="header-basket-text">Cart</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="secondNavbar">
        <div className="secondNavbar-text-content">
          <Link to="/ProductPage"> All<RiArrowDropDownLine style={{color: "#fff"}}/></Link>
          <Link to="/ProductPage">Fresh</Link>
          <Link to="/ProductPage">Mobiles</Link>
          <Link to="/ProductPage">Baby</Link>
          <Link to="/ProductPage">Computers</Link>
          <Link to="/ProductPage">Buy Again</Link>
          <Link to="/ProductPage">Gift Cards</Link>
          <Link to="/ProductPage">Browsing History</Link>
          <Link to="/ProductPage">Amazon Pay</Link>
          <Link to="/ProductPage">Grocery & Gourmet Foods</Link>
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
