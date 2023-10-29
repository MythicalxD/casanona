"use client";
import {
  FacebookIcon,
  InstagramIcon,
  MessageCircle,
  TwitterIcon,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { MouseEventHandler, SetStateAction, useState } from "react";
import useCart from "@/hooks/use-cart";

const InfoPage = (data: any) => {
  const cart = useCart();

  // handel selections
  const [selectedFabric, setSelectedFabric] = useState(
    data?.data.attributes.fabrics.data[0].attributes.name
  );
  const [selectedColor, setSelectedColor] = useState(
    data?.data.attributes.colors.data[0].attributes.name
  );

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    // change data here
    data.data.attributes.id = data.data.id;
    data.data.id = data.data.id + "_" + selectedColor + "_" + selectedFabric;
    data.data.attributes.selectedColor = selectedColor;
    data.data.attributes.selectedFabric = selectedFabric;

    // add data to the cart
    cart.addItem(data.data);
  };

  return (
    <div className="flex flex-col">
      <div className="mt-3 flex items-end justify-between">
        <h1 className="text-xl text-gray-700">1 review</h1>
      </div>
      <div className="mt-3 flex items-center justify-start">
        <h1 className="text-3xl font-bold text-gray-900">
          {data.data.attributes.name} •
        </h1>
        <p className="text-2xl text-grey-900 ml-2 mt-1">
          ₹{data?.data.attributes.price}
        </p>
      </div>
      <div className="flex items-center gap-x-4">
        <h3 className="text-gray-500 max-w-[500px] mt-2 mb-2 text-md">
          {data.data.attributes.description}
        </h3>
      </div>
      <div className="flex items-center gap-x-2">
        <h3 className="font-semibold text-black">Colors:</h3>
        {data?.data.attributes.colors.data.map((item: any) => (
          <div
            className="h-6 w-6 rounded-full border border-grey-600"
            style={{ backgroundColor: item.attributes.name }}
            key={item.id}
            id={item.id}
          />
        ))}

        <h3 className="text-gray-600 ml-2">Size:</h3>
        <p>{data.data.attributes.size}</p>
      </div>

      <div className="flex gap-x-4">
        <p className="mt-2">Selected Color: {selectedColor}</p>
        <p className="mt-2">Selected fabric: {selectedFabric}</p>
      </div>

      {/* dropdow geadleds ui */}

      <div className="flex mt-4 gap-x-4">
        <Select onValueChange={setSelectedColor}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Color" />
          </SelectTrigger>
          <SelectContent>
            {data?.data.attributes.colors.data.map((item: any) => (
              <SelectItem value={item.attributes.name} key={item.id}>
                <div className="flex gap-x-2">
                  <div
                    className="p-2 w-6 rounded-sm flex border-black border"
                    style={{ backgroundColor: item.attributes.value }}
                  />
                  {item.attributes.name}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setSelectedFabric}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Fabric Type" />
          </SelectTrigger>
          <SelectContent>
            {data?.data.attributes.fabrics.data.map((item: any) => (
              <SelectItem value={item.attributes.name} key={item.id}>
                {item.attributes.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* end here */}

      <div className="flex mt-4">
        <div className="m-2 p-2 border-2 border-[#595475] rounded-lg  w-11 h-11 items-center justify-center flex cursor-pointer">
          <InstagramIcon className="h-5 w-5 text-[#302C46]" />
        </div>
        <div className="m-2 p-2 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg w-11 h-11 items-center justify-center flex cursor-pointer">
          <FacebookIcon className="h-5 w-5 text-white" />
        </div>
        <div className="m-2 p-2 border-2 border-[#595475] rounded-lg  w-11 h-11 items-center justify-center flex cursor-pointer">
          <TwitterIcon className="h-5 w-5 text-[#302C46]" />
        </div>
        <div className="m-2 p-2 border-2 border-[#595475] rounded-lg  w-11 h-11 items-center justify-center flex cursor-pointer">
          <MessageCircle className="h-5 w-5 text-[#302C46]" />
        </div>
      </div>

      <div className="w-[251px] h-[45px] mt-4 flex justify-center items-center gap-x-4">
        <button
          className="w-[118px] h-[45px] cursor-pointer"
          onClick={onAddToCart}
        >
          <div className="w-[118px] h-[45px] bg-gradient-to-br from-slate-600 to-slate-800 rounded-[14px] flex items-center justify-center">
            <div className="text-center text-amber-400 text-xs font-bold">
              ADD TO CART
            </div>
          </div>
        </button>

        <div className="w-[118px] h-9 cursor-pointer">
          <div className="w-[118px] h-9 rounded-[33px] border border-slate-600 flex items-center justify-center">
            <div className="text-center text-stone-500 text-[10px] font-bold">
              Add to wish list
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
