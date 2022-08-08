import "./CheckOutCard.css";

const CheckOutCard = (props) => {
  return (
    <div id={props.product.id} className="grid-container">
        <div class="item1">
          <h5 className="product-title">{props?.product?.name}</h5>
          <p className="product-description">{props?.product?.description}</p>
        </div>
        <div class="item2">
          <div className="image-box">
            <img
              className="card-image"
              src={props?.product?.image}
              alt={props?.product?.name}
            />
          </div>
        </div>
        <div class="item3">
          <p style={{color:"#007600"}}>In stock</p>
          <p style={{color:"#565959"}}>Eligible for FREE Shipping</p>
        </div>
        <div class="item4">
          {" "}
          <div className="product-price">
          ₹ {props?.product?.price}
          </div>
        </div>
        <div class="item5">
          <p className="">
            Qty | Delete |Save for later
            <input
              as="select"
              value={props.product.qty}
              onChange={(e) =>
                props.dispatch({
                  type: "CHANGE_CART_QTY",
                  payload: { id: props.product.id, qty: e.target.value },
                })
              }
            />
          </p>
          <p
            fontSize="20px"
            style={{ cursor: "pointer" }}
            onClick={() =>
              props.dispatch({
                type: "REMOVE_FROM_CART",
                payload: props.product,
              })
            }
          >
            Delete
          </p>
          <p className="">see more like this</p>
        </div>
    </div>
  );
};

export default CheckOutCard;
