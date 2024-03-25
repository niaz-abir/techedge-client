import Timer from "@/component/timer/timer";
import { CalendarDays, CircleDollarSign, Slack, Star } from "lucide-react";
import Image from "next/image";

type TPlashSale = {
  _id: string;
  images: string;
  name: string;
  description: string;
  price: string;
};

const FlashSale = async () => {
  const res = await fetch(
    "https://techedge-server.vercel.app/api/v1/flash-sale",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  console.log(data);

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
