import React from "react";
import formatCurrency from "../../../helpers/formatCurrency";

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
            <p className="card-text" style={{ fontSize: "0.9rem" }}>
              <span className="fw-bolder">Subtotal: </span>
              {formatCurrency(props.unitPrice * props.quantity)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketListItem;
