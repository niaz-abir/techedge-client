import { Button } from "@/components/ui/button";
import { CalendarDays, CircleDollarSign, Slack, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
      next: {
        revalidate: 30,
      },
    }
  );
  const data = await res.json();

  return (
    <section className="mt-24 ml-4 mr-4 lg:ml-8 lg:mr-8">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="pb-8 pl-4">
          <h1 className=" text-2xl font-bold pb-2 text-[#247AB0]">
            Flash sale product
          </h1>
          <p>
            Here are all flash sale product here. You can buy it easily Lorem
            <br></br>
            and share with you family.
          </p>
        </div>
        <div className="mb-2 ml-4 lg:ml-0 pb-4 lg:mb-0">
          <Link href="/flash-sale ">
            <Button className=" bg-sky-700 rounded-md ">View All</Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4  ">
        {data?.slice(0, 4).map((flashSale: TPlashSale) => (
          <div key={flashSale?._id}>
            <div className=" w-full  pb-4 lg:pl-4 pl-14 rounded-md shadow-xl shadow-[#050508] dark:text-gray-100">
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
