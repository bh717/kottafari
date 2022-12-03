import { Fragment, useState, useEffect } from "react";
import CheckItem from '../../components/Cart/checkItem';
import CoCart from '../../components/api/cocart';

function Cart() {

    const [cartItems, setCartItems] = useState([]);
    const [totalprice, setTotalPrice] = useState(0);
    const [priceCartItems, setPriceCartItems] = useState([]);

    const [showAttributes, setShowAttributes] = useState(false);


    useEffect(() => {
        async function fethdata() {
            await fetchProducts();
        }

        fethdata();
        console.log("items", cartItems);

        let price = 0;
        for (let i = 0; i < cartItems.length; i++) {
            price += Number(cartItems[i]?.totals?.subtotal);
        }

        setTotalPrice(_totalprice => (price));
    }, []);

    useEffect(() => {
        let price = 0;
        for (let i = 0; i < cartItems.length; i++) {
            price += Number(cartItems[i]?.totals?.subtotal);
        }

        setTotalPrice(_totalprice => (price));
    }, [cartItems])

    let fetchPriceProducts = () => {
        CoCart.get("cart/items", {})
            .then((response) => {
                var result = Object.keys(response.data).map(
                    (key) => response.data[key]
                );

                setPriceCartItems(priceCartItems => (result));
                return response.data;
            })
            .catch((error) => {
                // Invalid request, for 4xx and 5xx statuses
                console.log("Response Status:", error.response.status);
                console.log("Response Headers:", error.response.headers);
                console.log("Response Data:", error.response.data);
                // createNotification("error");
            })
            .finally(() => {
                // Always executed.
            });
    };

    let fetchProducts = () => {
        CoCart.get("cart/items", {})
            .then((response) => {
                // Successful request
                console.log("Response Status:", response.status);
                console.log("Response Headers:", response.headers);
                var result = Object.keys(response.data).map(
                    (key) => response.data[key]
                );
                console.log("Checkout Cart Response sdfsdfsdfsdf:", result);
                setCartItems(_cartItems => (result));
                return response.data;
            })
            .catch((error) => {
                // Invalid request, for 4xx and 5xx statuses
                console.log("Response Status:", error.response.status);
                console.log("Response Headers:", error.response.headers);
                console.log("Response Data:", error.response.data);
                // createNotification("error");
            })
            .finally(() => {
                // Always executed.
            });
    };

    return (
        <div className="w-full flex flex-col">
            <div className="w-full flex  py-[1rem]">
                <h1 className="stepTitle px-[0.5rem]">Översikt & bekräftelse
                </h1>
            </div>

            <div className="flex flex-col w-full h-[45vh] overflow-auto border-b-[1px] border-[#D2D2D2]">
                {cartItems[0] ?
                    cartItems.slice().reverse().map((cartItem, idss) => (
                        <CheckItem
                            key={idss}
                            id={cartItem?.id}
                            itemKey={cartItem?.item_key}
                            title={cartItem?.name}
                            price={cartItem?.price}

                            img={cartItem?.featured_image}
                            url={cartItem?.slug}
                            quantity={cartItem?.quantity.value}
                            maxquantity={
                                cartItem?.quantity.max_purchase < 1
                                    ? 1
                                    : cartItem?.quantity.max_purchase
                            }
                            minquantity={cartItem?.quantity.min_purchase}
                            totalprice={totalprice}
                            setTotalPrice={setTotalPrice}

                        />
                    )) : (
                        <></>
                    )}
            </div>

            <div className="flex w-full py-[1rem] flex-col border-b-[1px] border-[#D2D2D2]">
                <div className="flex w-full justify-between items-center">
                    <p className="font-rival font-normal text-[18px] text-[#222222]">Presentkort / Rabattkod</p>
                    {showAttributes === false ? (
                        <p className="font-rival font-normal text-[22px] text-[#222222] cursor-pointer" onClick={() => { setShowAttributes(true) }}>+</p>
                    ) : (
                        <p className="font-rival font-normal text-[22px] text-[#222222] cursor-pointer" onClick={() => { setShowAttributes(false) }}>-</p>
                    )}
                </div>

                {showAttributes === true && (
                    <div className="flex flex-col">
                        <p className="text-[16px] text-[#222222] font-rival py-[0.5rem]">
                            Har du en rabattkod eller presentkort? Skriv in i rutan <br />
                            nedan och tryck "Aktivera" för att använda. OBS! Om du <br />
                            har mer än ett presentkort, ange samtliga presentkort <br />
                            separerade med kommatecken.
                        </p>
                        <input className="py-[0.5rem] border-[1px] w-[60%] p-[10px]" placeholder="XH7-22-Jkl9-91990" />
                        <button className="bg-[#76351A] w-[180px] h-[45px] text-[white] text-[11px] py-[0.5rem] mt-[0.5rem]">AKTIVERA</button>
                    </div>
                )}
            </div>

            <div className="flex w-full py-[1rem] flex-col border-b-[1px] border-[#D2D2D2]">
                <div className="flex flex-row justify-between w-full">
                    <p className="text-[16px] font-rival text-[#222222] font-right">SUMMA VAROR:</p>
                    <p className="text-[16px] font-rival text-[#222222] font-noraml">{totalprice} kr</p>
                </div>

                <div className="flex flex-row justify-between w-full">
                    <p className="text-[16px] font-rival text-[#222222] font-right">VARAV MOMS:</p>
                    <p className="text-[16px] font-rival text-[#222222] font-normal">2 233 kr</p>
                </div>

                <div className="flex flex-row justify-between w-full">
                    <p className="text-[16px] font-rival text-[#222222] font-right">LEVERANS AVGIFT:</p>
                    <p className="text-[16px] font-rival text-[#222222] font-normal">0 kr</p>
                </div>
            </div>
            <div className="flex flex-col gap-3 w-full bg-white py-5">
                <div className="flex justify-between w-full">
                    <h1 className="text-[#222222] text-3xl">Totalt (inkl, moms):</h1>
                    <h1 className="text-[#222222] text-3xl">
                        {totalprice} kr
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Cart;