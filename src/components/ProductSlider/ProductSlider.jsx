/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import Product from "../../reusable/Product/Product";
import "./ProductSlider.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1536 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1536, min: 1280 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 1280, min: 768 },
    items: 2,
  },
};

function ProductSlider({ products }) {
  const [state, setState] = useState({ additionalTransfrom: 0 });

  useEffect(() => {
    console.log("lengsdfth:", products);
  });

  const toNext = () => {
    let rightBtn = document.getElementsByClassName(
      "react-multiple-carousel__arrow--right"
    );
    if (rightBtn.length > 0) {
      rightBtn[0].click();
    }
  };

  const toPrev = () => {
    let leftBtn = document.getElementsByClassName(
      "react-multiple-carousel__arrow--left"
    );
    if (leftBtn.length > 0) {
      leftBtn[0].click();
    }
  };

  return (
    <div className="product-slider-container mb-12 lg:mb-8">
      <Carousel
        ssr={false}
        partialVisbile={false}
        itemClass="slider-image-item"
        responsive={responsive}
        containerClass="carousel-container-with-scrollbar"
        infinite={false}
        slidesToSlide={1}
      >
        {products[0].id ? (
          products.map((o, idx) => {
            return (
              <div className="image-container increase-size" key={`pd${idx}`}>
                <Product
                  id={o?.id}
                  title={o?.name}
                  price={o?.price}
                  flag={o?.acf?.land}
                  description={o?.description}
                  weight={o?.acf?.vikt}
                  img={o?.images[0]?.src}
                  subimg={o?.images[1]?.src}
                  url={o?.slug}
                  type={o?.type}
                />
              </div>
            );
          })
        ) : (
          <></>
        )}
      </Carousel>
      <button className="product-slider-prev-btn" onClick={toPrev} />
      <button className="product-slider-next-btn" onClick={toNext} />
    </div>
  );
}

export default ProductSlider;
