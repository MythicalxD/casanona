const SidePanel = () => {
  return (
    <div className="w-[247px] h-[473px] bg-stone-300 xl:absolute xl:block hidden right-0 top-0 pt-24 pl-8 pr-8">
      {/* Blogs */}
      <img
        className="w-full h-[120px] mb-8"
        src="https://via.placeholder.com/174x123"
      />

      {/* Links */}
      <div className="text-neutral-600 hover:text-orange-500 text-[22px] font-semibold leading-[34.32px] cursor-pointer">
        SOFA SETS
      </div>
      <div className="text-neutral-600 hover:text-orange-500 text-[22px] font-semibold leading-[34.32px] cursor-pointer">
        CHAIRS
      </div>
      <div className="text-neutral-600 hover:text-orange-500 text-[22px] font-semibold leading-[34.32px] cursor-pointer">
        COUCH
      </div>
      <div className="text-neutral-600 hover:text-orange-500 text-[22px] font-semibold leading-[34.32px] cursor-pointer">
        BEDS
      </div>
      <div className="text-neutral-600 hover:text-orange-500 text-[22px] font-semibold leading-[34.32px] cursor-pointer">
        BOOKCASE
      </div>
      <div className="text-neutral-600 hover:text-orange-500 text-[22px] font-semibold leading-[34.32px] cursor-pointer">
        WARDROBE
      </div>
    </div>
  );
};

export default SidePanel;
