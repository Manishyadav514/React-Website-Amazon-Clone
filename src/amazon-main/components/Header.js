// import React, { useState, useEffect } from "react";
import AmazonLogo from "../media/AmazonLogo (3).png";
import "./main.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import IndianFlag from "../media/indian-flag.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  // const [show, handleShow] = useState(true);
  // useEffect(() => {
  //   window.addEventListener("scroll",()=>{
  //     if (window.scrollY>100){
  //         handleShow(false);
  //     } else handleShow(true);
  //   });
  //   return ()=>{
  //     // window.removeEventlistener("scroll");
  //     console.log("removedEventListner")
  //   };
  // }, []);

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
            <span className="header-option-menu-one">Deliver to Yadav</span>
            <span className="header-option-menu-two">Tulsipur 271208</span>
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

          <div className="header-basket">
            <ShoppingCartOutlinedIcon />
            <span className="header-basket-count">0</span>
            <span className="header-basket-text">Cart</span>
          </div>
        </div>
      </div>

      <div className="second-navbar">
        <div className="second-navbar-text-content">
          <p>≡ All</p>
          <p>Fresh</p>
          <p>Mobiles</p>
          <p>Computers</p>
          <p>Buy Again</p>
          <p>Gift Cards</p>
          <p>Baby</p>
          <p>Browsing History</p>
          <p>Amazon Pay</p>
          <p>Grocery & Gourmet Foods</p>
        </div>

        <Link to="/ProductPage">
          <img
            className="second-navbar-image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/FT_SWM_400x39_211._CB623007921_.jpg"
            alt="PrimeLogo"
          />
        </Link>
      </div>
    </>
  );
};
export default Header;
