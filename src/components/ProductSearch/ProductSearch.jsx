import React, { useEffect } from "react";
import Product from "../../reusable/Product/Product";
import ProductSlider from "../ProductSlider/ProductSlider";
import "./ProductSearch.css";
// import data from "./ListData.json"
import api from "../api/woocommerce";

import { useState } from "react";

function ProductSearch({ search, data }) {
  const [findproducts, setFindProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(12);
  const [findKey, setFindKey] = useState("496");

  useEffect(() => {
    // async function fethdata() {
    // 	await showProducts();
    // }
    showProducts();
    console.log("productSearch:", findproducts);
    // alert(findKey);
  }, [findKey]);

  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (search === "") {
      return el.title;
    }
    //return the item which contains the user input
    else {
      return el.title.toLowerCase().includes(search);
    }
  });
  // let fetchProducts = () =>
  let showProducts = () => {
    api
      .get("products", {
        page: page,
        per_page: count,
        category: findKey,
        status: "publish",
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("directly", response.data);
          data = response.data;
          setFindProducts(response.data);
          response.data.length === 0
            ? setCount(1)
            : setCount(response.data.length);

          return response.data;
        }
      })
      .catch((error) => {});
  };

  return (
    <>
      <div
        className={`${
          search === "" ? "flex justify-center items-center" : ""
        } w-[30%] lg:w-[40%] py-8 lg:py-6 px-12 lg:px-8 border-r border-black/10 md:hidden max-h-[700px] overflow-auto`}
      >
        {search === "" ? (
          <div>
            <h1 className="text-center text-base font-normal my-12 lg:my-8 text-black">
              POPULÄRA SÖKNINGAR
            </h1>
            <p className="text-center text-3xl lg:text-2xl my-12 lg:my-8 text-black cursor-pointer">
              Vinäger smaksatt
            </p>
            <p className="text-center text-3xl lg:text-2xl my-12 lg:my-8 text-black cursor-pointer">
              Entrecote
            </p>
            <p className="text-center text-3xl lg:text-2xl my-12 lg:my-8 text-black cursor-pointer">
              Unika såser
            </p>
            <p className="text-center text-3xl lg:text-2xl my-12 lg:my-8 text-black cursor-pointer">
              Grillar med kol
            </p>
          </div>
        ) : (
          <>
            <h1 className="text-base font-normal my-12 lg:my-8 text-black">
              SÖKRESULTAT
            </h1>
            {filteredData.length > 0 ? (
              <>
                {filteredData.map((item) => (
                  <p
                    onClick={() => {
                      setFindKey(item.object_id);
                    }}
                    key={item.id}
                    className="text-3xl lg:text-2xl my-12 lg:my-8 text-black cursor-pointer"
                  >
                    {item.title}
                  </p>
                ))}
              </>
            ) : (
              <p className="text-sm my-12 lg:my-8 text-black">Inga resultat</p>
            )}
          </>
        )}
      </div>
      <div
        className={`${
          search === "" ? "flex justify-center items-center" : ""
        } w-[70%] lg:w-[60%] py-8 lg:py-6 px-12 lg:px-8 md:hidden max-h-[700px] overflow-auto`}
      >
        {search === "" ? (
          <div className="grid grid-cols-3 gap-8">
            {/* <div className="r-item">
							<img src={require("../../assets/images/ads/ads1.png")} />
							<p className="text-4xl text-white 2xl:text-3xl xl:text-2xl lg:text-xl">Senaste nyheterna</p>
						</div>
						<div className="r-item">
							<img src={require("../../assets/images/ads/ads2.png")} />
							<p className="text-4xl text-white 2xl:text-3xl xl:text-2xl lg:text-xl">Allt från Mule</p>
						</div>
						<div className="r-item">
							<img src={require("../../assets/images/ads/ads3.png")} />
							<p className="text-4xl text-white 2xl:text-3xl xl:text-2xl lg:text-xl">Besök vår butik</p>
						</div> */}
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center my-12 lg:my-8">
              <h1 className="text-base font-normal text-black">PRODUKTER</h1>
              {findproducts.length > 4 && (
                <p className="text-sm font-normal text-black/40 cursor-pointer mx-9">
                  Fler resultat
                </p>
              )}
            </div>
            {findproducts.length === 0 ? (
              <p className="text-sm text-black">Inga resultat</p>
            ) : findproducts.length > 2 ? (
              <ProductSlider products={findproducts} />
            ) : (
              <div className="grid grid-cols-2 mb-12 lg:mb-8 gap-16 xl:grid-cols-3 xl:gap-8 lg:grid-cols-2 lg:gap-4">
                {findproducts.map((o) => (
                  <Product
                    key={o?.id}
                    id={o?.id}
                    title={o?.name}
                    price={o?.price}
                    flag={o?.acf?.land}
                    description={o?.description}
                    weight={o?.acf?.vikt}
                    img={o?.images[0]?.src}
                    subimg={o?.images[1]?.src}
                    url={o?.slug}
                    type={o?.type}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <div className="hidden md:block">Mobile Product Search</div>
    </>
  );
}

export default ProductSearch;
