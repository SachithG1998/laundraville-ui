const logout = () => {
  localStorage.setItem("loggedIn", false);
  localStorage.setItem("customerID", undefined);

  window.location.assign("/");
};

module.exports = logout;
