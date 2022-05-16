import React from 'react'
import './main.css'
const ProductCard = (props) => {
  console.log(props.image);
  return (
    <>
        <div className="product">
            <p className="product-title">{props.title}</p>
            <p className="product-info">{props.description}</p>
            <p className="product-price">
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
            <div className="product-rating">
                {Array(props.rating)
                .fill()
                .map((_,i)=>(
                <p>⭐</p>
                ))}
                {Array(5-props.rating)
                .fill()
                .map((_,i)=>(
                <p>✰</p>
                ))}
            </div>
            <img src={props.image} alt="Cart"></img>
            <button>Add to cart</button>
        </div>
    </>

  )
}

export default ProductCard