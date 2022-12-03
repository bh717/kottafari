const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const menuapi = new WooCommerceRestApi({
  url: "https://kottfabriken.wargmedia.nu",
  consumerKey: "ck_293ce4d033fd71d18d0de46d426df28ebdf871cc",
  consumerSecret: "cs_669b050b22580d477f58b48306ba9fdadb76b3d9",
  version: "wp/v2",
  axiosConfig: {
    headers: {},
  },
});

export default menuapi;
