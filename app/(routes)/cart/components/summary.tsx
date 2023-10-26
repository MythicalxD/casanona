"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";

import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";

interface SummaryProps {
  value: string;
  id: string;
}

const Summary: React.FC<SummaryProps> = ({ value, id }) => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.attributes.price);
  }, 0);

  const router = useRouter();
  const pathname = usePathname();

  console.log(pathname);

  const onCheckout = () => {
    const match = pathname.match(/^\/payment\/(.+)$/);
    if (match) {
      const xValue = match[1];
      console.log(`Payment for item: ${xValue}`);
      console.log(items);
      
    } else {
      router.push("/delivery");
    }
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        {items.map((item: any) => (
          <div className="flex" key={item.id}>
            <div className="flex flex-grow gap-x-2">
              {item.attributes.name}
              <Badge variant="outline">{item.attributes.selectedFabric}</Badge>
              <Badge variant="outline">{item.attributes.selectedColor}</Badge>
            </div>
            <p>₹{item.attributes.price}</p>
          </div>
        ))}
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          ₹{totalPrice}
        </div>
      </div>
      <Button
        onClick={onCheckout}
        disabled={items.length === 0}
        className="w-full mt-6"
      >
        {value}
      </Button>
    </div>
  );
};

export default Summary;
