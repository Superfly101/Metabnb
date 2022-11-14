import PlaceItems from "../PlaceItems/PlaceItems";

const PlaceToStay = () => {
  return (
    <main>
      <section className="py-8  px-4 md:px-16">
        <div className="flex w-full gap-6 md:gap-12 md:justify-between items-center">
          <select className="px-4 py-2 rounded-lg bg-transparent border md:hidden">
            <option>-- Select Filter --</option>
            <option>Resturant</option>
            <option>Cottage</option>
            <option>Castle</option>
            <option>Beach</option>
            <option>Carbins</option>
            <option>Off-grid</option>
            <option>Farm</option>
          </select>

          <ul className="flex w-full justify-between hidden md:flex">
            <li className="cursor-pointer">Resturant</li>
            <li className="cursor-pointer">Cottage</li>
            <li className="cursor-pointer">Castle</li>
            <li className="cursor-pointer">Fantast city</li>
            <li className="cursor-pointer">Beach</li>
            <li className="cursor-pointer">Carbins</li>
            <li className="cursor-pointer">Off-grid</li>
            <li className="cursor-pointer">Farm</li>
          </ul>
          <div className="relative">
            <input
              type="text"
              placeholder="Location"
              className="border px-4 py-2 w-40 rounded-lg"
            />
            <img
              className="absolute top-2.5 right-4"
              src="/assets/setting.svg"
              alt="Location icon"
            />
          </div>
        </div>

        <PlaceItems />
      </section>
    </main>
  );
};

export default PlaceToStay;
