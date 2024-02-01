"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  items: {
    id: number;
    title: string;
    image: string;
  }[];
}

const settings = {
  dots: false,
  infinite: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 1,
        infinite: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
  ],
};

const Caraousel = ({ items }: Props) => {
  return (
    <div className="">
      <Slider {...settings}>
        <div className="flex flex-row border border-[red]">
          {items.map((item) => (
            <>
              <div className="flex flex-col items-center">
                <div className=" flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={25}
                    height={25}
                  />
                </div>
                <p className="mt-2 text-center text-sm">{item.title}</p>
              </div>
            </>
          ))}
        </div>
      </Slider>
    </div>
  );
};

export default Caraousel;
