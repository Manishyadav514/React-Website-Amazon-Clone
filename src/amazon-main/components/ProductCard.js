import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Rating from "./Rating.js";
import { CartState } from "../functionality/Context.js";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  // console.log(props);
  // console.log(props.product.image);
  // function randomDeliveryPeriod() {
  //   return Math.floor(Math.random() * 3 + 2);
  // }

  const {
    state: { cart, wishlist },
    dispatch,
  } = CartState();

  // console.log(cart);
  // const productDetails = () => {
  //   <ProductDetails product={"product"} />;
  // };

  return (
    <div>
      <div className="max-w-sm m-4 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/ProductPage/${props.product.id}`}>
          <img
            className="p-8 rounded-t-lg"
            src={props.product.image}
            alt="product"
          ></img>
        </Link>
        <div className="px-5 pb-5">
          <a href="/">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {props.product.name}
            </h5>
          </a>
          <p className="text-zinc-300">{props.product.description}</p>
          <span className="text-zinc-300">
            {props.product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>{props.product?.lateDelivery} Days</div>
            )}
          </span>
          <div className="flex justify-between items-center mt-2.5 mb-5">
            <Rating rating={props.product.ratings} />
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {props.product.ratings}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-1xl font-bold text-gray-900 dark:text-white">
              Rs {props.product.price}
            </span>

            <div className="button-box">
              {/* WishLIst */}
              {wishlist.some((p) => p.id === props.product.id) ? (
                <AiFillHeart
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: props.product,
                    });
                  }}
                  style={{ color: "red", fontSize: "1.8rem" }}
                />
              ) : (
                <AiOutlineHeart
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_WISHLIST",
                      payload: props.product,
                    });
                  }}
                  style={{ color: "black", fontSize: "1.8rem" }}
                />
              )}

              {cart.some((p) => p.id === props.product.id) ? (
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Added
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: props.product,
                    });
                  }}
                  disabled={!props.product.inStock}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {props.product.inStock ? (
                    <div>Add to Cart</div>
                  ) : (
                    <div>Out of Stock</div>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
