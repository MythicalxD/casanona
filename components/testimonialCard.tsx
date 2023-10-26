import React from "react";

interface Testimonial {
  name: string;
  position: string;
  content: string;
  image: string;
}

const TestimonialCard: React.FC<Testimonial> = ({
  name,
  position,
  content,
  image,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-fit lg:w-[700px]">
      <p className="text-gray-800 text-center">{content}</p>
      <div className="flex items-center mt-2 w-full justify-center">
        <div>
          <p className="font-semibold text-lg text-center">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
