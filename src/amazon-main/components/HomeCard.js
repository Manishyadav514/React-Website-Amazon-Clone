import React from "react";
import "./HomeCard.css";
import { Link } from "react-router-dom";

export const HomeCardFour = (props) => {
  return (
    <>
      <div className="homeCard-box">
        <div className="homeCard-title">
          <p>{props?.title}</p>
        </div>
        <div className="homeCard-grid">
          <div className="image1">
            <Link to="/ProductPage">
              <img src={props?.image1} alt="Cart"></img>
            </Link>
            <p>{props?.text1}</p>
          </div>
          <div className="image2">
            <Link to="/ProductPage">
              <img src={props?.image2} alt="Cart"></img>
            </Link>
            <p>{props?.text2}</p>
          </div>
          <div className="image3">
            <Link to="/ProductPage">
              <img src={props?.image3} alt="Cart"></img>
            </Link>
            <p>{props?.text3}</p>
          </div>
          <div className="image4">
            <Link to="/ProductPage">
              <img src={props?.image4} alt="Cart"></img>
            </Link>
            <p>{props?.text4}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const HomeCardOne = (props) => {
  return (
    <>
      <div className="homeCard-box">
        <div className="homeCard-title">
          <p>{props?.title}</p>
        </div>
        <div className="homeCard-one">
          <Link to="/ProductPage">
            <img src={props?.image} alt="Cart"></img>
          </Link>
        </div>
      </div>
    </>
  );
};
