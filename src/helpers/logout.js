const logout = () => {
  localStorage.setItem("loggedIn", false);
  localStorage.setItem("customerID", undefined);
  localStorage.setItem("basketID", undefined);

  window.location.assign("/");
};

module.exports = logout;
