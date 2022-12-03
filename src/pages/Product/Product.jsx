import {
  Information,
  SingleImage,
  MultiImage,
  Description,
  BrandInfo,
  BrandGuide,
  Similar,
} from "./Sections/index";
import ProductGallery from "../../components/ProductGallery/ProductGallery";
import "./Product.css";
import api from "../../components/api/woocommerce";

import ImageWide from "./../../assets/images/test-product/img-2.png";
import ImageOne from "./../../assets/images/test-product/img-1.png";
import ImageTwo from "./../../assets/images/test-product/img-0.png";
import ImageThree from "./../../assets/images/test-product/img-3.png";
import ImageFour from "./../../assets/images/test-product/img-4.png";

import BrandLogo from "./../../assets/icons/brand-logo/green.svg";
import BrandImage from "./../../assets/images/big-green-egg/BrandImage.png";

import GuideOne from "./../../assets/images/img-0.png";
import GuideTwo from "./../../assets/images/img-1.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [product, setProduct] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    async function fethdata() {
      await fetchProducts();
    }
    fethdata();
  }, []);

  let fetchProducts = async () => {
    const res = await api.get("products", {
      slug: id,
    });
	console.log(res.data);
    setProduct(res.data);
  };

  return (
    <>
      <div
        className="w-full h-screen flex snap-y justify-center costum-height mt-[124px]"
        id="product"
      >
        <div className="w-[50vw] bottom-0 inline-block snap-proximity snap-y overflow-hidden">
          <div className="w-full h-[200vh] overflow-x-hidden box-content flex flex-wrap overflow-y-scroll snap-y">
            <SingleImage
              ImageWide={product[0]?.images[0]?.src}
              onClick={(index) => {
                setIndex(index);
                setShow(true);
              }}
            />
            <MultiImage
              ImageOne={ImageOne}
              ImageTwo={ImageTwo}
              ImageThree={ImageThree}
              ImageFour={ImageFour}
              onClick={(index) => {
                setIndex(index);
                setShow(true);
              }}
            />
          </div>
        </div>
        <div className="w-2/4 h-screen sticky top-0 product-info-css">
          <Information id = {product[0]?.id} size={product[0]?.attributes[0]?.option_ids} code={product[0]?.acf?.land} title={product[0]?.name} price={product[0]?.price} description={product[0]?.description} type = {product[0]?.type} variations = {product[0]?.variations}/>
        </div>
      </div>

      <Description></Description>
      <BrandInfo LogoBrand={BrandLogo} ImgBrand={BrandImage}></BrandInfo>
      <BrandGuide
        ImgGuideOne={GuideOne}
        TitleGuideOne="Grill Guiden"
        TextGuideOne="Det är viktigt att du har koll på din grill för att köttet ska bli perfekt. Här hittar du guider om alla våra grillar i hela sortimentet. Allt från heta tips till senaste skvallret."
        ImgGuideTwo={GuideTwo}
        TitleGuideTwo="Kött guiden"
        TextGuideTwo="Här hittar du enkla tips och råd för innertemperaturer till allt från oxfilé, fläskfilé, entrecôte, lamm, nötkött och griskött - Iberico Bellotakött."
      ></BrandGuide>
      <Similar></Similar>

      <ProductGallery
        images={[ImageWide, ImageOne, ImageTwo, ImageThree, ImageFour]}
        show={show}
        setShow={setShow}
        index={index}
      />
    </>
  );
}

export default Product;
