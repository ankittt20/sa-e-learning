import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {};

const caraouselItems = [
  {
    id: 1,
    title: "Black Friday Sale",
    image: "/assets/icons/refresh.svg",
  },
  {
    id: 2,
    title: "C Programming",
    image: "/assets/icons/c.png",
  },
  {
    id: 3,
    title: "React",
    image: "/assets/icons/react.png",
  },
  {
    id: 4,
    title: "C Programming",
    image: "/assets/icons/c1.svg",
  },
  {
    id: 5,
    title: "Java",
    image: "/assets/icons/java.png",
  },
  {
    id: 6,
    title: "Operating System",
    image: "/assets/icons/os.svg",
  },
  {
    id: 7,
    title: "CSS",
    image: "/assets/icons/css.png",
  },
  {
    id: 8,
    title: "C Programming",
    image: "/assets/icons/c2.svg",
  },
];

const LanguagesCaraousel = (props: Props) => {
  return (
    <div className="mt-12 px-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {caraouselItems.map((item) => (
            <CarouselItem className="basis-1/2 sm:basis-[15%] cursor-pointer" key={item.id}>
              <div className="flex flex-col  justify-center items-center text-center">
                <img className="w-6 h-6" src={item.image} alt={item.title} />
                <p className="text-xs">{item.title}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="rounded-md bg-[#f4f4f4] border-none" />
        <CarouselNext className="rounded-md bg-[#f4f4f4] border-none" />
      </Carousel>
    </div>
  );
};

export default LanguagesCaraousel;
