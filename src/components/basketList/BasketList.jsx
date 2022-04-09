import React, { useEffect, useState } from "react";

import BasketListItem from "./components/BasketListItem";

import formatCurrency from "../../helpers/formatCurrency";
import populateBasketItems from "../../helpers/populateBasketItems";
import { toast } from "react-toastify";

const axios = require("axios").default;

const api = axios.create({
  baseURL: `${process.env.REACT_APP_LAUNDRAVILLE_UI_API_URL}/api`,
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

  const placeOrder = async () => {
    if (basketItems) {
      if (JSON.parse(localStorage.getItem("loggedIn"))) {
        await api
          .post(
            `/order/placeOrder/${JSON.parse(
              localStorage.getItem("customerID")
            )}`
          )
          .then((res) => {
            const { status, data } = res;

            if (status === 200) {
              if (data.statusMessage === "ERROR") {
                toast.error(data.message, {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              } else if (data.statusMessage === "ORDER_PLACED_SUCCESSFULLY") {
                toast.success(data.message, {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });

                clearBasket();
              } else if (data.statusMessage === "UNABLE_TO_FETCH_BASKET") {
                toast.warning(data.message, {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              } else if (
                data.statusMessage === "UNABLE_TO_FETCH_BASKET_ITEMS"
              ) {
                toast.warning(data.message, {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }
            }
          });
      }
    }
  };

  const clearBasket = async () => {
    if (JSON.parse(localStorage.getItem("loggedIn"))) {
      await api
        .get(`/basket/delete/${JSON.parse(localStorage.getItem("basketID"))}`)
        .then((res) => {
          const { status, data } = res;

          if (status === 200) {
            if (data.statusMessage === "SUCCESSFULLY_DELETED_BASKET") {
              localStorage.setItem("basketID", undefined);

              setTimeout(() => {
                window.location.reload();
              }, 2000);
            }
          }
        });
    }
  };

  const startLaundryClickHandler = () => {
    placeOrder();
  };

  useEffect(() => {
    async function updateBasketCount() {
      await props.setBasketItemCount(basketItems.length);
    }

    updateBasketCount();
  }, [props, basketItems]);

  useEffect(() => {
    async function getData() {
      await populateBasketItems(setBasketItems);
    }

    getData();
  }, []);

  return (
    <div
      className="offcanvas offcanvas-end glassy light vh-100"
      tabIndex="-1"
      id="basketList"
      aria-labelledby="basketListLabel"
    >
      <div className="offcanvas-header">
        <h5 id="basketListLabel">Your Basket</h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        {basketItems.map((basketItem) => (
          <div key={basketItem._id}>
            <BasketListItem
              basketID={basketItem.basketID}
              serviceID={basketItem.serviceID}
              serviceName={basketItem.service.serviceName}
              image={basketItem.service.image}
              unit={basketItem.service.unit}
              unitPrice={basketItem.unitPrice}
              quantity={basketItem.quantity}
              setBasketItems={setBasketItems}
            />
          </div>
        ))}
        {basketItems.length !== 0 ? (
          <>
            <div className="card glassy dark text-white rounded-corners mb-3">
              <div className="row p-3 g-0">
                <p className="card-text">
                  <span className="fw-bolder">Total: </span>
                  {formatCurrency(getTotalOfBasketItems())}
                </p>
              </div>
            </div>
            <div className="row px-5">
              <button
                className="btn btn-warning"
                onClick={startLaundryClickHandler}
              >
                Start Laundry
              </button>
            </div>
          </>
        ) : (
          <></>
        )}

        <div className="row px-5">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#pricingModal"
          >
            Add Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketList;
