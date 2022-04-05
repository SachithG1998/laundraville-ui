import React, { useState } from "react";

function AddToCart() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="row">
      <div className="col">
        <div className="input-group">
          <span className="input-group-btn p-3">
            <a
              onClick={() => {
                if (quantity > 0) setQuantity(quantity - 1);
              }}
            >
              <i class="fa-solid fa-circle-minus fa-xl"></i>
            </a>
          </span>
          <input
            type="text"
            id="quantity"
            name="quantity"
            className="form-control text-center input-number w-50"
            value={quantity}
            min="1"
            max="100"
          />
          <span className="input-group-btn p-3">
            <a
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              <i class="fa-solid fa-circle-plus fa-xl"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
