import React from "react";
import Banner from "../media/banner (1).jpg";
import HomeCard from "./HomeCard.js";
import "./HomePage.css";

const ProductPage = () => {

  // const products = [
  //   {
  //     id: 1, 
  //     title:"MOKOBARA Luggage Polycarbonate Hardsided Suitcase Trolley (Cabin Pro, Crypto)",
  //     description:"Unbreakable & Lightweight Made of German Makrolon poly-carbonate shell that is flexible & strong.",
  //     rating:5,
  //     price:100,
  //     image:"https://m.media-amazon.com/images/I/715wkAE0FQL._AC_SY135_.jpg",
  //   },
  //   {              
  //   id: 2,
  //   title:"Wall Shelf",
  //   description:"Acco & deco Hexagon Wall Shelf for Living Room Stylish | Hexagonal Designer Wooden Shelves for Home Decor Items| Display Rack for Bedroom, Kitchen, Office and More (Set of 6| Color-Orange& Brown)",
  //   rating:3,
  //   price: 250,
  //   image:"https://m.media-amazon.com/images/I/516yyR3LjgS._SX425_.jpg",
  // },
  // {
  //   id: 3,
  //   title:"Mosquito Net",
  //   description:"Hexagonal Designer Wooden Shelves for Home Decor Items",
  //   rating:4,
  //   price: 400,
  //   image:"https://m.media-amazon.com/images/I/516yyR3LjgS._SX425_.jpg",
  // },
  // {
  //   id: 4,
  //   title:"Extension Board",
  //   description:"Goldmedal Curve Plus 205101 Plastic 240 i-Strip LED Spike Guard Adaptors (White and Red)",
  //   rating:3,
  //   price: 200,
  //   image:"https://m.media-amazon.com/images/I/61hYn+cR40L._AC_SY200_.jpg",
  // },
  // {
  //   id: 5,
  //   title:"Mosquito Net",
  //   description:"Hexagonal Designer Wooden Shelves for Home Decor Items",
  //   rating:4,
  //   price: 400,
  //   image:"https://m.media-amazon.com/images/I/516yyR3LjgS._SX425_.jpg",
  // },
  // {
  //   id: 6,
  //   title:"SanDisk Cruzer Blade 32GB USB Flash Drive",
  //   description:"Ultra-compact and portable USB flash drive Share your photos, videos, songs and other files between computers with ease",
  //   rating:4,
  //   price: 400,
  //   image:"https://m.media-amazon.com/images/I/61DjwgS4cbL._AC_SY200_.jpg",
  // }
  // ];


  return (
    <>
      <div className="home">
        <div className="home-container">
          <img className="home-image" src={Banner} alt="banner" />
          <div className="product-card-container">
            {/* <HomeCard products={products}/> */}
            <HomeCard
              id={1}
              title="MOKOBARA Luggage Polycarbonate Hardsided Suitcase Trolley (Cabin Pro, Crypto)"
              description="Unbreakable & Lightweight Made of German Makrolon poly-carbonate shell that is flexible & strong."
              rating={5}
              price={5.5}
              image="https://m.media-amazon.com/images/I/715wkAE0FQL._AC_SY135_.jpg"
            />
            <HomeCard
              id={2}
              title="Wall Shelf"
              description="Acco & deco Hexagon Wall Shelf for Living Room Stylish | Hexagonal Designer Wooden Shelves for Home Decor Items| Display Rack for Bedroom, Kitchen, Office and More (Set of 6| Color-Orange& Brown)"
              rating={3}
              price={2}
              image="https://m.media-amazon.com/images/I/516yyR3LjgS._SX425_.jpg"
            />
          </div>
          <div className="home-card-container">
            <HomeCard
              id={3}
              title="Wall Shelf"
              description="Acco & deco Hexagon Wall Shelf for Living Room Stylish | Hexagonal Designer Wooden Shelves for Home Decor Items| Display Rack for Bedroom, Kitchen, Office and More (Set of 6| Color-Orange& Brown)"
              rating={3}
              price={2}
              image="https://m.media-amazon.com/images/I/719pZmdrtqL._AC_SY200_.jpg"
            />
            <HomeCard
              id={4}
              title="Extension Board"
              description="Goldmedal Curve Plus 205101 Plastic 240 i-Strip LED Spike Guard Adaptors (White and Red)"
              rating={3}
              price={2}
              image="https://m.media-amazon.com/images/I/61hYn+cR40L._AC_SY200_.jpg"
            />
            <HomeCard
              id={5}
              title="Wall Shelf"
              description="Acco & deco Hexagon Wall Shelf for Living Room Stylish | Hexagonal Designer Wooden Shelves for Home Decor Items| Display Rack for Bedroom, Kitchen, Office and More (Set of 6| Color-Orange& Brown)"
              rating={3}
              price={2}
              image="https://m.media-amazon.com/images/I/516yyR3LjgS._SX425_.jpg"
            />
          </div>
          <div className="home-card-container">
            <HomeCard
              id={6}
              title="SanDisk Cruzer Blade 32GB USB Flash Drive"
              description="Ultra-compact and portable USB flash drive
              Share your photos, videos, songs and other files between computers with ease"
              rating={4}
              price={4}
              image="https://m.media-amazon.com/images/I/61DjwgS4cbL._AC_SY200_.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
