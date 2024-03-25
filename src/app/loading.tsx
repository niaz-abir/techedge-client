import { Loader } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex  justify-center text-4xl mt-24 font-bold">
      <h1 className="flex gap-4 items-center">
        It is loading here <Loader />
        .........{" "}
      </h1>
    </div>
  );
};

export default Loading;
