import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Visa from "./../../assets/icons/payment/visa.png";
import MasterCard from "./../../assets/icons/payment/mastercard.png";
import Klarna from "./../../assets/icons/payment/klarna.png";
import React, { useEffect, Fragment, useState } from "react";

const privacies = [
  {
    question: "Kontakt",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Handla",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Om oss",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Våra tjänster",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Socialamedier",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Footer() {
  const [footerdata, setFooterData] = useState([]);
  const [message, setMessage] = useState("");
  const [subFlag, setSubFlag] = useState(false);
  // let headerdata;

  useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://kottfabriken.wargmedia.nu/wp-json/menus/v1/menus/477"
      );
      let response;
      if (res.status === 200) {
        response = await res.json();
      }
      setFooterData(response);
      console.log("footer:", footerdata);
    })();
  }, []);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  function onSubScribe() {
    const current = String(new Date());
    console.log(typeof current);

    // const options = {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: {
    //     accept: 'application/json',
    //     'content-type': 'application/json',
    //     'X-API-KEY': '636d1a8bd91737f89af11de8-9SkmrPIVShLhd4wjGZg810KIjw6fMVNZnimWIb5Ytqp7X41jNL'
    //   },
    //   body: JSON.stringify({
    //     identifiers: [
    //       {
    //         channels: {email: {status: 'subscribed', statusDate: current}},
    //         id: message,
    //         sendWelcomeMessage: true,
    //         type: 'email'
    //       }
    //     ],
    //     sendWelcomeEmail: true
    //   })
    // };

    // fetch(
    //   'https://api.omnisend.com/v3/contacts',
    //   options
    // )
    //   .then((response) => response.json())
    //   .then((response) => {alert(1);console.log(response);})
    //   .catch((err) => console.error(err));

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "X-API-KEY":
          "636d1a8bd91737f89af11de8-9SkmrPIVShLhd4wjGZg810KIjw6fMVNZnimWIb5Ytqp7X41jNL",
      },
      body: JSON.stringify({
        identifiers: [
          {
            channels: {
              email: {
                status: "subscribed",
                statusDate: "2016-02-29T10:07:28Z",
              },
            },
            id: message,
            type: "email",
            sendWelcomeMessage: true,
          },
        ],
      }),
    };

    fetch("https://api.omnisend.com/v3/contacts", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setSubFlag(true);
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      {/* Desktop header */}

      <footer className="flex flex-col w-full 2lg:hidden" id="footer">
        <div className="w-full flex justify-center py-12 bg-[#76351A]">
          <div className="w-[85%] flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-white font-premier text-4xl tracking-wider">
                Prenumerera på vårat nyhetsbrev
              </h1>
              <p className="text-white text-sm tracking-wide">
                Få de senaste nyheterna och uppdateringarna om våra produkter,{" "}
                <br className=""></br>när vi lanserar nya kollektioner och unika
                samarbeten.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <form
                className="h-[3.5rem] flex items-center justify-center"
                action="javascript:void(0);"
                onSubmit={() => onSubScribe()}
              >
                {subFlag === false ? (
                  <>
                    <input
                      className="bg-[#F2F2F2E5] border-[#AFAFAF] px-5 w-[18rem] focus:ring-transparent text-rival text-[#222222] focus:border-[#AFAFAF] box-border h-full"
                      placeholder="E-post"
                      type="email"
                      id="mailValue"
                      onChange={handleChange}
                      value={message}
                    />
                    <button
                      className="bg-[#222222e6] h-full px-8 flex items-center hover:bg-[#222222E5] transition duration-200"
                      type="submit"
                    >
                      <span className="text-white font-premier uppercase text-sms text-center leading-0 tracking-wider">
                        Prenumerera
                      </span>
                    </button>
                  </>
                ) : (
                  <p className="text-white text-center text-xl">Welcome!</p>
                )}
              </form>

              <p className="text-white opacity-80 text-xs w-[27rem]">
                Jag bekräftar att min e-postadress kommer att behandlas av
                Köttfabriken i Täby AB i enlighet med bestämmelserna i{" "}
                <Link
                  className="underline underline-offset-1 font-medium"
                  to="/privacy-policy"
                >
                  Privacy & Policy.
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center py-36 bg-[#222222]">
          <div className="w-[85%] flex justify-between">
            {footerdata &&
              footerdata.map((category, categoryIdx) => (
                <div key={categoryIdx} className="flex flex-col gap-3">
                  {category.menu_item_parent === "0" && (
                    <h1 className="font-premier text-white text-lg uppercase tracking-wider">
                      {category.title}
                    </h1>
                  )}
                  <div className="flex flex-col gap-1">
                    {footerdata.map((subcategory, subcategoryIdx) => (
                      <>
                        {subcategory.menu_item_parent ===
                          String(category.ID) && (
                          <p
                            key={subcategoryIdx}
                            className="font-rival text-white text-sm font-thin tracking-wide cursor-pointer"
                          >
                            {subcategory.title}
                          </p>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="w-full flex justify-center py-8 bg-[#181818]">
          <div className="w-[85%] flex justify-between">
            <p className="text-white text-xs font-rival">
              © 2022 Köttfabriken i Täby AB
            </p>
            <div className="flex gap-4">
              <img
                className="h-5 w-auto"
                src={Visa}
                alt="payment method visa"
              />

              <img
                className="h-5 w-auto"
                src={MasterCard}
                alt="payment method mastercard"
              />

              <img
                className="h-5 w-auto"
                src={Klarna}
                alt="payment method klarna"
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile header */}

      <footer className="hidden 2lg:flex flex-col w-full">
        <div className="bg-[#76351A] w-full flex justify-center">
          <div className="py-12">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-white font-premier text-4xl tracking-wider 2md:text-3xl sm:text-2xl">
                Prenumerera på vårat nyhetsbrev
              </h1>
              <form
                className="h-[3.5rem] flex items-center justify-center"
                action="javascript:void(0);"
                onSubmit={() => onSubScribe()}
              > 
                {subFlag === false ? (
                  <>
                    <input
                      className="bg-[#F2F2F2E5] border-[#AFAFAF] px-5 w-[18rem] focus:ring-transparent text-rival text-[#222222] focus:border-[#AFAFAF] box-border h-full"
                      placeholder="E-post"
                      type="email"
                      id="mailValue"
                      onChange={handleChange}
                      value={message}
                    />
                    <button
                      className="bg-[#222222e6] h-full px-8 flex items-center hover:bg-[#222222E5] transition duration-200"
                      type="submit"
                    >
                      <span className="text-white font-premier uppercase text-sms text-center leading-0 tracking-wider">
                        Prenumerera
                      </span>
                    </button>
                  </>
                ) : (
                  <p className="text-white text-center text-xl">Welcome!</p>
                )}
              </form>
              <p className="text-white opacity-80 text-xs w-[80%] text-center">
                Jag bekräftar att min e-postadress kommer att behandlas av
                Köttfabriken i Täby AB i enlighet med bestämmelserna i{" "}
                <Link
                  className="underline underline-offset-1 font-medium"
                  to="/privacy-policy"
                >
                  Privacy & Policy.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#222222] w-full flex justify-center">
          <div className="w-full">
            <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200/30">
                <dl className="mt-6 space-y-6 divide-y divide-gray-200/30">
                  {privacies.map((privacy) => (
                    <Disclosure
                      as="div"
                      key={privacy.question}
                      className="pt-6"
                    >
                      {({ open }) => (
                        <>
                          <dt className="text-lg">
                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                              <div className="flex gap-10">
                                <span className="font-medium font-premier uppercase tracking-wider text-white">
                                  {privacy.question}
                                </span>
                              </div>
                              <span className="ml-6 flex h-7 items-center">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? "-rotate-180" : "rotate-0",
                                    "h-6 w-6 transform"
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel as="dd" className="mt-2 pr-12">
                            <p className="text-base text-gray-500">
                              {privacy.answer}
                            </p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#181818] py-8 w-full flex justify-center">
          <div className="w-[85%] flex justify-between">
            <p className="text-white text-xs font-rival">
              © 2022 Köttfabriken i Täby AB
            </p>
            <div className="flex gap-4">
              <img
                className="h-5 w-auto"
                src={Visa}
                alt="payment method visa"
              />

              <img
                className="h-5 w-auto"
                src={MasterCard}
                alt="payment method mastercard"
              />

              <img
                className="h-5 w-auto"
                src={Klarna}
                alt="payment method klarna"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
