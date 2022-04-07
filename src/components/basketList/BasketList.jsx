import React, { useEffect, useState } from "react";

import BasketListItem from "./components/BasketListItem";

import axios from "axios";
import formatCurrency from "../../helpers/formatCurrency";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_LAUNDRAVILLE_UI_API_URL}/api/basket`,
});

function BasketList(props) {
  const [basketItems, setBasketItems] = useState([]);

  const getTotalOfBasketItems = () => {
    let total = 0;
    basketItems.forEach((basketItem) => {
      total = total + basketItem.unitPrice * basketItem.quantity;
    });

    return total;
  };

  useEffect(() => {
    props.setBasketItemCount(basketItems.length);
  }, [props, basketItems]);

  useEffect(() => {
    async function fetchData() {
      if (JSON.parse(localStorage.getItem("loggedIn"))) {
        await api
          .get(`/all/${JSON.parse(localStorage.getItem("basketID"))}`)
          .then((res) => {
            const { status, data } = res;

            if (status === 200) {
              if (data.statusMessage === "RETURNED_BASKET_ITEMS") {
                setBasketItems(data.basketItems);
              }
            }
          });
      }
    }

    fetchData();
  }, []);

  return (
    <div
      class="offcanvas offcanvas-end glassy light vh-100"
      tabindex="-1"
      id="basketList"
      aria-labelledby="basketListLabel"
    >
      <div class="offcanvas-header">
        <h5 id="basketListLabel">Your Basket</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        {basketItems.map((basketItem) => (
          <BasketListItem
            serviceName={basketItem.service.serviceName}
            image={basketItem.service.image}
            unit={basketItem.service.unit}
            unitPrice={basketItem.unitPrice}
            quantity={basketItem.quantity}
          />
        ))}

        <div className="card glassy dark text-white rounded-corners mb-3">
          <div className="row p-3 g-0">
            <p className="card-text">
              <span className="fw-bolder">Total: </span>
              {formatCurrency(getTotalOfBasketItems())}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketList;
