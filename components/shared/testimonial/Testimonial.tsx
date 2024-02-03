import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";

type Props = {};

const Testimonial = (props: Props) => {
  return (
    <div className="justify-center text-center items-center">
      <h1 className="text-2xl sm:text-5xl mb-16">What our happy Students say about us</h1>
      <div>
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent>
            <CarouselItem className="sm:basis-1/3">
              <TestimonialCard />
            </CarouselItem>
            <CarouselItem className="sm:basis-1/3">
              <TestimonialCard />
            </CarouselItem>
            <CarouselItem className="basis-auto sm:basis-1/3">
              <TestimonialCard />
            </CarouselItem>
            <CarouselItem className="sm:basis-1/3">
              <TestimonialCard />
            </CarouselItem>
            <CarouselItem className="sm:basis-1/3">
              <TestimonialCard />
            </CarouselItem>
            <CarouselItem className="sm:basis-1/3">
              <TestimonialCard />
            </CarouselItem>
          </CarouselContent>
          <div className="space-x-2">
            <CarouselDots />
            <CarouselDots />
            <CarouselDots />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
