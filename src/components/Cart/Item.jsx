/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import Flag from "react-flagpack";
import { useEffect, useState } from "react";
import CoCart from "../api/cocart";
import api from "../api/woocommerce";

function Item({
  id,
  itemKey,
  title,
  price,
  img,
  quantity,
}) {
  const [itemcount, setItemCount] = useState(quantity);
  const [products, setProducts] = useState([]);
  const [flag, setFlag] = useState("SE");

  useEffect(() => {
    async function fethdata() {
      await fetchProducts();
    }
    fethdata();
  }, [itemcount]);

  useEffect(() => {
    if (itemcount < 0) {
      setItemCount(0);
    }
  }, [itemcount]);

  let fetchProducts = () => {
    let data;
    api
      .get("products", {
        include: id,
        status: "publish",
      })
      .then((response) => {
        if (response.status === 200) {
          console.log("directly", response.data);
          data = response.data;
          setProducts(response.data);
          setFlag(response.data[0].acf?.land);
          return response.data;
        }
      })
      .catch((error) => { });

    console.log("data", data);
  };

  function AddCart() {
    var data = {
      quantity: itemcount + 1,
    };

    CoCart.post("cart/item/" + itemKey, data)
      .then((response) => {
        // Successful request
        console.log("Response Status:", response.status);
        console.log("Response Headers:", response.headers);
        console.log("Response Data:", response.data);
        setItemCount(itemcount + 1);

      })
      .catch((error) => {
        // Invalid request, for 4xx and 5xx statuses
        console.log("Response Status:", error.response.status);
        console.log("Response Headers:", error.response.headers);
        console.log("Response Data:", error.response.data);
      })
      .finally(() => {
        // Always executed.
      });
  }

  function DeleteCart() {
    var data = {
      quantity: itemcount - 1,  
    };

    CoCart.post("cart/item/" + itemKey, data)
      .then((response) => {
        // Successful request
        console.log("Response Status:", response.status);
        console.log("Response Headers:", response.headers);
        console.log("Response Data:", response.data);
        setItemCount(itemcount - 1);

      })
      .catch((error) => {
        // Invalid request, for 4xx and 5xx statuses
        console.log("Response Status:", error.response.status);
        console.log("Response Headers:", error.response.headers);
        console.log("Response Data:", error.response.data);
      })
      .finally(() => {
        // Always executed.
      });
  }

  function deleteCartItem() {
    DeleteCart();
  }

  function addCartItem() {
    AddCart();
  }
  return (
    <div className="w-full flex items-center justify-between py-5">
      <div className="flex gap-5">
        <div className="w-[10rem] h-[11rem] bg-center bg-no-repeat bg-cover">
          <img src={img} className="w-[10rem] h-[11rem] max-w-none" />
        </div>
        <div className="">
          <div className="flex items-center gap-3">
            {flag !== null ? (
              <>
                {flag !== "GB" ? (
                  <Flag
                    code={flag}
                    size="M"
                    hasBorder={false}
                    hasBorderRadius={false}
                    className="w-6 h-4"
                  />
                ) : (
                  <Flag
                    code={"SE"}
                    size="M"
                    hasBorder={false}
                    hasBorderRadius={false}
                    className="w-6 h-4"
                  />
                )}
              </>
            ) : (
              <Flag
                code="SE"
                size="M"
                hasBorder={false}
                hasBorderRadius={false}
              />
            )}
            <h2 className="text-fake text-xs">{title}</h2>{" "}
            {/* Title for product */}
          </div>
          <h3 className="">{price.toLocaleString("sv-SE")} SEK</h3>{" "}
          {/* Price of product */}
        </div>
      </div>
      <div className="flex items-center h-full">
        <div className="flex items-center border border-[#222222] border-opacity-20">
          <button
            className="px-4 py-1 text-[#222]"
            onClick={() => deleteCartItem()}
          >
            -
          </button>
          <span className="border-x px-4 py-1 text-[#222] border-[#222222] border-opacity-20">
            {itemcount}
          </span>
          <button
            className="px-4 py-1 text-[#222]"
            onClick={() => addCartItem()}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
