"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";
import HomeNav from "@/components/home-nav";

const Success = () => {
  const router = useRouter();

  // Redirect to the home page after 5 seconds
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      location.href = "/";
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className="w-full h-screen">
      <HomeNav />
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <div className="flex w-full justify-center items-center mt-8 mb-4 text-3xl">
          Thank you for shopping with us.
        </div>
        <div className="flex w-full justify-center items-center mb-8 text-xl">
          You will be redirected in 5 seconds...
        </div>
      </div>
    </div>
  );
};

export default Success;
