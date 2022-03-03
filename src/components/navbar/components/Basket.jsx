import React, { Component } from "react";

import "./Basket.css";

class Basket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basketItemCount: 3,
    };
  }

  // Formats the basketItemCount to be readable
  formatBasketItemCount() {
    let formattedCount;

    this.state.basketItemCount >= 100
      ? (formattedCount = "99+")
      : (formattedCount = this.state.basketItemCount);

    return formattedCount;
  }

  render() {
    return (
      <div className="navbar-right">
        <div className="p-4">
          <i class="position-relative fa-solid fa-basket-shopping fa-2xl">
            {this.state.basketItemCount > 0 ? (
              <span
                id="basket-badge"
                class="position-absolute translate-middle badge rounded-pill bg-primary"
              >
                {this.formatBasketItemCount()}
                <span class="visually-hidden">unread messages</span>
              </span>
            ) : (
              <></>
            )}
          </i>
        </div>
      </div>
    );
  }
}

export default Basket;
