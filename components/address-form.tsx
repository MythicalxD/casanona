"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { API_URL } from "@/utils/urls";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface FormProps {
  bg: string;
}

const AddressForm: React.FC<FormProps> = ({ bg }) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    landmark: "",
    mobile: "",
    pinCode: "",
    state: "",
    town: "",
    house: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onCheckout = () => {
    const token =
      "c850cdab61bcff8dcbce2c28f2539f0f502f86ad0e7cbeef51c10d07cab6cb7b0183b0c49d4ac4d69bef1feddf884d2547ce43d0c5d1c23d275e26278c98ceaf00eea9a258ae94bc8e0ef6d9dee297f071576d439dca92d1dba876f9fb0bd19e46fd42019535157401c967b7f977195dada6cb0fee8abb087493b0ac72f7785d"; // Replace with your actual token

    axios
      .post(
        `${API_URL}/api/addresses`,
        { data: formData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success("Address Saved Successfully.");
        // Handle success

        router.push(`/payment/${response.data.data.id}`);
      })
      .catch((error) => {
        console.error("Error sending POST request:", error);
        // Handle error
      });
  };

  return (
    <div>
      <div className="relative h-screen">
        {bg !== null && (
          <img
            className="w-[60%] h-full object-cover"
            src={bg}
            alt="Background Image"
          />
        )}

        <div className="absolute left-5 top-5 z-10">
          <span className="lg:text-black text-white text-[40px] font-normal">
            Casa
          </span>
          <span className="text-green-800 text-[40px] font-normal">Nona</span>
        </div>

        <div className="lg:bg-[#FFFFFF] bg-[#111111be] h-screen lg:w-[40%] w-full absolute right-0 top-0 flex flex-col mb-8 p-16 justify-center items-center">
          {/* Title */}
          <div className=" lg:text-black text-white text-5xl font-semibold lg:mt-0 mt-10">
            Make it Yours
          </div>
          <div className="text-zinc-400 text-lg text-center">
            Want us to bring this to you? Okay, you are 2 steps away!
          </div>
          <ScrollArea className="h-[800px] w-[450px] rounded-md border p-4 mt-8">
            <div className="flex flex-col m-2">
              {/* Form Starting --------------------------------------------- */}
              {/* Country/region */}
              <div className="">
                <h2 className="lg:text-black text-white mb-1">
                  Country/Region
                </h2>
                <Select onValueChange={handleInputChange}>
                  <SelectTrigger className="w-[400px]">
                    <SelectValue placeholder="India" defaultValue="India" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="India">India</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Full Name */}
              <div className="mt-4 max-w-[400px]">
                <h2 className="lg:text-black text-white mb-1">
                  Enter Full name (First Name and Last name)
                </h2>
                <Input type="name" onChange={handleInputChange} name="name" />
              </div>

              {/* Mobile Number  */}
              <div className="mt-4 max-w-[400px]">
                <h2 className="lg:text-black text-white mb-1">Mobile Number</h2>
                <Input
                  type="number"
                  onChange={handleInputChange}
                  name="mobile"
                />
                <h2 className="text-gray-400 mb-1 text-sm">
                  used for contacting
                </h2>
              </div>

              {/* PinCode */}
              <div className="mt-4 max-w-[400px]">
                <h2 className="lg:text-black text-white mb-1">Enter Pincode</h2>
                <Input
                  type="number"
                  placeholder="6 Digits [0-9] PIN code"
                  onChange={handleInputChange}
                  name="pinCode"
                />
              </div>

              {/* Address */}
              <div className="mt-4 max-w-[400px]">
                <h2 className="lg:text-black text-white mb-1">
                  Flat, House no., Building, Company, Apartment
                </h2>
                <Input type="text" onChange={handleInputChange} name="house" />
              </div>

              {/* Address */}
              <div className="mt-4 max-w-[400px]">
                <h2 className="lg:text-black text-white mb-1">
                  Area, Street, Sector, Village
                </h2>
                <Input
                  type="text"
                  onChange={handleInputChange}
                  name="address"
                />
              </div>

              {/* Address */}
              <div className="mt-4 max-w-[400px]">
                <h2 className="lg:text-black text-white mb-1">Landmark</h2>
                <Input
                  type="text"
                  placeholder="E.g. near apollo hospital"
                  onChange={handleInputChange}
                  name="landmark"
                />
              </div>

              <div className="flex gap-x-4 max-w-[400px]">
                <div className="mt-4">
                  <h2 className="lg:text-black text-white mb-1">Town/City</h2>
                  <Input type="text" onChange={handleInputChange} name="town" />
                </div>
                <div className="mt-4">
                  <h2 className="lg:text-black text-white mb-1">State</h2>
                  <Input
                    type="text"
                    onChange={handleInputChange}
                    name="state"
                  />
                </div>
              </div>

              {/* Button */}

              <Button variant="outline" className="mt-4" onClick={onCheckout}>
                Continue
              </Button>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
