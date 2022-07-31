// import { ShoppingBasketTwoTone } from '@material-ui/icons';
import React from "react";
import "../Amazon.css";

const ProductCard = ({ id, title, image, price, rating, description }) => {
  // console.log(useStateValue);
  // const [{basket} , dispatch] = useStateValue();
  // console.log("Basket", basket);
  const addToBasket = () => {
    console.log("addToBasket")
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
        <p className="product-title">{title}</p>
        <p className="product-info">{description}</p>
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
