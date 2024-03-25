/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { Blocks, Radiation, SmartphoneNfc, SearchCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddRenwify = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data: any) => {
    try {
      // Upload image to imgbb
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const imgbbResponse = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          params: {
            key: "d2c54ff163b45c91f6a001f23886d677",
          },
        }
      );

      const imageUrl = imgbbResponse?.data?.data?.url;

      // Form data to be submitted
      const formDataToSubmit = {
        name: data.name,
        brand: data.brand,
        location: data.location,
        phone: data.phone,
        image: imageUrl,
        price: data?.price,
      };
      console.log(formDataToSubmit);
      fetch("https://techedge-server.vercel.app/api/v1/create-reverie", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(formDataToSubmit),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.acknowledged) {
            reset();
          }
        });

      // Log the response
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div>
      <div className="flex flex-row mt-20 gap-14 ">
        <div className="flex-1 hidden p-4 lg:block">
          <img src="https://images.unsplash.com/photo-1546027658-7aa750153465?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
          <p className="pt-6 pb-4 text-[18px]">
            We believe that product is a powerful tool for creating positive
            change in Bangladesh, and we are dedicated to providing
            opportunities for individuals to get involved and make a difference.
          </p>
          <ul className="grid grid-cols-2 gap-4 text-[18px]">
            <li className="flex items-center gap-2">
              <SearchCheck /> Fill Up form
            </li>
            <li className="flex items-center gap-2">
              <SearchCheck /> Contact With Members
            </li>
            <li className="flex items-center gap-2">
              <SearchCheck /> add your product
            </li>
            <li className="flex items-center gap-2">
              <SearchCheck /> Work with team
            </li>
          </ul>
        </div>
        <div className="flex-1 p-4 mr-6">
          <h1 className="pb-2 text-4xl font-bold text-center">Product Form</h1>
          <p className="pb-6 text-[18px]  text-gray-300 text-center">
            Please fill up this form and add your product
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pb-4">
              <label className="text-white text-[18px]">Name</label>
              <Input
                type="text"
                className="text-[18px] border-[#2b101f] p-6"
                {...register("name")}
              />
            </div>
            <div className="pb-4">
              <label className="text-white text-[18px]">brand</label>
              <Input
                type="text"
                className="text-[18px] border-[#2b101f] p-6"
                {...register("brand")}
              />
            </div>
            <div className="pb-4">
              <label className="text-white text-[18px]">location</label>
              <Input
                type="text"
                className="text-[18px] border-[#2b101f] p-6"
                {...register("location")}
              />
            </div>
            <div className="pb-4">
              <label className="text-white text-[18px]">phone</label>
              <Input
                type="text"
                className="text-[18px]  border-[#2b101f] p-6"
                {...register("phone")}
              />
            </div>

            <div className="pb-4">
              <label className="text-white text-[18px]">image</label>
              <Input
                type="file"
                className="text-[18px] border-[#2b101f] "
                {...register("image")}
              />
            </div>
            <div className="pb-4">
              <label className="text-white text-[18px]">price</label>
              <Input
                type="text"
                className="text-[18px] border-[#2b101f] p-6"
                {...register("price")}
              />
            </div>

            <div>
              <Button className="bg-sky-500">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRenwify;
