import React from "react";
import formatCurrency from "../../../helpers/formatCurrency";

import axios from "axios";
import populateBasketItems from "../../../helpers/populateBasketItems";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_LAUNDRAVILLE_UI_API_URL}/api`,
});

function BasketListItem(props) {
  return (
    <div className="card glassy light rounded-corners mb-3">
      <div className="row p-0 g-0">
        <div className="col-4 d-flex align-items-center">
          <img
            src={`${process.env.REACT_APP_LAUNDRAVILLE_UI_API_URL}/static/images/${props.image}`}
            className="img-fluid rounded-start"
            alt={props.serviceName}
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h6 className="card-title">{props.serviceName}</h6>
            <p className="card-text text-muted" style={{ fontSize: "0.8rem" }}>
              {formatCurrency(props.unitPrice)}/{props.unit}
            </p>
            <p className="car-text" style={{ fontSize: "0.8rem" }}>
              <span className="fw-bolder">Qty: </span>
              {props.quantity}
            </p>
            <div className="row p-0">
              <p className="card-text col-10" style={{ fontSize: "0.9rem" }}>
                <span className="fw-bolder">Subtotal: </span>
                {formatCurrency(props.unitPrice * props.quantity)}
              </p>
              <i
                class="fa-regular fa-trash-can col-1"
                role="button"
                onClick={async () => {
                  if (JSON.parse(localStorage.getItem("loggedIn"))) {
                    await api
                      .get(
                        `/basket/delete/service/${props.basketID}/${props.serviceID}`
                      )
                      .then((res) => {
                        const { status, data } = res;

                        if (status === 200) {
                          if (
                            data.status === "SUCCESSFULLY_DELETED_BASKET_ITEM"
                          ) {
                            alert("came in here");
                            toast.success(data.message, {
                              position: "top-right",
                              autoClose: 500,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                            });

                            populateBasketItems(props.setBasketItems);
                          }
                        } else if (status === 304) {
                          populateBasketItems(props.setBasketItems);
                        }
                      });
                  }
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketListItem;
