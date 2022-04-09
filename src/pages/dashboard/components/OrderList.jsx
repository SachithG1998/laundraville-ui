import moment from "moment";
import React from "react";
import formatCurrency from "../../../helpers/formatCurrency";

function OrderList(props) {
  return (
    <div className="container px-1 px-md-4 mx-auto mt-0 mb-auto">
      <div id="orderListCard" className="glassy light rounded-corners">
        <div className="row d-flex justify-content-between px-3 top">
          <div className="d-flex">
            <h5>
              ORDER
              <span className="text-primary font-weight-bold">
                #{props.order._id}
              </span>
            </h5>
          </div>
          <div className="d-flex flex-column text-sm-right">
            <p className="mb-0">
              <span className="fw-bold">Order Date </span>
              <span>
                {moment(props.order.datetimeOfOrder).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )}
              </span>
            </p>
            <p>
              <span className="fw-bold">Order Total </span>
              <span className="font-weight-bold">
                {formatCurrency(props.order.orderTotal)}
              </span>
            </p>
          </div>
        </div>
        {/* Add className 'active' to progress */}
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <ul id="progressbar" className="text-center">
              <li className="active step0">
                <div className="my-3">
                  <i className="fa-solid fa-basket-shopping fa-2xl"></i>
                </div>
                <div className="my-3">Order Placed</div>
              </li>
              <li className="step0">
                <div className="my-3">
                  <i className="fa-solid fa-clipboard-check fa-2xl"></i>
                </div>
                <div className="my-3">Order Accepted</div>
              </li>
              <li className="step0">
                <div className="my-3">
                  <i className="fa-solid fa-jug-detergent fa-2xl"></i>
                </div>
                <div className="my-3">Order in Laundry</div>
              </li>
              <li className="step0">
                <div className="my-3">
                  <i className="fa-solid fa-shirt fa-2xl"></i>
                </div>
                <div className="my-3">Ready for pickup</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderList;
