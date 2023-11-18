import Image from "next/image";
import React from "react";
import img1 from "/src/Assets/express-delivery-girl-receiving-parcel-home-banner-982x500.webp";
import img2 from "/src/Assets/e48c0fQFSvc0u34DhR6wOyUD3EsNX2tHC6E3VLw5.webp";
import img3 from "/src/Assets/oct-promo.jpg";
import { Carousel } from "antd";
const SliderItem = () => {
  return (
    <div className="sm:mt-5 w-full">
      <Carousel autoplay effect="fade">
        <div className="">
          <Image
            src={img1}
            alt=""
            className="mx-auto h-[450px] container max-w-7xl"
          />
        </div>
        <div>
          <Image
            src={img2}
            alt=""
            className="mx-auto container max-w-7xl h-[450px]"
          />
        </div>
        <div>
          <Image
            src={img3}
            alt=""
            className="mx-auto container max-w-7xl h-[450px]"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default SliderItem;
