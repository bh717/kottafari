/* eslint-disable no-undef */
const poster = async (url, data, method) => {
  const token = "asdfewref#4bfsfe(0";

  return fetch("https://kottfabriken.wargmedia.nu" + url, {
    consumerKey: "ck_9fd6f6a42124512fcd11cd07b7eef39206477be2",
    consumerSecret: "cs_f264bbadb0341826550861d998227b5c0ce758af",
    headers: {
    //   Authorization: `Bearer ${token}`,
    //   Authorization: "JWT fefege...",
      "Content-Type": "application/json",
      
    },
    method: method,
    body: JSON.stringify(data),
  });
};

export default poster;
