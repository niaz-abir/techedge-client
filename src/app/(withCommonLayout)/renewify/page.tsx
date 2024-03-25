import {
  Blocks,
  CalendarDays,
  CircleDollarSign,
  Slack,
  Star,
} from "lucide-react";
import Image from "next/image";
import React from "react";

type TItem = {
  _id: string;
  name: string;
  images: string;
  price: string;
};

const Renewify = async () => {
  const res = await fetch("http://localhost:8000/api/v1/reverie", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);

  return (
    <section className="mt-14 ml-4 lg:ml-8">
      <h1 className="text-2xl font-bold pl-4 pb-8">All refiew product</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {data?.map((item: TItem) => (
          <div key={item?._id}>
            <div className=" w-full pb-4 lg:pl-4 pl-14 rounded-md shadow-xl shadow-[#050508] dark:text-gray-100">
              <Image src={item?.images} alt="" height={400} width={300}></Image>
              <div className="mt-4 mb-6 ">
                <h2 className="text-[20px] flex items-center  gap-2 font-semibold ">
                  {item?.name}
                </h2>
                <hr className="w-28 pb-4"></hr>

                <p className=" flex pb-2 text-gray-300 items-center gap-2">
                  <CircleDollarSign /> {item?.price}
                </p>
                <p className=" pb-2 flex text-gray-300 items-center gap-2">
                  <Slack /> pixel
                </p>

                <p className=" flex pb-2 text-gray-300 items-center gap-2">
                  <CalendarDays /> export: 12-06-2024
                </p>
                <p className=" pb-2 flex text-gray-300 items-center ">
                  <Blocks size={18} /> : niaz abir post in
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Renewify;
