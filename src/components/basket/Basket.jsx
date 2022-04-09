import React, { useState } from "react";
import BasketList from "../basketList/BasketList";

import "./Basket.css";

function Basket() {
  const [basketItemCount, setBasketItemCount] = useState(0);

  // Formats the basketItemCount to be readable
  const formatBasketItemCount = () => {
    let formattedCount;

    basketItemCount >= 100
      ? (formattedCount = "99+")
      : (formattedCount = basketItemCount);

    return formattedCount;
  };

  return (
    <div className="p-4">
      <i
        className="position-relative fa-solid fa-basket-shopping fa-2xl"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#basketList"
        aria-controls="offcanvasRight"
      >
        {basketItemCount > 0 ? (
          <span
            id="basket-badge"
            className="position-absolute translate-middle badge rounded-pill bg-danger"
          >
            {formatBasketItemCount()}
          </span>
        ) : (
          <></>
        )}
      </i>

      <BasketList setBasketItemCount={setBasketItemCount} />
    </div>
  );
}

export default Basket;
