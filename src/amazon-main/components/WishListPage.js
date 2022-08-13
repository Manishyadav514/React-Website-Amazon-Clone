import React from "react";
import { CartState } from "../functionality/Context.js";
import "./WishListPage.css";
import CheckOutCard from "./CheckOutCard.js";
import {Link} from "react-router-dom";

const WishListPage = () => {
  const {
    state: { wishlist },
    dispatch,
  } = CartState();
  console.log(wishlist.length);
  return (
    <div>
      {wishlist.length >=  1 ? <div>
        {wishlist.map((product) => (
          <CheckOutCard dispatch={dispatch} product={product}/>
        ))}
      </div> : <Link to="/"><div className="wishlist-button-text ">Wishlist is Empty, Add some Products!</div></Link>
      }

      
    </div>
  );
};

export default WishListPage;
