"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Product {
  id: number;
  attributes: {
    name: string;
  };
}

interface SubCategory {
  id: number;
  attributes: {
    name: string;
  };
}

interface Category {
  id: number;
  attributes: {
    products: any;
    name: string;
    sub_categories: { data: SubCategory[] };
  };
}

interface NestedDropdownProps {
  data: Category[];
}

const NestedDropdown: React.FC<NestedDropdownProps> = ({ data }) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(
    null
  );
  const [activeSubCategoryIndex, setActiveSubCategoryIndex] = useState<
    number | null
  >(null);

  const handleCategoryClick = (index: number) => {
    if (index === activeCategoryIndex) {
      setActiveCategoryIndex(null);
    } else {
      setActiveCategoryIndex(index);
    }
    setActiveSubCategoryIndex(null);
  };

  const handleSubCategoryClick = (index: number) => {
    if (index === activeSubCategoryIndex) {
      setActiveSubCategoryIndex(null);
    } else {
      setActiveSubCategoryIndex(index);
    }
  };

  return (
    <div className="w-[400px] h-full p-4">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <ul>
        {data.map((category, index) => (
          <li key={category.id} className="mb-2">
            <div
              className="cursor-pointer text-xl font-bold flex items-center"
              onClick={() => handleCategoryClick(index)}
            >
              {category.attributes.name}
              <ChevronDown className="w-5 h-5" />
            </div>
            {activeCategoryIndex === index && (
              <ul className="pl-4">
                {category.attributes.sub_categories.data.map(
                  (subcategory, subIndex) => (
                    <li key={subcategory.id} className="mb-1">
                      <div
                        className="text-lg font-semibold cursor-pointer flex items-center"
                        onClick={() => handleSubCategoryClick(subIndex)}
                      >
                        {subcategory.attributes.name}
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </div>
                      {activeSubCategoryIndex === subIndex && (
                        <ul className="pl-4">
                          {category.attributes.products.data.map(
                            (product: {
                              id: React.Key | null | undefined;
                              attributes: {
                                name:
                                  | string
                                  | number
                                  | boolean
                                  | React.ReactElement<
                                      any,
                                      string | React.JSXElementConstructor<any>
                                    >
                                  | Iterable<React.ReactNode>
                                  | React.ReactPortal
                                  | React.PromiseLikeOfReactNode
                                  | null
                                  | undefined;
                              };
                            }) => (
                              <li key={product.id} className="mb-1">
                                {product.attributes.name}
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </li>
                  )
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NestedDropdown;
