import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import data from "../data/data.json";
import Rating from "./Rating.js";
import { CartState } from "../functionality/Context.js";
import { Link } from "react-router-dom";

const ProductDetails = ({ match }) => {
  const {
    state: { cart},
    dispatch,
  } = CartState();

  const { productID } = useParams();
  const [searchData, setSearchData] = useState(data[0]);
  useEffect(() => {
    setSearchData(data.filter((product) => product.id === productID));
  }, [productID]);
  // console.log("productID", productID, searchData);
  
  return (
    <div className="product-info">
      <div className="item-image-parent">
        <div className="item-list-vertical">
          <div className="thumb-box">
            <img src="https://i.ibb.co/VJf6fXm/thumb1.jpg" alt="thumbnail" />
          </div>
          <div className="thumb-box">
            <img src="https://i.ibb.co/Jt5zc58/thumb2.jpg" alt="thumbnail" />
          </div>
          <div className="thumb-box">
            <img src="https://i.ibb.co/Yf9LMpy/thumb3.jpg" alt="thumbnail" />
          </div>
          <div className="thumb-box">
            <img src="https://i.ibb.co/60hPGy2/thumb4.jpg" alt="thumbnail" />
          </div>
        </div>
        <div className="item-image-main">
          <img src={searchData[0]?.image} alt={searchData[0]?.name} />
        </div>
      </div>

      <div className="item-info-parent">
        <div className="main-info">
          <h4>{searchData[0]?.name}</h4>
          <div className="star-rating">
            <span>
              <Rating rating={searchData[0]?.ratings} />
            </span>
          </div>
          <div className="checkout-price">
            <small>₹</small>
            {searchData[0]?.price}.<small>00</small>
          </div>
        </div>
        <div className="select-items">
          <div className="change-color">
            <label>
              <b>Colour:</b> Black
            </label>
            <div className="product-color">
              {" "}
              <div className="thumb-box">
                <img
                  src="https://i.ibb.co/QjkJJk3/select1.jpg"
                  alt="thumbnail"
                />
              </div>
              <div className="thumb-box">
                <img
                  src="https://i.ibb.co/C297yD0/select2.jpg"
                  alt="thumbnail"
                />
              </div>
            </div>
          </div>

          <div className="change-size">
            <div
              style={{
                borderTop: "2px solid #fff ",
                marginLeft: 20,
                marginRight: 20,
              }}
            ></div>
            <label>
              <b>Size:</b>
            </label>
            <select>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>2XL</option>
            </select>
          </div>

          <div className="description">
            <ul>
              <li>{searchData[0]?.description}</li>
              <li>Care Instructions: Machine Wash</li>
              <li>Fit Type: classNameic Fit</li>
              <li>Color name: Black-White</li>
              <li>Material: Cotton</li>
              <li>Pattern: Solid</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="item-action-parent">
        <div className="checkout-box">
          <div className="checkout-price">
            <small>₹</small>
            {searchData[0]?.price}.<small>00</small>
          </div>
          <div className="deliver-message">
            FREE delivery{" "}
            <strong style={{ color: "black" }}>Thursday, 18 August</strong>.
            Details
          </div>
          <div style={{ color: "#007185", fontSize: 12 }}>
            Delivery to FoxArchive
          </div>
          <div style={{ color: "#007600", fontSize: 18 }}>
            Only 1 left in stock.
          </div>
          <div className="product-seller">
            Sold by Viraj Ent and Fulfilled by Amazon.
          </div>
          {cart.some((p) => p.id === searchData[0]?.id) ? (
            <>
              <button className="cart-button">Added</button>{" "}
              <button className="buy-button">
                <Link
                  to="/CheckOutPage"
                  style={{ color: "#111", fontSize: 14 }}
                >
                  Buy Now
                </Link>
              </button>
            </>
          ) : (
            <>
              {" "}
              <button
                className="cart-button"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: searchData[0],
                  });
                }}
              >
                Add to Cart
              </button>
              <button
                className="buy-button"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: searchData[0],
                  });
                }}
              >
                <Link
                  to="/CheckOutPage"
                  style={{ color: "#111", fontSize: 14 }}
                >
                  Buy Now
                </Link>
              </button>
            </>
          )}

          <div
            style={{
              color: "black",
              fontSize: 12,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input type="checkbox"></input>Add gift options
          </div>
          <button
            className="wish-button"
            onClick={() => {
              dispatch({
                type: "ADD_TO_WISHLIST",
                payload: searchData[0],
              });
              alert("Item is Added to Your Wishlist");
            }}
          >
            Add to Wish list
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
