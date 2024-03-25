import Image from "next/image";

import { Star, CirclePlay, Telescope } from "lucide-react";

type TParams = {
  productId?: string;
};
// type mobile = {
//   _id: string;
//   mobile: string;
// };

// export async function generateStaticParams() {
//   const mobile = await fetch(
//     "https://techedge-server.vercel.app/api/v1/all-products"
//   ).then((res) => res.json());

//   const firstTenMobile = mobile.slice(0, 10);

//   return firstTenMobile.map((mobile: mobile) => ({
//     mobileId: mobile?._id,
//   }));
// }

const ProductId = async ({ params }: { params: TParams }) => {
  const res = await fetch(
    `https://techedge-server.vercel.app/api/v1/all-products/${params?.productId}`,
    {
      cache: "no-store",
    }
  );
  console.log(params?.productId);
  const product = await res.json();

  return (
    <section className="mt-14 ml-8">
      <div className="flex flex-col lg:flex-row gap-24 ">
        <div>
          <Image src={product?.images} height={600} width={600} alt=""></Image>
        </div>
        <div className="mr-6 flex-1">
          <h2 className="text-2xl pb-6 font-semibold ">{product?.name}</h2>
          <div className="flex gap-4 items-center pb-2">
            <h1 className="text-3xl">$54.98</h1>
            <ul className="flex ">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </ul>
          </div>
          <p className="pb-6 lg:w-[600px] w-[500px] ">
            This product in lauch by nearly . And hope to do it great,<br></br>{" "}
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn.
            Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magn.{" "}
          </p>
          <div>
            <h3>1.product update at nearly.And do it</h3>
            <h3>2.Customer want it more in time</h3>
            <h3>3.stock clear eagerly before keep</h3>
          </div>
          <div className="mt-6">
            <h3 className="flex gap-4 items-center pb-2">
              <Telescope /> Free worldwide shipping on all orders over $100
            </h3>
            <h3 className="flex gap-4 items-center">
              <CirclePlay /> Free worldwide shipping on all orders over $100
            </h3>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <h1 className="text-2xl pb-4">Description</h1>
        <p className="pb-8 w-[1200px]">
          A good product description should focus on the product s features and
          benefits. Obviously, the features are a bit more clear cut. The
          benefits will require a bit more creativity and understanding of your
          target audience. However, both features and benefits allow for
          creative writing. This product in lauch by nearly . And hope to do it
          great, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn.
          Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magn.{" "}
        </p>
        <ul className=" space-y-2 pb-8">
          <li>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </li>
          <li>
            It is a long established fact that a reader will be distracted by
            the readable content
          </li>
          <li>
            it has a more-or-less normal distribution of letters, as opposed to
            using Content here,
          </li>
          <li>Many desktop publishing packages and web page editors</li>
        </ul>
      </div>
    </section>
  );
};

export default ProductId;
