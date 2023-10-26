"use client";

// shad cn ui
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User2 } from "lucide-react";

export const SaveDialog = () => {
  const [name, setName] = useState("");
  const [mob, setMob] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Load the mobile number from local storage on component mount
    const storedMobile = localStorage.getItem("mobile");
    if (storedMobile) {
      setMob(storedMobile);
    }
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handleSaveChanges = () => {
    localStorage.setItem("mobile", mob);
    localStorage.setItem("name", name);
    router.push(`/orders/${mob}`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <User2 className="md:w-6 md:h-6 h-4 w-4 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login Casanona</DialogTitle>
          <DialogDescription>
            Use the same name and mobile you entered while placing orders
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your name"
              className="col-span-3"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Mobile
            </Label>
            <Input
              id="tel"
              placeholder="+91"
              value={mob}
              className="col-span-3"
              onChange={(event) => setMob(event.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={handleSaveChanges}>
              Proceed Login
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SaveDialog;
function serialize(
  arg0: string,
  mobile: any,
  arg2: {
    maxAge: number; // Expires in 1 hour
    path: string;
  }
) {
  throw new Error("Function not implemented.");
}
