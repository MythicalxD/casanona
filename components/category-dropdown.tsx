"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Category } from "@/types";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <div className="" >
      {routes.map((route) => (
        <DropdownMenuItem key={route.href}>
          <Link key={route.href} href={route.href} className="p-2 m-1">
            {route.label}
          </Link>
        </DropdownMenuItem>
      ))}
    </div>
  );
};

export default MainNav;
