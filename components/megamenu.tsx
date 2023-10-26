"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MegaMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const categories = [
    {
      title: "Living Room",
      description:
        "Explore our collection of comfortable and stylish living room furniture.",
      subcategories: [
        {
          name: "Sofas",
          icon: "🛋️",
          products: ["Sofa A", "Sofa B", "Sofa C"],
        },
        {
          name: "Chairs",
          icon: "🪑",
          products: ["Chair A", "Chair B", "Chair C"],
        },
        // ... (other subcategories)
      ],
    },
    {
      title: "Office",
      description:
        "Create an efficient and comfortable workspace with our office furniture.",
      subcategories: [
        {
          name: "Desks",
          icon: "🏢",
          products: ["Desk A", "Desk B", "Desk C"],
        },
        {
          name: "Chairs",
          icon: "🪑",
          products: ["Chair A", "Chair B", "Chair C"],
        },
        // ... (other subcategories)
      ],
    },
    // ... (other main categories)
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="mega-menu relative group">
        <button
          className="px-4 py-2 bg-blue-500 text-white"
          onMouseEnter={handleMenuOpen}
          onMouseLeave={handleMenuClose}
        >
          Shop
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mega-menu-content absolute top-full right-0 w-[800px] bg-white rounded-md p-4 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onMouseEnter={handleMenuOpen}
              onMouseLeave={handleMenuClose}
            >
              {categories.map((category, index) => (
                <div key={index} className="border p-2 rounded-md">
                  <div>
                    <h3 className="text-md font-semibold">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                  {category.subcategories.map((subcat, subIndex) => (
                    <div key={subIndex} className="mt-2">
                      <h4 className="text-md font-semibold">
                        <span
                          role="img"
                          aria-label="Icon"
                          className="text-lg mr-2"
                        >
                          {subcat.icon}
                        </span>
                        {subcat.name}
                      </h4>
                      <ul className="text-gray-600 mt-1">
                        {subcat.products.map((product, prodIndex) => (
                          <li key={prodIndex}>{product}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
              <div className="flex justify-center mt-4">
                {/* Branding icons */}
                <a href="#" className="mr-4">
                  <img src="/icon1.svg" alt="Icon 1" className="w-6 h-6" />
                </a>
                <a href="#">
                  <img src="/icon2.svg" alt="Icon 2" className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MegaMenu;
