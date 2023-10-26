const Noresults = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-neutral-500">
      <img src="/notFount.svg" alt="Not Found" width="500" height="500" />
      <h2 className="text-4xl text-black">No results found.</h2>
    </div>
  );
};

export default Noresults;
