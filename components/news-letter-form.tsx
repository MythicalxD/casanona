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
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const NewsLetterForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
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
      "928c7c5e0376d6f414438676b97437606a43222c9ebd788e9178973d58fa96f54dbda3e27e7eae8d4ef17e04cf388e11ee287a71060ed08addf1aa741733e367937a3e1367fce812c41c559f7a9425bfde9311fef80c6741407c5730b7241a467b301ddaabaed5b80899bc4f6c32ea77fe276d2a007406b8e56660a3330f63f6"; // Replace with your actual token

    axios
      .post(
        "http://localhost:1337/api/news-letters",
        { data: formData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success("Subscribed to NewsLetter Successfully.");
      })
      .catch((error) => {
        console.error("Error sending POST request:", error);
        // Handle error
      });
  };

  return (
    <div>
      <div className="flex w-full max-w-sm items-center space-x-2 md:m-4">
        <Input
          type="email"
          placeholder="Email"
          name="email"
          className="rounded-full"
          onChange={handleInputChange}
        />
        <Button type="submit" variant="outline" onClick={onCheckout}>
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default NewsLetterForm;
