import React from "react";
// import CurrencyFormat from "react-currency-format";
import "../Amazon.css";

const SubTotal = () => {
  return (
    <div className="subtotal">
      {/* <CurrencyFormat
        value={24981}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs "}
        renderText={(value) => (
          <div>
            {" "}
            <p>
              SubTotal (0 items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift card
            </small>
          </div>
        )}
      /> */}
          <div>
            {" "}
            <p>
              {/* SubTotal (0 items): <strong>{value}</strong> */}
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift card
            </small>
          </div>
      <button>Proceed to CheckOut</button>
    </div>
  );
};

export default SubTotal;
