import Place from "./Place";

const PlaceItems = () => {
  const PLACE_LIST = [
    { image: "/assets/place1.png" },
    { image: "/assets/place2.png" },
    { image: "/assets/place3.png" },
    { image: "/assets/place4.png" },
    { image: "/assets/place5.png" },
    { image: "/assets/place6.png" },
    { image: "/assets/place7.png" },
    { image: "/assets/place8.png" },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-6">
      {PLACE_LIST.map((place, index) => (
        <Place key={index} src={place.image} />
      ))}
    </div>
  );
};

export default PlaceItems;
