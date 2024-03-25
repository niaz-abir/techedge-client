import Timer from "@/component/timer/timer";
import { CalendarDays, CircleDollarSign, Slack, Star } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type TPlashSale = {
  _id: string;
  images: string;
  name: string;
  description: string;
  price: string;
};

const FlashSale = async () => {
  const res = await fetch("http://localhost:8000/api/v1/flash-sale", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);

  //     {
  //       id: "1",
  //       name: "Smartphone X",
  //       description: "A high-end smartphone with advanced features.",
  //       images:
  //         "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       price: 999,
  //       flashSale: true,
  //       createdAt: "2024-03-21T10:00:00Z",
  //     },
  //     {
  //       id: "1",
  //       name: "Smartphone X",
  //       description: "A high-end smartphone with advanced features.",
  //       images:
  //         "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       price: 999,
  //       flashSale: true,
  //       createdAt: "2024-03-21T10:00:00Z",
  //     },
  //     {
  //       id: "1",
  //       name: "Smartphone X",
  //       description: "A high-end smartphone with advanced features.",
  //       images:
  //         "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       price: 999,
  //       flashSale: true,
  //       createdAt: "2024-03-21T10:00:00Z",
  //     },
  //     {
  //       id: "1",
  //       name: "Smartphone X",
  //       description: "A high-end smartphone with advanced features.",
  //       images:
  //         "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       price: 999,
  //       flashSale: true,
  //       createdAt: "2024-03-21T10:00:00Z",
  //     },
  //     {
  //       id: "1",
  //       name: "Smartphone X",
  //       description: "A high-end smartphone with advanced features.",
  //       images:
  //         "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       price: 999,
  //       flashSale: true,
  //       createdAt: "2024-03-21T10:00:00Z",
  //     },
  //     {
  //       id: "1",
  //       name: "Smartphone X",
  //       description: "A high-end smartphone with advanced features.",
  //       images:
  //         "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       price: 999,
  //       flashSale: true,
  //       createdAt: "2024-03-21T10:00:00Z",
  //     },
  //   ];
  return (
    <section className="mt-14 m-6 lg:ml-8">
      <div className="flex items-center gap-8 pb-8">
        <h1 className="text-[24px]">All Flash Sale Product</h1>
        <Timer />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {data?.map((flashSale: TPlashSale) => (
          <div key={flashSale?._id}>
            <div className=" w-full pb-4 lg:pl-4 pl-14 rounded-md shadow-xl shadow-[#050508] dark:text-gray-100">
              <Image
                src={flashSale?.images}
                alt=""
                height={400}
                width={300}
              ></Image>
              <div className="mt-4 mb-6 ">
                <h2 className="text-[20px] flex items-center  gap-2 font-semibold ">
                  {flashSale?.name}
                </h2>
                <hr className="w-28 pb-4"></hr>

                <p className=" flex pb-2 text-gray-300 items-center gap-2">
                  <CircleDollarSign /> {flashSale?.price}
                </p>
                <p className=" pb-2 flex text-gray-300 items-center gap-2">
                  <Slack /> pixel
                </p>
                <p className=" pb-2 flex text-gray-300 items-center ">
                  rating : 4 <Star size={18} />
                </p>
                <p className=" flex text-gray-300 items-center gap-2">
                  <CalendarDays /> export: 12-06-2024
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlashSale;
