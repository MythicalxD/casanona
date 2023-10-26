"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";
import { API_URL_IMAGE } from "../../utils/urls";

import GalleryTab from "@/components/gallery/gallery-tab";
import { ShoppingCartIcon, X } from "lucide-react";
import ImageZoom from "../imageZoom";
import { useState } from "react";

const Gallery = (product: any) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="md:w-[465px] md:h-[472px] h-[450px] relative mt-4 cursor-pointer rounded-[20px] shadow-xl">
      <div className="md:w-[427px] md:h-[336px] left-[16px] top-0 absolute bg-neutral-100 rounded-[20px] shadow-xl"></div>
      <div className="w-10 h-10 left-[371px] top-[21px] absolute bg-rose-500 rounded-full md:block hidden" />
      <div className="left-[13px] top-[350px] absolute text-zinc-700 text-4xl font-semibold">
        {product.product.attributes.name}
      </div>
      <div className="left-[16px] md:top-[431px] top-[400px] absolute text-black text-2xl font-semibold">
        ₹{product.product.attributes.price}
      </div>
      <div className="left-[405px] md:top-[431px] top-[400px] md:absolute md:block hidden text-black text-2xl font-semibold">
        4.8
      </div>
      <div className="w-full h-[26px] left-[15px] top-[395px] md:absolute md:block hidden text-zinc-600 text-base font-normal">
        {product.product.attributes.name}
      </div>
      <Image
        alt="Image"
        src="/star.png"
        width="1"
        height="1"
        className="left-[380px] top-[435px] md:absolute hidden aspect-square object-cover rounded-md h-5 w-5"
        unoptimized
      />
      <ShoppingCartIcon className="h-5 w-5 text-white absolute left-[380px] top-[31px]" />

      <Tab.Group as="div" className="flex flex-col-reverse">
        {/* bottom options */}
        <div className="mx-auto mt-6 hidden max-w-2xl w-full sm:block lg:max-w-null ml-4">
          <Tab.List className="grid grid-cols-6 gap-6">
            {product.product.attributes.images.data.map((image: any) => (
              <GalleryTab key={image.id} image={image} />
            ))}
          </Tab.List>
        </div>
        {/* Badi image */}
        <Tab.Panels className="aspect-square w-full">
          {product.product.attributes.images.data.map((image: any) => (
            <Tab.Panel key={image.id}>
              <div className="md:w-[427px] md:h-[336px] left-[16px] top-0 absolute bg-neutral-100 rounded-[20px] shadow-xl">
                <div>
                  <img
                    src={`${API_URL_IMAGE}${image.attributes.url}`}
                    alt={product.product.attributes.name}
                    className="object-cover object-center rounded-[20px] w-[427px] h-[336px]"
                    onClick={openDialog}
                  />
                  {isDialogOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="bg-white p-2 flex flex-col justify-center items-center rounded-lg shadow-lg w-[700px] h-[700px] border-black border-2">
                        <div
                          className="w-full flex justify-end items-end mb-2"
                          onClick={closeDialog}
                        >
                          <X className="w-[25px] h-[25px]" />
                        </div>
                        <ImageZoom
                          src={`${API_URL_IMAGE}${image.attributes.url}`}
                          alt="Zoomable Image"
                        />
                        <p className="text-center font-bold text-2xl pt-2">
                          {product.product.attributes.name}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Gallery;
