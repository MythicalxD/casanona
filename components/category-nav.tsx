"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { orbitron } from "../utils/font";

import { Category } from "@/types";
import React from "react";

interface CategoryNavProps {
  data: Category[];
}

const CategoryNav: React.FC<CategoryNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex items- justify-center space-x-4 lg:space-x-6">
      {routes.map((route, index) => (
        <React.Fragment key={route.href}>
          {index !== 0 && ( // Add the separator only for elements other than the first one
            <div className="border-l border-gray-500 h-8 my-auto"></div>
          )}
          <Link
            href={route.href}
            className={cn(
              "flex flex-col text-3xl font-medium transition-colors hover:text-black",
              route.active ? "text-black" : "text-neutral-500",
              orbitron.className
            )}
          >
            <div className="relative">
              <div className="absolute top-0 right-0 text-[0.8rem] font-bold text-black">
                (3)
              </div>
              <div className="mt-4 mr-4">{route.label}</div>
            </div>
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default CategoryNav;
