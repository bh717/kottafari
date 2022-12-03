/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import Flag from "react-flagpack";
import { useEffect, useState } from "react";
import CoCart from "../api/cocart";
import api from "../api/woocommerce";
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";

function CheckItem({
    id,
    itemKey,
    title,
    price,
    img,
    quantity,
    totalprice,
    setTotalPrice,
}) {
    const [itemcount, setItemCount] = useState(quantity);
    const [products, setProducts] = useState([]);
    const [flag, setFlag] = useState("SE");
    const [trademark, setTradeMark] = useState("Dfe");
    const [weight, setWeight] = useState("50G");
    const [addMessge, setAddMessage] = useState("");

    useEffect(() => {
        async function fethdata() {
            await fetchProducts();
        }

        fethdata();

        console.log("flag", flag);
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
                    setProducts(response?.data);
                    setFlag(_flag => (response?.data[0]?.acf?.land));
                    setTradeMark(_trademark => (response?.data[0]?.acf?.varumarke));
                    setWeight(_weight => (response?.data[0]?.acf?.vikt));
                    return response.data;
                }
            })
            .catch((error) => { });

        console.log("data", data);
    };

    function createNotification(type) {
        switch (type) {
            case "success":
                return NotificationManager.success("Add Cart");
                break;
            case "warning":
                return NotificationManager.warning(
                    "Warning message",
                    "Close after 3000ms",
                    3000
                );
                break;
            case "error":
                return NotificationManager.error(addMessge, "Failed", 5000, () => { });
                break;
        }
    }

    function AddCart() {
        var data = {
            quantity: itemcount + 1,
        };

        console.log(typeof itemcount);

        console.log("addcart data:", data);

        CoCart.post("cart/item/" + itemKey, data)
            .then((response) => {
                // Successful request
                console.log("Response Status:", response.status);
                console.log("Response Headers:", response.headers);
                console.log("Response Data:", response.data.items);
                let price = 0;
                for (let i = 0; i < response.data.items.length; i++) {
                    price += Number(response.data.items[i]?.totals?.subtotal);
                }

                setTotalPrice(_totalprice => (price));

                setAddMessage("Add Cart Successfully");
                createNotification("success");
                setItemCount(itemcount => (itemcount + 1));
            })
            .catch((error) => {
                // Invalid request, for 4xx and 5xx statuses
                console.log("Response Status:", error.response.status);
                console.log("Response Headers:", error.response.headers);
                console.log("Response Data:", error.response.data);
                setAddMessage(error.response.data.message);
                createNotification("error");
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
                let price = 0;
                for (let i = 0; i < response.data.items.length; i++) {
                    price += Number(response.data.items[i]?.totals?.subtotal);
                }

                setTotalPrice(_totalprice => (price));

                setAddMessage("Add Cart Successfully");
                createNotification("success");
                setItemCount(itemcount => (itemcount - 1));
            })
            .catch((error) => {
                // Invalid request, for 4xx and 5xx statuses
                console.log("Response Status:", error.response.status);
                console.log("Response Headers:", error.response.headers);
                console.log("Response Data:", error.response.data);
                setAddMessage(error.response.data.message);
                createNotification("error");
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
                <div className="flex h-[11rem] justify-between flex-col py-[0.5rem]">
                    <div className="flex items-center">
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
                        {/*Flag for product */}



                    </div>

                    <div>
                        <h2 className="text-rival text-[#B7410E] font-normal text-[16px]">{title}</h2>
                    </div>
                    {/* Title for product */}

                    <div className="">
                        <h2 className="text-rival text-[#707070] font-normal text-[14px]">{trademark}</h2>{" "}
                    </div>
                    {/*Trademark for product */}

                    <div className="">
                        <h3 className="text-rival text-[#222222] font-normal text-[12px]">{weight}</h3>
                    </div>
                    {/* Weight of product */}

                    <div className="">
                        <h3 className="text-rival text-[#222222] font-normal text-[13px]">{price.toLocaleString("sv-SE")} kr</h3>{" "}
                    </div>

                    {/* Price of product */}
                    <div>
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
        </div>
    );
}

export default CheckItem;
