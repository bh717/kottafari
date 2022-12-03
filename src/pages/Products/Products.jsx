/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { PageBanner } from "./../../reusable/index";
import { Product } from "./../../reusable/index";
import Banner from "./../../assets/images/banners/hero-image.png";
import api from "../../components/api/woocommerce";
import { TreeSelect } from 'antd';

import { Loading } from "notiflix";
import { useParams } from "react-router-dom";

import DropdownMenu, {
  DropdownItemRadio,
  DropdownItemRadioGroup,
} from "@atlaskit/dropdown-menu";

const { SHOW_PARENT } = TreeSelect;

export default function Example() {
  const [products, setProducts] = useState([]);
  const [popularFilter, setPopularFilter] = useState("Mest populär");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(12);
  const [categoryId, setCategoryId] = useState("482");
  const [displaycount, setDisplayCount] = useState(12);
  let { headerslugurl } = useParams();
  const [treeData, setTreeData] = useState([]);

  // const treeData = [
  //   {
  //     title: 'Node1',
  //     value: '0-0',
  //     key: '0-0',
  //   },
  //   {
  //     title: 'Node2',
  //     value: '0-1',
  //     key: '0-1',
  //   },
  // ];

  useEffect(() => {
    console.log(headerslugurl);
    setTreeData([]);
    api
      .get("products/categories", {
        per_page: 50
      })
      .then((response) => {
        if (response.status === 200) {
          const res = response.data;
          console.log("filter:", res);
          for (let i = 0; i < res.length; i++) {
            if (res[i].name === headerslugurl) {
              setCategoryId(String(res[i].id));
              console.log("categoryId:", res[i].id);
              setTree(String(res[i].id));
            }
          }
        }
      })
      .catch((error) => {
        alert(error);
      });

  }, [headerslugurl]);

  function setTree(id) {
    console.log("setTree", id);
    api
      .get("products/categories", {
        per_page: 50
      })
      .then((response) => {
        if (response.status === 200) {
          const res = response.data;
          console.log("filter1:", res);
          for (let i = 0; i < res.length; i++) {
            // console.log(categoryId);
            if (String(res[i].parent) === id) {
              console.log("subCategory", res[i]);
              const treeDataObject = {
                title: res[i].name,
                value: res[i].slug,
                key: String(res[i].id),
              }
              setTreeData(treeData => [...treeData, treeDataObject]);
            }
          }
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  useEffect(() => {
    Loading.standard();
    async function fethdata() {
      await fetchProducts();
    }
    fethdata();
    Loading.remove();
    // console.log("product list", products);
    console.log(popularFilter);
  }, [count, headerslugurl, popularFilter]);

  let fetchProducts = () => {
    console.log("id:", categoryId);
    let data;
    {
      popularFilter === "Mest populär" &&

        api
          .get("products", {
            page: page,
            per_page: count,
            category: categoryId,
            // category: "495, 480",
            status: "publish",
          })
          .then((response) => {
            if (response.status === 200) {
              console.log("directly", response.data);
              data = response.data;
              setProducts(response.data);
              response.data.length === 0
                ? setCount(1)
                : setCount(response.data.length);

              setDisplayCount(response.data.length);
              return response.data;
            }
          })
    }

    {
      popularFilter === "Namn A~O" &&
        api
          .get("products", {
            page: page,
            per_page: count,
            orderby: "title",
            order: "asc",
            // category: categoryId,
            status: "publish",
          })
          .then((response) => {
            if (response.status === 200) {
              console.log("directly", response.data);
              data = response.data;
              setProducts(response.data);
              response.data.length === 0
                ? setCount(1)
                : setCount(response.data.length);

              setDisplayCount(response.data.length);
              return response.data;
            }
          })
          .catch((error) => { });
    }

    {
      popularFilter === "Lägsta pris" &&
        api
          .get("products", {
            page: page,
            per_page: count,
            orderby: "price",
            order: "asc",
            // category: categoryId,
            status: "publish",
          })
          .then((response) => {
            if (response.status === 200) {
              console.log("directly", response.data);
              data = response.data;
              setProducts(response.data);
              response.data.length === 0
                ? setCount(1)
                : setCount(response.data.length);

              setDisplayCount(response.data.length);
              return response.data;
            }
          })
          .catch((error) => { });
    }

    {
      popularFilter === "Högsta pris" &&
        api
          .get("products", {
            page: page,
            per_page: count,
            orderby: "price",
            // order: "desc",
            // category: categoryId,
            status: "publish",
          })
          .then((response) => {
            if (response.status === 200) {
              console.log("directly", response.data);
              data = response.data;
              setProducts(response.data);
              response.data.length === 0
                ? setCount(1)
                : setCount(response.data.length);

              setDisplayCount(response.data.length);
              return response.data;
            }
          })
          .catch((error) => { });
    }

    {
      popularFilter === "Senast Inkommet" &&
        api
          .get("products", {
            page: page,
            per_page: count,
            orderby: "date",
            status: "publish",
          })
          .then((response) => {
            if (response.status === 200) {
              console.log("directly", response.data);
              data = response.data;
              setProducts(response.data);
              response.data.length === 0
                ? setCount(1)
                : setCount(response.data.length);

              setDisplayCount(response.data.length);
              return response.data;
            }
          })
          .catch((error) => { });
    }

    console.log("data", data);
  };

  function loadmore() {
    setCount(count + 4);
    if (count >= 50) {
      setCount(12);
      setPage(page + 1);
    }
  }


  function onTreeSelect(value, node, extra) {
    console.log(value, node, extra);
  }

  return (

    <>
      <PageBanner
        image={Banner}
        title="Våra produkter"
        url1=""
        url2=""
        url3=""
      />
      <div className="w-full flex justify-between px-[3rem] py-[1rem]">

        {treeData.length > 1 ? (
          <div>
            <TreeSelect treeData={treeData} treeCheckable={true} style={{ width: "300px", color: "black" }} showCheckedStrategy={SHOW_PARENT} placeholder={'KATEGORI'} onSelect={() => onTreeSelect} />
          </div>
        ) : (
          <></>
        )}

        <div>
          <DropdownMenu trigger={popularFilter}>
            <DropdownItemRadioGroup id="actions">
              <DropdownItemRadio
                id={1}
                onClick={() => setPopularFilter("Namn A~O")}
                isSelected={popularFilter === "Namn A~O"}
              >
                Namn A~O
              </DropdownItemRadio>
              <DropdownItemRadio
                id={2}
                onClick={() => setPopularFilter("Lägsta pris")}
                isSelected={popularFilter === "Lägsta pris"}
              >
                Lägsta pris
              </DropdownItemRadio>
              <DropdownItemRadio
                id={3}
                onClick={() => setPopularFilter("Högsta pris")}
                isSelected={popularFilter === "Högsta pris"}
              >
                Högsta pris
              </DropdownItemRadio>
              <DropdownItemRadio
                id={4}
                onClick={() => setPopularFilter("Senast Inkommet")}
                isSelected={popularFilter === "Senast Inkommet"}
              >
                Senast Inkommet
              </DropdownItemRadio>
              <DropdownItemRadio
                id={5}
                onClick={() => setPopularFilter("Mest populär")}
                isSelected={popularFilter === "Mest populär"}
              >
                Mest populär
              </DropdownItemRadio>
            </DropdownItemRadioGroup>
          </DropdownMenu>
        </div>

      </div>

      <div className="w-full flex text-center pt-[3rem] justify-center">
        <p className="font-garamond font-normal text-[20px]">
          {displaycount} Produkter
        </p>
      </div>

      <div className="w-full flex justify-center pb-[4rem] pt-[3rem] flex-col items-center">
        <div className="w-full px-3">
          <div className="grid grid-cols-4 gap-y-10 gap-x-3">
            {products.map((product) => (
              <Product
                key={product?.id}
                id={product?.id}
                title={product?.name}
                price={product?.price}
                flag={product?.acf?.land}
                description={product?.description}
                weight={product?.acf?.vikt}
                img={product?.images[0]?.src}
                subimg={product?.images[1]?.src}
                url={product?.slug}
                type={product?.type}
              />
            ))}
          </div>
        </div>

        <div
          className=" mt-[50px] flex border-[2.5px] border-[#76351A] w-[246px] h-[65px] text-center items-center justify-center cursor-pointer"
          onClick={() => loadmore()}
        >
          <p className="font-garamond font-normal text-[20px]">LADDA FLER</p>
        </div>
      </div>

    </>
  );
}
