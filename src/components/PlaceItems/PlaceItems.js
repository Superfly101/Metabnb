import Place from "./Place";

const PlaceItems = ({ places }) => {
  const PLACE_LIST = places || [
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
    <div className="grid gap-4 mt-6 sl:grid-cols-2 lg:grid-cols-4">
      {PLACE_LIST.map((place, index) => (
        <Place key={index} src={place.image} />
      ))}
    </div>
  );
};

export default PlaceItems;
