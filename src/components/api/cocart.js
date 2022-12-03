const CoCartAPI = require("@cocart/cocart-rest-api").default;

const key = sessionStorage.getItem("myKey");

const CoCart = new CoCartAPI({
  url: "https://kottfabriken.wargmedia.nu",
  consumerKey: "ck_9fd6f6a42124512fcd11cd07b7eef39206477be2",
  consumerSecret: "cs_f264bbadb0341826550861d998227b5c0ce758af",
});

export default CoCart;
