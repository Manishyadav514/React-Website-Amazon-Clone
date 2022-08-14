import React from "react";
import "./HomeCard.css";

export const HomeCard2 = () => {
  return (
    <>
      <div className="homeCard-container">
        NewCommerce
        <div className="homeCard-box">
          {/* <div className="homeCard-images">
            <img alt="img1">1</img>
            <img alt="img2">2</img>
          </div>
          <div className="homeCard-images">
            <img alt="img3">3</img>
            <img alt="img4">4</img>
          </div> */}
        </div>
      </div>
    </>
  );
};

const ProductCard = ({ id, title, image, price, rating, description }) => {
  // console.log(useStateValue);
  // const [{basket} , dispatch] = useStateValue();
  // console.log("Basket", basket);
  const addToBasket = () => {
    console.log("addToBasket");
    // dispatch({
    //   type: "ADD_TO_BASKET",
    //   item: {
    //     id: id,
    //     title: title,
    //     image: image,
    //     price: price,
    //     rating: rating
    //   },
    // });
  };

  return (
    <>
      <div className="product">
        <p className="product-titleee">{title}</p>
        <p className="home-product-info">{description}</p>
        <p className="product-price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
          {Array(5 - rating)
            .fill()
            .map((_, i) => (
              <p>✰</p>
            ))}
        </div>
        <img src={image} alt="Cart"></img>
        <button onClick={addToBasket}>Add to cart</button>
      </div>
    </>
  );
};

export default ProductCard;
