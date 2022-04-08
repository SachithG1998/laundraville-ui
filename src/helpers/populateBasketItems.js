import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_LAUNDRAVILLE_UI_API_URL}/api`,
});

const populateBasketItems = async (setBasketItems) => {
  if (JSON.parse(localStorage.getItem("loggedIn"))) {
    await api
      .get(`/basket/all/${JSON.parse(localStorage.getItem("basketID"))}`)
      .then((res) => {
        const { status, data } = res;

        if (status === 200) {
          if (data.statusMessage === "RETURNED_BASKET_ITEMS") {
            setBasketItems(data.basketItems);
          }
        }
      });
  }
};

export default populateBasketItems;
