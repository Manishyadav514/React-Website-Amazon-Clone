import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import data from "../data/data.json";

const ProductDetails = ({ match }) => {
  const {
    params: { productID },
  } = match;

  console.log(productID, data);
  const [searchData, setSearchData] = useState();
  console.log(searchData);
  useEffect(() => {
    setSearchData(data.find(productID));
  }, [productID]);

  return (
    <div>
      <section id="product-info">
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
            <img src="https://i.ibb.co/xYpFY0T/item1.jpg" alt="default" />
          </div>
        </div>

        <div className="item-info-parent">
          <div className="main-info">
            <h4>EYEBOGLER Regular Fit Men's Cotton T-Shirt</h4>
            <div className="star-rating">
              <span>★★★★</span>★
            </div>
            <p>
              Price: <span id="price">₹ 449.00</span>
            </p>
          </div>
          <div className="select-items">
            <div className="change-color">
              <label>
                <b>Colour:</b> Black
              </label>
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
                <li>Care Instructions: Machine Wash</li>
                <li>Fit Type: classNameic Fit</li>
                <li>Color name: Black-White</li>
                <li>Material: Cotton</li>
                <li>Pattern: Solid</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
