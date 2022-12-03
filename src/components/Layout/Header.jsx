/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable no-lone-blocks */
import {
  MagnifyingGlassIcon,
  HeartIcon,
  UserCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, Fragment, useState, useRef } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import navigation from "./Navigation";
import "./../../index.css";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import SearchBar from "./SearchBar";
import { useLocation, matchPath } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const whiteNavRoutes = ["/product"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const navRef = useRef(null);
  const popoversRef = useRef(null);
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [whiteNav, setWhiteNav] = useState(false);
  const { pathname } = useLocation();
  const [headerdata, setHeaderData] = useState([]);
  const [isHover, setHover] = useState(false);

  // useEffect(()=>{

  // })
  useEffect(() => {
    (async () => {
      console.log("started");
      const res = await fetch(
        "https://kottfabriken.wargmedia.nu/wp-json/menus/v1/menus/476"
      );
      console.log("finished");

      let response;
      if (res.status === 200) {
        console.log("succsss");
        response = await res.json();
        console.log("datsdsdffa", response);
      }
      setHeaderData(response);
    })();
  }, []);

  const handleSearch = (_, value) => {
    const show = value ?? !searchOpen;
    setSearchOpen(show);
    if (show) {
      navRef.current?.classList.add("navbar-white");
    } else {
      navRef.current?.classList.remove("navbar-white");
    }
  };

  const setLoginFlag = () => {
    if (!sessionStorage.getItem("token")) setLoginOpen(true);
    else {
      setLoginOpen(false);
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userName");
      window.location.reload();
    }
  };
  useEffect(() => {
    let scrollBefore = window.scrollY;
    window.addEventListener("scroll", () => {
      // NEED To OPTIMIZE THIS CODE
      if (window.pageYOffset <= 50) {
        if (whiteNav) {
          navRef.current?.classList.add("navbar-white-default");
        } else {
          navRef.current?.classList.remove("navbar-white-default");
        }
        navRef.current?.classList.remove("scroll-down");
        navRef.current?.classList.add("transparent-nav");
      } else if (scrollBefore < window.scrollY) {
        navRef.current?.classList.remove("transparent-nav");
        navRef.current?.classList.remove("scroll-down");
        navRef.current?.classList.remove("navbar-white-default");
      } else {
        navRef.current?.classList.remove("transparent-nav");
        navRef.current?.classList.add("scroll-down");
      }

      scrollBefore = window.scrollY;
    });
  }, [whiteNav]);

  useEffect(() => {
    const whiteNav = whiteNavRoutes.some((page) =>
      matchPath({ path: page }, pathname)
    );
    console.log(whiteNav);
    if (whiteNav) {
      navRef.current?.classList.add("navbar-white-default");
    } else {
      navRef.current?.classList.remove("navbar-white-default");
    }
    setWhiteNav(whiteNav);
  }, [pathname]);

  useEffect(() => {
    const elements = [...popoversRef.current.children];

    elements.forEach((element) => {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type !== "attributes") return;

          const attribute = mutation.target.getAttribute(
            "data-headlessui-state"
          );
          attribute === "open"
            ? navRef.current?.classList.add("navbar-white")
            : navRef.current?.classList.remove("navbar-white");

          setSearchOpen(false);
        });
      });

      observer.observe(element, {
        attributes: true, //configure it to listen to attribute changes
      });
    });
  }, []);

  function onNavigationClick(index) {
    navigate("/products/" + String(headerdata[index].title));
  }

  function onItemClick(index1) {
    navigate("/products/" + String(headerdata[index1].title));
  }

  function onSubItemClick(index2) {
    navigate("/products/" + String(headerdata[index2].title));
  }

  return (
    <>
      <header
        id="navbar"
        className={`w-full transparent-nav flex flex-col fixed z-50 transition-all duration-200 ease-linear -top-[6rem]`}
        ref={navRef}
      >
        <div
          className="flex justify-center text-white bg-[#76351A] w-full py-2"
          id="navbar-banner"
        >
          <h1 className="text-xs uppercase font-sans tracking-wider">
            100 Första ordrarna får en gratis skärbräda!
          </h1>
        </div>

        <div className="flex justify-between items-center px-6 py-7">
          <div className="flex gap-8 items-center">
            <Link to="/">
              <h1 className="text-3xl uppercase tracking-wider font-light">
                Kött fabriken
              </h1>
            </Link>
            <div className="flex items-center h-full">
              {/* Mega menus */}
              <Popover.Group className="" onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <div
                  className="flex h-full justify-center space-x-5"
                  ref={popoversRef}
                >
                  {headerdata &&
                    headerdata.map((category, categoryIdx) => (
                      <>
                        {category.menu_item_parent === "0" && (
                          <Popover key={categoryIdx} className="flex" >
                            {({ open }) => (
                              <>
                                <div className="relative flex" >
                                  <Popover.Button
                                    className={classNames(
                                      open
                                        ? "border-[#B55F3B] text-[#B55F3B]"
                                        : "border-transparent",
                                      "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm transition-colors duration-200 ease-linear uppercase tracking-wider font-thin focus-visible:outline-none hover:border-[#B55F3B] hover:border-[#B55F3B]/50"
                                    )}
                                    onClick={() => {
                                      {
                                        // categoryIdx !== headerdata.length - 1
                                        //   ? headerdata[categoryIdx + 1] &&
                                        //   headerdata[categoryIdx + 1]
                                        //     .menu_item_parent === "0" &&
                                        //   onNavigationClick(categoryIdx)
                                        //   : onNavigationClick(categoryIdx);
                                        onNavigationClick(categoryIdx);
                                      }
                                    }}
                                  >
                                    {category.title}
                                  </Popover.Button>
                                </div>

                                {headerdata[categoryIdx + 1] &&
                                  headerdata[categoryIdx + 1]
                                    .menu_item_parent !== "0" && (
                                    <Transition
                                      // show={headerdata[categoryIdx + 1] &&
                                      //   headerdata[categoryIdx + 1]
                                      //     .menu_item_parent !== "0" && isHover ? true : false}
                                      as={Fragment}
                                      enter="transition ease-out duration-200"
                                      enterFrom="opacity-0"
                                      enterTo="opacity-100"
                                      leave="transition ease-in duration-150"
                                      leaveFrom="opacity-100"
                                      leaveTo="opacity-0"
                                    >
                                      <Popover.Panel className="absolute inset-x-0 top-full text-gray-500 sm:text-sm">
                                        <div
                                          className="absolute inset-0 top-1/2 bg-white shadow"
                                          aria-hidden="true"
                                        />
                                        <div className="relative bg-white">
                                          <div className="mx-auto max-w-7xl px-8">
                                            <div className="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                              <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                                <div>
                                                  {headerdata.map(
                                                    (
                                                      subcategory,
                                                      subcategoryIdx
                                                    ) => (
                                                      <>
                                                        {subcategory.menu_item_parent ===
                                                          String(
                                                            category.ID
                                                          ) && (
                                                            <>
                                                              <p
                                                                id={`desktop-featured-heading-${subcategoryIdx}`}
                                                                className="font-medium text-gray-900"
                                                                onClick={() => {
                                                                  onItemClick(
                                                                    subcategoryIdx
                                                                  );
                                                                }}
                                                                style={{
                                                                  cursor:
                                                                    "pointer",
                                                                }}
                                                              >
                                                                {
                                                                  subcategory.title
                                                                }
                                                              </p>
                                                              {headerdata.map(
                                                                (
                                                                  subitemcategory,
                                                                  subitemcategoryIdx
                                                                ) => (
                                                                  <>
                                                                    {subitemcategory.menu_item_parent ===
                                                                      String(
                                                                        subcategory.ID
                                                                      ) && (
                                                                        <>
                                                                          <ul
                                                                            role="list"
                                                                            aria-labelledby={`desktop-featured-heading-${subcategoryIdx}`}
                                                                            className="mt-6 space-y-3 sm:mt-4 sm:space-y-4"
                                                                          >
                                                                            <li
                                                                              key={
                                                                                subitemcategoryIdx
                                                                              }
                                                                              className="flex"
                                                                              onClick={() => {
                                                                                onSubItemClick(
                                                                                  subitemcategoryIdx
                                                                                );
                                                                              }}
                                                                            >
                                                                              {
                                                                                subitemcategory.title
                                                                              }
                                                                            </li>
                                                                          </ul>
                                                                        </>
                                                                      )}
                                                                  </>
                                                                )
                                                              )}
                                                            </>
                                                          )}
                                                      </>
                                                    )
                                                  )}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Popover.Panel>
                                    </Transition>
                                  )}
                              </>
                            )}
                          </Popover>
                        )}
                      </>
                    ))}
                </div>
              </Popover.Group>
            </div>
          </div>

          <div className="flex justify-end items-center gap-8">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleSearch}
            >
              <MagnifyingGlassIcon className="w-[1.25rem] h-auto"></MagnifyingGlassIcon>
              <p className="font-light uppercase text-sm tracking-wider">Sök</p>
            </div>
            <Link to="/account/favorites" className="flex items-center gap-2">
              <HeartIcon className="w-[1.25rem] h-auto"></HeartIcon>
              <p className="font-light uppercase text-sm tracking-wider">
                Favoriter
              </p>
            </Link>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setLoginFlag()}
            >
              <UserCircleIcon className="w-[1.25rem] h-auto"></UserCircleIcon>
              {!sessionStorage.getItem("token") ? (
                <p className="font-light uppercase text-sm tracking-wider">
                  Logga in
                </p>
              ) : (
                <p className="font-light uppercase text-sm tracking-wider">
                  Logga ut
                </p>
              )}
            </div>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCartIcon className="w-[1.25rem] h-auto"></ShoppingCartIcon>
              <p className="font-light uppercase text-sm tracking-wider">
                Varukorg
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <SearchBar open={searchOpen} handleSearch={handleSearch} />
        </div>
      </header>

      <Login open={loginOpen} setOpen={setLoginOpen} />
      <Cart open={cartOpen} setOpen={setCartOpen} />
    </>
  );
}

export default Header;
