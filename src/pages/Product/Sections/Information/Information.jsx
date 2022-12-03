/* eslint-disable default-case */
/* eslint-disable no-lone-blocks */
import { Link } from "react-router-dom";
import Flag from "react-flagpack";
import "./../../Product.css";
import { useEffect, useState } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import CoCart from "../../../../components/api/cocart";

function Information({
  id,
  size,
  code,
  measure,
  title,
  price,
  description,
  type,
  variations,
}) {
  const [descrip, setdescrip] = useState("");
  const [subsize, setSubSize] = useState("200g");
  const [subId, setSubId] = useState(id);
  const [addMessge, setAddMessage] = useState("");
  const [itemCount, setItemCount] = useState(1);

  useEffect(() => {
    console.log("available size:", size);
  }, []);

  useEffect(() => {
    if (description) {
      let value = description;
      let str = value.toString().replace("<p>", "");
      let str1 = str.toString().replace("</p>", "");
      let str2 = str1.toString().replace("<p>&nbsp;</p>", "");
      setdescrip(str2);
    }
  });

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

  function setItemSize(idx) {
    // alert(variations[idx]);
    setSubId(Number(variations[idx]));
  }

  function addcart() {
    // alert(itemCount);
    alert(type);
    {
      type === "simple"
        ? CoCart.post("cart/add-item", {
            id: String(id),
            quantity: String(itemCount),
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
            })
        : CoCart.post("cart/add-item", {
            id: String(subId),
            quantity: String(itemCount),
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
  }

  const handleChange = (event) => {
    setItemCount(event.target.value);
  };

  return (
    <div className="w-full h-full flex justify-center items-center px-10 py-14">
      <div className="flex flex-col w-[80%] min-w-[40rem]">
        {/* Title information */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="">
              <Flag
                code={code}
                size="M"
                hasBorder={false}
                hasBorderRadius={false}
                className="w-10 h-6"
              />
            </div>
            <div className="">
              <p className="font-rival font-thin text-[#222222b3]">
                {" "}
                <Link to="/">Matlagning</Link> / <Link to="/">Grillar</Link> /{" "}
                <Link to="/">Kolgrillar</Link>{" "}
              </p>
            </div>
            <div className="flex flex-col mb-[1.5rem]">
              <h1 className="font-premier uppercase text-4xl tracking-wider leading-1">
                {title}
              </h1>
              <p className="font-rival font-light text-lg text-[#222222] uppercase">
                {price} sek
              </p>
            </div>
            <div className="">
              <p className="font-rival font-thin text-[#222222cc]">{descrip}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {/* Measure, Size and so on */}

            <div className="">
              {type === "variable" && size && (
                <div className="flex flex-col gap-1">
                  <h1 className="font-rival font-thin text-lg tracking-wide opacity-80">
                    Storlek
                  </h1>
                  {/* size.map() */}
                  <div className="flex gap-4">
                    {size.map((storlek, idx) => (
                      <button
                        key={idx}
                        className="font-rival font-thin text-xs border border-[#AFAFAF] w-[5rem] py-2 bg-[#f2f2f2e6] text-[#464646b3] hover:border-[#76351a] hover:bg-[#76361a53] transition duration-300"
                        onClick={() => setItemSize(idx)}
                      >
                        {storlek}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {measure && (
                <div className="flex flex-col gap-1">
                  <h1 className="font-rival font-thin text-lg tracking-wide">
                    Mått
                  </h1>
                  <div className="flex gap-4">
                    <button className="font-rival font-thin text-xs border border-[#AFAFAF] w-[5rem] py-2 bg-[#f2f2f2e6] text-[#464646b3] hover:border-[#76351a] hover:bg-[#76361a53] transition duration-300">
                      120 ml
                    </button>
                    <button className="font-rival font-thin text-xs border border-[#AFAFAF] w-[5rem] py-2 bg-[#f2f2f2e6] text-[#464646b3] hover:border-[#76351a] hover:bg-[#76361a53] transition duration-300">
                      240 ml
                    </button>
                    <button className="font-rival font-thin text-xs border border-[#AFAFAF] w-[5rem] py-2 bg-[#f2f2f2e6] text-[#464646b3] hover:border-[#76351a] hover:bg-[#76361a53] transition duration-300">
                      480 ml
                    </button>
                    <button className="font-rival font-thin text-xs border border-[#AFAFAF] w-[5rem] py-2 bg-[#f2f2f2e6] text-[#464646b3] hover:border-[#76351a] hover:bg-[#76361a53] transition duration-300">
                      960 ml
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Amount selector */}

            <div className="flex gap-4 h-[3rem]">
              <input
                placeholder="1"
                className="h-full border border-[#AFAFAF] bg-[#f2f2f2e6] text-[#464646b3] focus:ring-[#76351a] focus:border-[#76351a]"
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="99"
                onChange={handleChange}
                value={itemCount}
              />
              <button
                className="font-premier text-[#222222] text-sm uppercase font-thin tracking-wider border border-[#76351a] px-6 h-full hover:bg-[#76351a] hover:text-white duration-300 transition"
                onClick={() => {
                  addcart();
                }}
              >
                Lägg i varukorgen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
