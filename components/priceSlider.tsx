// components/PriceSlider.tsx
import React from 'react';

interface PriceSliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

const PriceSlider: React.FC<PriceSliderProps> = ({ min, max, value, onChange }) => {
  return (
    <div className="w-full">
      <label htmlFor="priceSlider" className="text-lg font-bold">
        Price Range: {value} INR
      </label>
      <input
        type="range"
        id="priceSlider"
        className="w-full mt-2"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="flex justify-between">
        <span>{min} INR</span>
        <span>{max} INR</span>
      </div>
    </div>
  );
};

export default PriceSlider;
