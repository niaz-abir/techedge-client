import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  CircleDollarSign,
  Disc3,
  Slack,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type TTrending = {
  _id: string;
  images: string;
  name: string;
  rating: string;
  price: string;
  brands: string;
};
const TrendingProduct = async () => {
  const res = await fetch("http://localhost:8000/api/v1/all-products", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  return (
    <section className="mt-24 ml-4 lg:ml-10">
      <div className="flex  flex-col lg:flex-row justify-between items-center">
        <div className="pb-8">
          <h1 className=" text-2xl font-bold pb-2 text-[#247AB0]">
            Trending product
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
            Nulla fringilla nunc in molestie feugiat. Nunc
          </p>
        </div>
        <div className="mr-14 mb-4 lg:mb-0">
          <Link href="/product">
            {" "}
            <Button className="bg-sky-600">See All</Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {data?.slice(0, 6).map((trending: TTrending) => (
          <div key={trending?._id}>
            <div className="pl-8 lg:pl-4 pb-8 rounded-md shadow-xl shadow-[#050508] dark:text-gray-100">
              <Image
                src={trending?.images}
                alt=""
                height={500}
                width={400}
              ></Image>
              <div className="mt-4 mb-6 ">
                <h2 className="text-[20px] flex items-center  gap-2 font-semibold ">
                  {trending?.name}
                </h2>
                <hr className="w-28 pb-4"></hr>

                <p className=" flex pb-2 text-gray-300 items-center gap-2">
                  <CircleDollarSign /> {trending?.price}
                </p>
                <p className=" pb-2 flex text-gray-300 items-center gap-2">
                  <Slack /> pixel
                </p>
                <p className=" pb-2 flex text-gray-300 items-center ">
                  rating : {trending?.rating} <Star size={18} />
                </p>
                <p className=" flex text-gray-300 items-center gap-2">
                  <CalendarDays /> export: 12-06-2024
                </p>
              </div>
              <h4 className="flex gap-5 items-center text-[#247AB0]">
                Trending in market
                <Disc3 />
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6"></div>
    </section>
  );
};

export default TrendingProduct;
