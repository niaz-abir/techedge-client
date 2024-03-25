import { Blocks } from "lucide-react";
import React from "react";

const WhatWeDo = () => {
  return (
    <section className="mt-8">
      <div className="dark:bg-gray-100 dark:text-gray-800">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center mx-auto ">
            <h2 className="text-3xl font-extrabold sm:text-4xl text-[#247BA0]">
              What We do
            </h2>
            <p className="mt-4 text-lg dark:text-gray-600">
              Pellentesque viverra, leo id euismod laoreet, nunc risus molestie
              orci, vel faucibus quam justo id mauris.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            <div className="flex shadow shadow-sky-500 p-4">
              <div className="ml-3">
                <dt className="text-lg font-medium flex items-center gap-2">
                  {" "}
                  <Blocks /> Sell Product
                </dt>
                <dd className="mt-2 dark:text-gray-600">
                  Lorem mollis rutrum efficitur, lectus velit pharetra elit, et
                  dictum purus nibh auctor velit.
                </dd>
              </div>
            </div>
            <div className="flex shadow shadow-sky-500 p-4">
              <div className="ml-3">
                <dt className="text-lg font-medium flex items-center gap-2">
                  {" "}
                  <Blocks />
                  Buy Product
                </dt>
                <dd className="mt-2 dark:text-gray-600">
                  Cras a mauris tincidunt, scelerisque justo sit amet, hendrerit
                  est. Fusce venenatis diam fringilla metus convallis,
                </dd>
              </div>
            </div>
            <div className="flex shadow shadow-sky-500 p-4">
              <div className="ml-3">
                <dt className="text-lg font-medium flex items-center gap-2">
                  <Blocks /> Home Delivery
                </dt>
                <dd className="mt-2 dark:text-gray-600">
                  Curabitur molestie neque ac massa pulvinar, nec sollicitudin
                  nunc consequat. Donec mattis orci eros, vitae porttitor risus
                </dd>
              </div>
            </div>
            <div className="flex shadow shadow-sky-500 p-4">
              <div className="ml-3">
                <dt className="text-lg font-medium flex items-center gap-2">
                  <Blocks size={24} />
                  Community grow
                </dt>
                <dd className="mt-2 dark:text-gray-600">
                  Cras ac lectus erat. Curabitur condimentum luctus nisi, non
                  lacinia ipsum.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
