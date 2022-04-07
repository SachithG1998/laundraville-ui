import React from "react";

function BasketList() {
  return (
    <div
      class="offcanvas offcanvas-end glassy light vh-100"
      tabindex="-1"
      id="basketList"
      aria-labelledby="basketListLabel"
    >
      <div class="offcanvas-header">
        <h5 id="basketListLabel">Your BasketList</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">...</div>
    </div>
  );
}

export default BasketList;
