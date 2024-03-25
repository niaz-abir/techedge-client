import axios from "axios";
import { Trello } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Brand = () => {
  return (
    <section className="flex lg:flex-row flex-col gap-8 max-w-5xl mx-auto mt-14">
      <div className="p-4">
        <Image
          src="https://images.unsplash.com/photo-1621319332247-ce870cdad56c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          height={500}
          width={500}
        />
      </div>
      <div className=" mt-6 p-4">
        <h1 className=" text-2xl font-bold">Work with brand..</h1>
        <p className="text-gray-500 pb-8">We always try to work lot of brand</p>
        <div className="flex gap-6 pb-4">
          <Link href="product">
            <h1 className="bg-[#247BA0]  px-8 py-4  text-black font-bold flex gap-4 items-center">
              {" "}
              <Trello />
              Samsung
            </h1>
          </Link>
          <Link href="product">
            <h1 className="bg-[#247BA0] p-4  text-black font-bold flex gap-4 items-center">
              {" "}
              <Trello />
              Pixel
            </h1>
          </Link>
        </div>
        <div className="flex gap-6 pb-4">
          <Link href="product">
            <h1 className="bg-[#247BA0] px-8 py-4  text-black font-bold flex gap-4 items-center">
              {" "}
              <Trello />
              Apple
            </h1>
          </Link>
          <Link href="product">
            <h1 className="bg-[#247BA0] px-8 py-4  text-black font-bold flex gap-4 items-center">
              {" "}
              <Trello />
              Redmi
            </h1>
          </Link>
        </div>
        <div className="flex gap-6 pb-4">
          <Link href="product">
            <h1 className="bg-[#247BA0] px-8 py-4  text-black font-bold flex gap-4 items-center">
              {" "}
              <Trello />
              Nokia
            </h1>
          </Link>
          <Link href="product">
            <h1 className="bg-[#247BA0] px-8 py-4  text-black font-bold flex gap-4 items-center">
              {" "}
              <Trello />
              Sony
            </h1>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Brand;
