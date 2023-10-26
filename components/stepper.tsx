import React, { FC } from "react";
import Link from "next/link";

interface StepperProps {
  value: number;
}

const Stepper: FC<StepperProps> = ({ value }) => {
  const steps = [
    { title: "Summary", link: "/cart" },
    { title: "Delivery Info", link: "/delivery" },
    { title: "Confirmation", link: "/payment" },
    { title: "Payment", link: "/payment" },
  ];

  return (
    <div className="m-4">
      <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`md:w-full items-center ${
              index <= value
                ? "after:w-full after:h-[1px] after:bg-gray-200 after:ml-2"
                : ""
            } ${
              index === value
                ? "text-blue-600 dark:text-blue-500 cursor-pointer"
                : "cursor-pointer"
            }`}
          >
            <div
              className={`flex items-center ${
                index === value ? "text-blue-600 dark:text-blue-500" : ""
              }`}
            >
              <span
                className={`mr-2 ${
                  index === value ? "text-blue-600 dark:text-blue-500" : ""
                }`}
              >
                {index + 1}
              </span>
              <Link href={step.link}>{step.title}</Link>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Stepper;
