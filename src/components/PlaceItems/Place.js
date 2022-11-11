const Place = ({ src }) => {
  return (
    <div className="flex flex-col gap-3 p-3 rounded-xl border text-[.8rem] md:w-[18rem]">
      <img className="w-full" src={src} alt="" />
      <p className="flex justify-between">
        <span>Desert King</span>{" "}
        <span className="font-bold">1MBT per night</span>
      </p>
      <p className="flex justify-between">
        <span>2345km away</span>{" "}
        <span className="">available for 2weeks stay</span>
      </p>
    </div>
  );
};

export default Place;
