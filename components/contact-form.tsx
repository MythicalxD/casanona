"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface FormProps {
  bg: string;
}

const ContactForm: React.FC<FormProps> = ({ bg }) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    category: "",
    desc: "",
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
        "http://13.200.11.37:1337/api/contacts",
        { data: formData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success("Request Saved Successfully.");
        // Handle success
      })
      .catch((error) => {
        console.error("Error sending POST request:", error);
        // Handle error
      });
  };

  return (
    <div>
      <div className="relative h-screen w-screen">
        {bg !== null && (
          <img
            className="lg:w-[60%] w-[100%] h-full object-cover"
            src={bg}
            alt="Background Image"
          />
        )}

        <div className="absolute left-5 top-5 z-10">
          <span className="text-white text-[40px] font-normal">Casa</span>
          <span className="text-green-500 text-[40px] font-normal">Nona</span>
        </div>

        <div className="lg:bg-[#00000033] bg-[#111111be] h-screen lg:w-[40%] w-full absolute right-0 top-0 flex flex-col mb-8 md:p-16 p-4 md:mt-0 mt-0 justify-start items-start">
          {/* Title */}
          <div className=" lg:text-black text-white text-5xl font-semibold lg:mt-0 md:mt-10 mt-20">
            Contact Us
          </div>
          <div className="text-zinc-700 text-xl">
            Crafting Your Dream Space, One Custom Piece at a Time.
          </div>
          <ScrollArea className="h-[800px] md:w-[450px] rounded-md border p-4 mt-8">
            <div className="flex flex-col m-2">
              {/* Form Starting --------------------------------------------- */}

              {/* Full Name */}
              <div className="max-w-[400px]">
                <h2 className="lg:text-black text-white mb-1">Your name</h2>
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
                <h2 className="text-gray-700 mb-1 text-sm">
                  used for contacting
                </h2>
              </div>

              {/* Select Category */}
              <div className="">
                <h2 className="lg:text-black text-white mb-1 mt-2">
                  Enter Product Category
                </h2>
                <Input
                  type="text"
                  placeholder="Ex - Decor, Dining Table, beds, etc."
                  onChange={handleInputChange}
                  name="category"
                />
              </div>

              {/* Description */}
              <div className="grid w-full gap-1.5">
                <h2 className="lg:text-black text-white mt-3">
                  Tell us more about what you want
                </h2>
                <Textarea
                  placeholder="Type your message here."
                  onChange={handleInputChange}
                  name="desc"
                  id="message-2"
                />
                <p className="text-sm text-muted-foreground">
                  Your message will be copied to the support team.
                </p>
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

export default ContactForm;
