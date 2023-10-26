"use client";
import React from "react";
import { motion } from "framer-motion";

const ArrowButton: React.FC = () => {
  return (
    <motion.button
      className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-transform"
      whileHover={{ x: 5 }} // Move 5 pixels to the right on hover
    >
      <span>Click Me</span>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-4 h-4"
        initial={{ x: 0 }}
        animate={{ x: 5 }} // Move 5 pixels to the right on hover
        exit={{ x: 0 }} // Return to original position when hover state is removed
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          initial={{ x: 0 }}
          animate={{ x: 5 }} // Move 5 pixels to the right on hover
          exit={{ x: 0 }} // Return to original position when hover state is removed
        />
      </motion.svg>
    </motion.button>
  );
};

export default ArrowButton;
