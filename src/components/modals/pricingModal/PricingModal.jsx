import React from "react";
import Pricing from "../../pricing/Pricing";

function PricingModal() {
  const onPricingModalClose = () => {
    window.location.reload();
  };

  return (
    <div
      className="modal fade"
      id="pricingModal"
      tabIndex="-1"
      aria-labelledby="pricingModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content rounded-corners">
          <div className="modal-header">
            <h5 className="modal-title" id="pricingModalLabel">
              Add Services to Basket
            </h5>
            <button
              type="button"
              onClick={onPricingModalClose}
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <Pricing />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={onPricingModalClose}
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingModal;
