"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";

import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import axios from "axios";

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

  const products = items.map((item) => ({
    id: item.attributes.id,
  }));

  const slug = items.map((item) => item.id).join(',');

  const predefinedOrder = {
    name: slug,
    slug: slug,
    paid: false,
    payment: "Any Options they want",
    mobile: "check address",
    products,
    address: {
      id: id,
    },
  };
  

  const onCheckout = () => {
    const match = pathname.match(/^\/payment\/(.+)$/);
    if (match) {
      const token =
        "6770dd2e488e6294b50be149db7cf77fd2c48c6d6da77bae82dc12513b68b2b48b313a007d7d6fe68b50d86c0e0ac2136cd103407739e1a20af4e6c8a7e04c7cf752f7ede8265c52f9a49f5437d1ca36aec4f39c367e237404c031ed75c760670dbafb4237aba1f42c3ddf9ec2218f24634ff4d7fe30b241c8d765c0667cbd5a"; // Replace with your actual token

      axios
        .post(
          "http://localhost:1337/api/orders",
          { data: predefinedOrder },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          toast.success("Order Created Successfully.");
          // Handle success
          localStorage.removeItem('cart-storage');
          router.push(`/success`);
        })
        .catch((error) => {
          console.error("Error sending POST request:", error);
          // Handle error
        });
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
