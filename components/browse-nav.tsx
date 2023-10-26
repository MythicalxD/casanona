"use client";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import SearchBar from "./searchBar";
import {
  Armchair,
  BedDouble,
  BedSingle,
  Bed,
  LampCeiling,
  LampDesk,
  LampFloor,
  LampWallDown,
  LampWallUp,
  Lamp,
  RockingChair,
  Sofa,
  DoorClosed,
  DoorOpen,
  UtensilsCrossed,
  Printer,
} from "lucide-react";

interface SubCategory {
  id: string;
  attributes: {
    icon: string;
    description: string;
    slug: string;
    name: string;
  };
}

interface Category {
  id: string;
  attributes: {
    products: any;
    name: string;
    sub_categories: { data: SubCategory[] };
  };
}

interface NestedDropdownProps {
  data: Category[];
  arrivals: any;
}

const BrowseNav: React.FC<NestedDropdownProps> = ({ data, arrivals }) => {
  return (
    <div className="justify-center items-center pb-2 pt-2 md:flex hidden z-10">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>NEW ARRIVAL</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex relative h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/category/all/1"
                    >
                      <LampCeiling
                        className={`w-[45px] h-[45px] p-2 rounded z-20 text-white`}
                      />
                      <div className="w-full h-full absolute top-0 left-0 z-10 bg-[#000000b7] rounded-lg" />
                      <img
                        src="/bg_cover.png"
                        className="w-full h-full rounded-lg absolute left-0 top-0"
                        alt="Cover Image"
                      />

                      <p className="text-sm leading-tight text-white z-20">
                        Beautifully designed furniture built with effort and
                        love.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {arrivals.map((item: any) => (
                  <ListItem
                    href={`/product/${item.attributes.product.data.id}`}
                    title={item.attributes.name}
                    key={item.id}
                  >
                    {item.attributes.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {data.map((category, index) => (
            <div id={category.id} key={category.id}>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {category.attributes.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[800px]">
                    {category.attributes.sub_categories.data.map(
                      (subcategory, subIndex) => (
                        <div
                          className="flex flex-col"
                          key={subcategory.id}
                          id={subcategory.id}
                        >
                          <div className="flex items-center gap-x-4">
                            {/* Adjust the icon size to 40px */}
                            <div className="w-10 h-10 mr-2">
                              {renderIconBasedOnSlug(
                                subcategory.attributes.icon
                              )}
                            </div>
                            <div>
                              <ListItem
                                key={subcategory.id}
                                title={subcategory.attributes.name}
                                href={`/category/${subcategory.id}/1`}
                              >
                                {subcategory.attributes.description}
                              </ListItem>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </div>
          ))}

          <NavigationMenuItem>
            <Link href="/category/all/1" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                ALL PRODUCTS
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/form" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                CUSTOM ORDER
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Search */}
      <div className="ml-1 flex w-full max-w-sm">
        <SearchBar />
        {/* Add your other content here */}
      </div>
    </div>
  );
};

// Define a list of random color classes
const randomColors = [
  "text-red-500",
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-pink-500",
  "text-indigo-500",
  // Add more colors as needed
];

const iconStyle = "w-[40px] h-[40px] ml-3 p-2 rounded";

const renderIconBasedOnSlug = (slug: string) => {
  // Generate a random color class from the list
  const randomColorClass =
    randomColors[Math.floor(Math.random() * randomColors.length)];

  switch (slug) {
    case "armchair":
      return <Armchair className={`${iconStyle} ${randomColorClass}`} />;
    case "bed-double":
      return <BedDouble className={`${iconStyle} ${randomColorClass}`} />;
    case "bed-single":
      return <BedSingle className={`${iconStyle} ${randomColorClass}`} />;
    case "bed":
      return <Bed className={`${iconStyle} ${randomColorClass}`} />;
    case "lamp-ceiling":
      return <LampCeiling className={`${iconStyle} ${randomColorClass}`} />;
    case "lamp-desk":
      return <LampDesk className={`${iconStyle} ${randomColorClass}`} />;
    case "lamp-floor":
      return <LampFloor className={`${iconStyle} ${randomColorClass}`} />;
    case "lamp-wall-down":
      return <LampWallDown className={`${iconStyle} ${randomColorClass}`} />;
    case "lamp-wall-up":
      return <LampWallUp className={`${iconStyle} ${randomColorClass}`} />;
    case "lamp":
      return <Lamp className={`${iconStyle} ${randomColorClass}`} />;
    case "rocking-chair":
      return <RockingChair className={`${iconStyle} ${randomColorClass}`} />;
    case "sofa":
      return <Sofa className={`${iconStyle} ${randomColorClass}`} />;
    case "door-closed":
      return <DoorClosed className={`${iconStyle} ${randomColorClass}`} />;
    case "door-open":
      return <DoorOpen className={`${iconStyle} ${randomColorClass}`} />;
    case "utensils-crossed":
      return <UtensilsCrossed className={`${iconStyle} ${randomColorClass}`} />;
    case "printer":
      return <Printer className={`${iconStyle} ${randomColorClass}`} />;
    default:
      return null; // Return null if no matching icon
  }
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default BrowseNav;
