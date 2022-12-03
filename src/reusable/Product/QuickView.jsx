/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
/* eslint-disable default-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Flag from "react-flagpack";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useEffect } from "react";
import CoCart from "../../components/api/cocart";
import "react-notifications/lib/notifications.css";

function QuickView({
  open,
  setOpen,
  id,
  img,
  title,
  description,
  flag,
  weight,
  price,
}) {
  const [descrip, setdescrip] = useState("");

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
        return NotificationManager.error(
          "Add Cart Failed due to sufficient amount",
          "Failed",
          5000,
          () => {}
        );
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
        createNotification("success");
      })
      .catch((error) => {
        // Invalid request, for 4xx and 5xx statuses
        console.log("Response Status:", error.response.status);
        console.log("Response Headers:", error.response.headers);
        console.log("Response Data:", error.response.data);
        createNotification("error");
      })
      .finally(() => {
        // Always executed.
      });
  }

  useEffect(() => {
    if (description) {
      let value = description;
      let str = value.toString().replace("<p>", "");
      let str1 = str.toString().replace("</p>", "");
      let str2 = str1.toString().replace("<p>&nbsp;</p>", "");
      setdescrip(str2);
    }
  }, []);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-[0.25]"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-[0.25]"
              >
                <Dialog.Panel className="relative overflow-hidden bg-white text-left shadow-xl transition-all md:w-full sm:w-[85%] sm:my-8">
                  <div className="flex sm:flex-col gap-4 md:gap-2">
                    <div className="relative">
                      <img
                        src={img}
                        alt=""
                        className="w-[50vw] h-[90vh] object-cover object-center"
                      />
                      <div className="hidden absolute top-0 right-0 sm:block p-4">
                        <ExitButton setOpen={setOpen} isMobile={true} />
                      </div>
                    </div>

                    <div className="flex p-2 sm:py-0">
                      <div className="flex flex-col justify-between py-8 pb-2 md:p-4 sm:w-full">
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
                          <h1 className="text-2xl">{title}</h1>
                          { price && 
                            <p className="text-black/80">
                              {price.toLocaleString("sv-SE")} kr
                            </p> 
                          }

                          <p className="text-black/60 text-sm w-72 sm:w-full mt-6">
                            {descrip}
                          </p>

                          {weight && (
                            <>
                              <p className="mt-6 text-xs">MÄNGD</p>
                              <p className="text-black/80 text-sm">{weight}</p>
                            </>
                          )}
                        </div>

                        <div className="flex flex-col md:mt-6">
                          <p
                            className="btn justify-self-end text-center mb-1"
                            onClick={() => AddCart(id)}
                          >
                            Lägg till i kundvagn
                          </p>
                          <div>
                            <a
                              href=""
                              className="text-xs text-black/80 hover:text-black transition"
                            >
                              Se detaljerad produktsida
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="sm:hidden">
                        <ExitButton setOpen={setOpen} isMobile={false} />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <NotificationContainer key={id} />
    </>
  );
}

const ExitButton = ({ setOpen, isMobile }) => {
  console.log(isMobile);
  return (
    <button
      className={`p-2 rounded-full group ${
        isMobile ? "hover:bg-black/10" : "hover:bg-porche/50"
      } transition`}
      onClick={() => setOpen(false)}
    >
      <XMarkIcon className="w-6 h-6 text-black/60 group-hover:text-black transition" />
    </button>
  );
};

export default QuickView;
