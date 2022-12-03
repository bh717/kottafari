const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: "https://kottfabriken.wargmedia.nu",
  consumerKey: "ck_9fd6f6a42124512fcd11cd07b7eef39206477be2",
  consumerSecret: "cs_f264bbadb0341826550861d998227b5c0ce758af",
  version: "wc/v3",
  axiosConfig: {
    headers: {},
  },
});

export default api; 