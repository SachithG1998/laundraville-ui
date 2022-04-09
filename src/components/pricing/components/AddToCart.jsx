import React, { useState } from "react";
import { toast } from "react-toastify";

function AddToCart(props) {
  const [quantity, setQuantity] = useState(0);

  const addToBasket = (data) => {
    props.api
      .post("/basket/addToBasket", {
        basketID: data.basketID,
        serviceID: props.service._id,
        unitPrice: props.service.unitPrice,
        quantity: quantity,
      })
      .then((res) => {
        const { status, data } = res;

        if (status === 200) {
          if (data.statusMessage === "BASKET_ITEM_ADDED_SUCCESSFULLY") {
            toast.success(data.message, {
              position: "top-right",
              autoClose: 500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else if (
            data.statusMessage === "BASKET_ITEM_UPDATED_SUCCESSFULLY"
          ) {
            toast.success(data.message, {
              position: "top-right",
              autoClose: 500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else if (data.statusMessage === "ERROR") {
            toast.error(data.message, {
              position: "top-right",
              autoClose: 500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        }
      });

    setQuantity(0);
  };

  const onClickAddToCart = async () => {
    if (quantity !== 0) {
      if (JSON.parse(localStorage.getItem("loggedIn"))) {
        await props.api
          .get(`/basket/${JSON.parse(localStorage.getItem("customerID"))}`)
          .then((res) => {
            const { status, data } = res;

            if (status === 200) {
              if (JSON.parse(!data.basketExists)) {
                props.createBasket(
                  JSON.parse(localStorage.getItem("customerID")),
                  addToBasket
                );
              } else {
                localStorage.setItem("basketID", JSON.stringify(data.basketID));
                addToBasket(data);
              }
            }
          });
      } else {
        toast.warning("Please select a quantity other than zero", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

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
            <i className="fa-solid fa-circle-minus fa-lg"></i>
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
            <i className="fa-solid fa-circle-plus fa-lg"></i>
          </span>
        </div>
      </div>
      <span
        className="col-2 d-flex justify-content-center align-items-center"
        role="button"
        onClick={onClickAddToCart}
      >
        <i className="fa-solid fa-basket-shopping fa-lg"></i>
      </span>
    </div>
  );
}

export default AddToCart;
