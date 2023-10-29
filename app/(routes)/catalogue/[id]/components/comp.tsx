"use client";
import GalleryTab from "@/components/gallery/gallery-tab";
import { API_URL_IMAGE } from "@/utils/urls";
import { Tab } from "@headlessui/react";
import {
  FacebookIcon,
  InstagramIcon,
  MessageCircle,
  TwitterIcon,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { MouseEventHandler, useState } from "react";

const Comp = (product: any) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const router = useRouter();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    router.push("/catalogue");
  };

  return (
    <div>
      <div className="flex md:flex-row flex-col md:items-center items-start h-[90vh] md:ml-12 m-4">
        <Tab.Group as="div" className="flex flex-col-reverse">
          {/* bottom options */}
          <div className="mx-auto mt-6 hidden max-w-2xl w-full sm:block lg:max-w-null ml-4">
            <Tab.List className="grid grid-cols-6 gap-6">
              {product.product[0].attributes.images.data.map((image: any) => (
                <GalleryTab key={image.id} image={image} />
              ))}
            </Tab.List>
          </div>
          {/* Badi image */}
          <Tab.Panels className="">
            {product.product[0].attributes.images.data.map((image: any) => (
              <Tab.Panel key={image.id}>
                <div className="md:w-[650px] md:h-[513px] bg-neutral-100 rounded-[5px] shadow-xl">
                  <div>
                    <img
                      src={`${API_URL_IMAGE}${image.attributes.url}`}
                      alt={product.product[0].attributes.name}
                      className="object-cover object-center rounded-[5px] w-[650px] h-[513px]"
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
                          <img
                            src={`${API_URL_IMAGE}${product.product[0].attributes.images.data[0].attributes.url}`}
                            alt={product.product[0].attributes.name}
                            className="object-cover object-center rounded-[10px] md:w-[650px] md:h-[600px]"
                          />
                          <p className="text-center font-bold text-2xl pt-2">
                            {product.product[0].attributes.name}
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

        <div className="flex flex-col ml-[50px] mt-[-150px]">
          <div className="mt-3 flex items-center justify-start">
            <h1 className="text-3xl font-bold text-gray-900">
              {product.product[0].attributes.name}
            </h1>
          </div>
          <div className="flex items-center gap-x-4">
            <h3 className="text-gray-500 max-w-[500px] mt-2 mb-2 text-xl">
              {product.product[0].attributes.description}
            </h3>
          </div>
          <div className="flex items-center gap-x-2">
            <h3 className="text-gray-600">Size:</h3>
            <p>{product.product[0].attributes.size}</p>
          </div>
          <div className="w-[251px] h-[45px] mt-4 ml-[25px] flex justify-center items-center gap-x-4">
            <button
              className="w-[118px] h-[45px] cursor-pointer mt-[30px]"
              onClick={onAddToCart}
            >
              <div className="w-[158px] h-[45px] bg-gradient-to-br from-slate-600 to-slate-800 rounded-[14px] flex items-center justify-center">
                <div className="text-center text-amber-400 text-xs font-bold">
                  CUSTOM BUILD THIS
                </div>
              </div>
            </button>

            <div className="w-[118px] h-9 cursor-pointer mt-[30px] ml-[50px]">
              <div className="w-[118px] h-9 rounded-[33px] border border-slate-600 flex items-center justify-center">
                <div className="text-center text-stone-500 text-[10px] font-bold">
                  Add to wish list
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-[30px] ml-[-10px]">
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
        </div>
      </div>
    </div>
  );
};

export default Comp;
