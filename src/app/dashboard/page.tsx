import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Eye, ShoppingCart } from "lucide-react";

const Dashboard = async () => {
  const res = await fetch(
    "https://techedge-server.vercel.app/api/v1/all-products",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  type TDonationItem = {
    _id: string;
    images: string;
    name: string;
    rating: string;
    price: string;
    brands: string;
  };
  return (
    <div className="grid grid-cols-12 mt-10 ml-8 ">
      <div className="col-span-2  ">
        <h1 className=" bg-sky-700 p-2 w-36 mt-4 flex gap-4 items-center">
          <ShoppingCart /> Al Products
        </h1>
      </div>
      <div className=" col-span-10 h-[200vh] ">
        <h1 className="text-2xl hidden font-semibold pb-8 lg:flex gap-4 items-center pt-4">
          Show all products <Eye />
        </h1>
        <Table className="bg-[#060607] ">
          <TableHeader>
            <TableRow className="text-white text-[18px]">
              <TableHead className="w-[300px]">Items</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Ratings</TableHead>

              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item: TDonationItem) => (
              <TableRow key={item._id} className="text-white text-[18px]">
                <TableCell className="font-medium flex gap-2 items-center">
                  {" "}
                  <Image
                    src={item?.images}
                    alt=""
                    height={80}
                    width={80}
                  ></Image>
                  {item.name}
                </TableCell>
                <TableCell>{item.brands}</TableCell>
                <TableCell>{item.rating}</TableCell>
                <TableCell> ${item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Dashboard;
