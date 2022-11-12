import PlaceItems from "../PlaceItems/PlaceItems";

const PlaceToStay = () => {
  return (
    <main>
      <section className="py-8 container mx-auto px-4 md:px-8">
        <div className="flex w-full gap-12 justify-start items-center md:justify-between">
          <select className="px-4 py-2 rounded-lg bg-transparent border md:hidden">
            <option>Resturant</option>
            <option>Cottage</option>
            <option>Castle</option>
            <option>Beach</option>
            <option>Carbins</option>
            <option>Off-grid</option>
            <option>Farm</option>
          </select>

          <ul className="flex w-full justify-between hidden md:flex">
            <li>Resturant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>Fantast city</li>
            <li>Beach</li>
            <li>Carbins</li>
            <li>Off-grid</li>
            <li>Farm</li>
          </ul>
          <div>
            <input
              type="text"
              placeholder="Location"
              className="border px-4 py-2 w-36 rounded-lg"
            />
          </div>
        </div>

        <PlaceItems />
      </section>
    </main>
  );
};

export default PlaceToStay;
