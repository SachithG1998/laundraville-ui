const formatCurrency = (value) => {
  var currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "LKR",
  });

  return currencyFormatter.format(value);
};

module.exports = formatCurrency;
