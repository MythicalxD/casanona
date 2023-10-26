import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import SaveDialog from "./save-dialog";

const HomeNav = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-gradient-to-r from-[#fff5f5] to-[#f1fff9] relative md:block hidden z-20">
        <div className="w-full h-full flex flex-grow items-center relative">
          <div className="gap-x-8 justify-center text-[#626262] text-md font-semibold absolute top-12 left-8 md:flex hidden">
            <Link href="/" passHref>
              Home
            </Link>
            <Link href="/product/1" passHref>
              Shop
            </Link>
            <Link href="/about" passHref>
              AboutUs
            </Link>
            <Link href="/catalogue" passHref>
              Catalogue
            </Link>
            <div className="lg:flex hidden">
              <Link href="/blogs/all" passHref>
                Blogs
              </Link>
            </div>
          </div>

          <div className="flex flex-grow"></div>
          <a href="/" className="ml-4 cursor-pointer block">
            <img className="w-[150px] h-[120px]" alt="logo" src="/logo.png" />
          </a>
          <div className="flex flex-grow"></div>

          <div className="md:flex hidden absolute top-12 right-8 justify-center items-center gap-x-2">
            <Link href="/cart">
              <div className="w-7 h-[23px] relative cursor-pointer">
                <ShoppingBag className="w-6 h-6" />
                <div className="left-[20px] top-[1px] absolute text-black text-[8px] font-bold"></div>
              </div>
            </Link>
            <SaveDialog />
            <Link href="/product/1">
              <div className="w-7 h-[23px] relative cursor-pointer">
                <Search className="w-6 h-6" />
                <div className="left-[20px] top-[1px] absolute text-black text-[8px] font-bold"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex h-[30px] md:hidden"></div>
      <div className="w-full h-[40px] md:hidden z-[20] bg-white fixed flex items-center px-2">
        <Link href="/">
          <img className="w-[90px] h-[40px]" alt="logo" src="/logo.svg" />
        </Link>
        <div className="flex gap-x-2 text-sm ml-2">
          <Link href="/" passHref>
            Home
          </Link>
          <Link href="/product/1" passHref>
            Shop
          </Link>
        </div>
        <div className="flex-grow"></div>
        <Link href="/cart">
          <div className="w-3 h-[23px] relative cursor-pointer mr-2">
            <ShoppingBag className="w-4 h-4 mt-1" />
          </div>
        </Link>
        <SaveDialog />
      </div>
    </div>
  );
};

export default HomeNav;
