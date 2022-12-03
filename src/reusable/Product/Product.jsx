/* eslint-disable no-mixed-operators */
/* eslint-disable default-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  ArrowsPointingOutIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useState } from "react";
import Flag from "react-flagpack";
import QuickView from "./QuickView";
import CoCart from "../../components/api/cocart";
import "react-notifications/lib/notifications.css";
import { useNavigate } from "react-router-dom";

function Product({
  id,
  title,
  weight,
  price,
  description,
  img,
  subimg,   
  flag,
  url,
  type,
  viewType,
  clickable
}) {
  const [open, setOpen] = useState(false);
  const [addMessge, setAddMessage] = useState("");
  const navigate = useNavigate();
  const [isHover, setHover] = useState(false);

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
        return NotificationManager.error(addMessge, "Failed", 5000, () => {});
        break;
    }
  }

  function AddCart(id) {
    CoCart.post("cart/add-item", {
      id: String(id),
      quantity: "1",
    })
      .then((response) => {
        // Successful request
        console.log("Response Status:", response.status);
        console.log("Response Headers:", response.headers);
        console.log("Response Data:", response.data);
        setAddMessage("Add Cart Successfully");
        createNotification("success");
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

  function gotoSlug(url) {
    navigate("/product/" + url);
  }

  return (
    <>
      <div className="flex flex-col gap-2 cursor-pointer">
        <div className="relative group overflow-hidden">
          <div
            className={`w-full ${viewType && viewType === "SECOND" ? 'h-[360px]' : 'h-[52vh]'} bg-no-repeat bg-center bg-cover`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 0%), rgb(0 0 0 / 0%)), url(${isHover ? subimg : img})`,
                transform: `scale(${isHover ? '1' : '1'})`
            }}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => (clickable === undefined || clickable) && gotoSlug(url)}
          />

          {type === "simple" && (
            <div className="absolute bottom-8 flex justify-center w-full bg-no-repeat opacity-0 group-hover:opacity-100 transition">
              <div className="bg-white scale-[0.25] group-hover:scale-100 transition">
                <button className="p-3 border-r border-[#DCDCDC] group-one">
                  <HeartIcon className="h-5 w-auto text-[#777677] group-one-hover:text-black transition" />
                </button>
                <button
                  className="p-3 border-r border-[#DCDCDC] group-one"
                  onClick={() => AddCart(id)}
                >
                  <ShoppingCartIcon className="h-5 w-auto text-[#777677] group-one-hover:text-black transition" />
                </button>
                <button className="p-3 group-one" onClick={() => setOpen(true)}>
                  <ArrowsPointingOutIcon className="h-5 w-auto text-[#777677] group-one-hover:text-black transition" />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 w-[90%]">
            <a href="" className="flex items-center gap-2 flex-wrap">
              <h2 className={`text-fake ${viewType && viewType === "SECOND" ? 'text-xl' : 'text-sm'}`}>{title}</h2>
              <hr />
              {
                viewType && viewType === "SECOND" 
                ? null 
                : weight && <p className="text-sm text-black/40"> {weight}</p>
              }
            </a>
          </div>
          <div>
            {
              flag 
              ?
                flag === "NO_FLAG"
                ? null
                : <Flag
                    code={`${flag}`}
                    size="M"
                    hasBorder={false}
                    hasBorderRadius={false}
                    className="w-8 h-5"
                  />
              : <Flag
                  code="SE"
                  size="M"
                  hasBorder={false}
                  hasBorderRadius={false}
                  className="w-8 h-5"
                />
            }
          </div>
        </div>
        {
          viewType && viewType === "SECOND" 
          ? weight && <p className="text-base text-black"> {weight}</p>
          : null
        }
        { price && <p>{price.toLocaleString("sv-SE")} SEK</p> }
      </div>

      <QuickView
        open={open}
        setOpen={setOpen}
        id={id}
        img={img}
        title={title}
        price={price}
        description={description}
        flag={flag}
        weight={weight}
      />
      <NotificationContainer key={id} />
    </>
  );
}

export default Product;
