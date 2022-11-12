import Star from "../Star/Star";

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
      <div className="w-4/12 flex gap-2 md:w-5/12">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    </div>
  );
};

export default Place;
