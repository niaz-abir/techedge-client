"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Hero = () => {
  const carouselImage = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1604409273943-ed5b1a083a51?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1530275827625-8bab90311efd?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1566492625401-af879a7559f0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1553011433-17f9aa3d95b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="mt-20 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-4xl text-[#247BA0] font-bold">
          Designing Serenity, Transforming Environments. Your Space, Your Unique
          Expression!
        </h2>
        <p className="mt-8 text-[18px] text-[#69676b] text-center">
          Mobile devices have become an integral part of modern life, serving as
          essential tools for communication, productivity, entertainment, and
          more. From smartphones to tablets and wearables, these devices
          continue to revolutionize how individuals interact with the digital
          world.
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <Carousel className="w-full hidden lg:block max-w-3xl">
          <CarouselContent className="-ml-1 ">
            {carouselImage?.map((carosuel) => (
              <CarouselItem
                key={carosuel?.id}
                className="pl-1  md:basis-1/2 lg:basis-1/3  "
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex  aspect-square items-center justify-center p-6">
                      <Image
                        src={carosuel?.image}
                        alt=""
                        height={600}
                        width={600}
                      ></Image>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
