import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import Image from "next/image";

const ProductCarousel = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:h-screen flex flex-col justify-center">
      <Carousel className="flex-3">
        <CarouselContent>
          <CarouselItem>
            <div className="bg-white shadow-md rounded-lg p-1">
              <Image
                alt="Product 1"
                className="rounded-lg"
                height="600"
                src="/images/furlers/flexible-furler-1.jpg"
                style={{
                  aspectRatio: "600/600",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-white shadow-md rounded-lg p-1">
              <Image
                alt="Product 1"
                className="rounded-lg"
                height="600"
                src="/images/furlers/flexible-furler-2.jpg"
                style={{
                  aspectRatio: "600/600",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-white shadow-md rounded-lg p-1">
              <Image
                alt="Product 1"
                className="rounded-lg"
                height="600"
                src="/images/furlers/flexible-furler-5.jpg"
                style={{
                  aspectRatio: "600/600",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-white shadow-md rounded-lg p-1">
              <Image
                alt="Product 1"
                className="rounded-lg"
                height="600"
                src="/images/furlers/flexible-furler-4.jpg"
                style={{
                  aspectRatio: "600/600",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="bg-white shadow-md rounded-lg p-1">
              <Image
                alt="Product 1"
                className="rounded-lg"
                height="600"
                src="/images/furlers/flexible-furler-3.jpg"
                style={{
                  aspectRatio: "600/600",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
