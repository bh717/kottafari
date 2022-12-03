import { Link } from "react-router-dom";
import Image from "./../../assets/images/banners/delivery.png";
import { Information, Cart } from "./index";
import { PageBanner } from "./../../reusable/index";
import Banner from "./../../assets/images/banners/hero-image.png";

export default function Example() {
  return (
    <>
      <PageBanner
        image={Banner}
        title="Våra produkter"
        url1=""
        url2=""
        url3=""
      />

      <div className="w-full flex justify-center min-h-screen bg-[#FBFAF4]">
        <div className="flex w-full">
          {/* Buyer input of information */}
          <div className="w-[60%] min-w-[30rem] bg-[#FBFAF4]">
            <div className="w-full px-[4%]">
              <Information />
            </div>
          </div>

          {/* Cart information */}
          <div className="w-[40%] bg-[#ffffff]">
            <div className="w-full px-[4%]">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
