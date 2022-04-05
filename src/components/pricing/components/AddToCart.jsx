import React, { useEffect, useState } from "react";

const moment = require("moment");

function AddToCart(props) {
  const [quantity, setQuantity] = useState(0);

  const [basket, setBasket] = useState([]);

  useEffect(() => {
    return () => {
      localStorage.setItem("basket", basket);
    };
  }, []);

  return (
    <div className="row">
      <div className="col-10">
        <div className="input-group">
          <span
            className="input-group-btn d-flex justify-content-center align-items-center p-1"
            role="button"
            onClick={() => {
              if (quantity > 0) setQuantity(quantity - 1);
            }}
          >
            <i class="fa-solid fa-circle-minus fa-lg"></i>
          </span>
          <input
            type="text"
            id="quantity"
            name="quantity"
            className="form-control text-center input-number w-25 mx-2 border-1"
            value={quantity}
          />
          <span
            className="input-group-btn d-flex justify-content-center align-items-center p-1"
            role="button"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            <i class="fa-solid fa-circle-plus fa-lg"></i>
          </span>
        </div>
      </div>
      <span
        className="col-2 d-flex justify-content-center align-items-center"
        role="button"
        onClick={() => {
          setBasket((prevState) =>
            prevState.concat({
              customerID: JSON.parse(localStorage.getItem("customerID")),
              serviceID: props.service._id,
              quantity: quantity,
              datetimeOfOrder: moment().format(),
            })
          );

          console.log(basket);
        }}
      >
        <i class="fa-solid fa-basket-shopping fa-lg"></i>
      </span>
    </div>
  );
}

export default AddToCart;
