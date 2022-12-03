import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Item from "./Item";
import CoCart from "../api/cocart";
import { useNavigate } from "react-router-dom";


function Cart({ open, setOpen }) {
  const close = () => setOpen(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalprice, setTotalPrice] = useState(0);
  const [priceCartItems, setPriceCartItems] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {

    async function fethdata() {
      await fetchPriceProducts();
    }

    fethdata();

    let price = 0;
    
    for (let i = 0; i < priceCartItems.length; i++) {
      price += Number(priceCartItems[i]?.totals?.subtotal);
    }

    setTotalPrice(totalprice=>price);

  });

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

    setTotalPrice(price);
  }, [open]);

  let fetchPriceProducts = () => {
    CoCart.get("cart/items", {})
      .then((response) => {
        var result = Object.keys(response.data).map(
          (key) => response.data[key]
        );
        
        setPriceCartItems(priceCartItems=>result);
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

  function onCheckout () {
    return navigate("/checkout");
  }
  let fetchProducts = () => {
    CoCart.get("cart/items", {})
      .then((response) => {
        // Successful request
        console.log("Response Status:", response.status);
        console.log("Response Headers:", response.headers);
        var result = Object.keys(response.data).map(
          (key) => response.data[key]
        );
        console.log("Cart Response Data:", result);
        setCartItems(cartItems=>result);
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
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="transformx"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fiex inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="ease-in duration-300"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-end sm:p-0">
              <Dialog.Panel className="relative overflow-hidden bg-white text-left shadow-xl transition-all min-w-[28rem] w-[40%] h-screen md:w-full">
                <div className="flex flex-col items-center p-8 h-full w-full">
                  <div className="flex items-center justify-between w-full mb-5">
                    <div className="w-[1.25rem] h-auto relative ">
                      <ShoppingCartIcon className="w-full h-full"></ShoppingCartIcon>
                    </div>

                    <h3 className="text-2xl uppercase tracking-wide">
                      Din varukorg
                    </h3>

                    <button
                      className="p-2 rounded-full group hover:bg-black/10 transition"
                      onClick={close}
                    >
                      <XMarkIcon className="w-6 h-6 text-black/60 group-hover:text-black transition" />
                    </button>
                  </div>

                  <div className="flex flex-col w-full h-full overflow-auto">
                    {cartItems[0] ?
                      cartItems.slice().reverse().map((cartItem, idss) => (
                        <Item
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
                        />
                      )):(
                        <></>
                      )}
                  </div>

                  <div className="flex flex-col gap-3 w-full bg-white py-5">
                    <div className="flex justify-between w-full">
                      <h1 className="text-[#222222] text-3xl">Totalsumma</h1>
                      <h1 className="text-[#222222] text-3xl">
                        {totalprice} SEK
                      </h1>
                    </div>
                    <div className="w-full">
                      <button className="w-full bg-[#b7410d] py-3" onClick={()=>{onCheckout()}}>
                        Vidare till kassans
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}

export default Cart;
