import PlaceList from "./components/PlaceItems/PlaceItems";

function App() {
  return (
    <main className="">
      {/* Hero Section */}
      <section className="flex flex-col gap-4 justify-between items-center container mx-auto py-8 px-4 md:px-12 md:flex-row">
        <div className="flex flex-col gap-8 md:w-1/2">
          <h1 className="text-4xl">
            Rent a <span className="text-purple font-bold">Place</span> away
            from <span className="text-purple font-bold">Home</span> in the{" "}
            <span className="text-purple font-bold">Metaverse</span>
          </h1>

          <p>
            We provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn our imagination to reality at your
            comfort zone.
          </p>

          <form>
            <div className="border flex rounded-md overflow-hidden">
              <input
                className="w-full px-4 text-sm"
                placeholder="Search for location"
                type="text"
              />
              <button className="bg-gradient py-2 px-4 text-white w-48 text-sm hover:opacity-75">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-2 gap-2 py-6">
          <div className="flex flex-col gap-2">
            <div className="mt-20 max-w-[15rem]">
              <img
                className="w-full"
                src="/assets/hero1.png"
                alt="hero illustration icon"
              />
            </div>

            <div className="max-w-[15rem]">
              <img
                className="w-full"
                src="/assets/hero2.png"
                alt="hero illustration icon"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="max-w-[15rem]">
              <img
                className="w-full"
                src="/assets/hero3.png"
                alt="hero illustration icon"
              />
            </div>
            <div className="max-w-[15rem]">
              <img
                className="w-full"
                src="/assets/hero4.png"
                alt="hero illustration icon"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-between bg-gradient py-2 px-4 md:justify-around">
        <img
          className="w-28 md:w-36"
          src="/assets/mb-token.png"
          alt="MBToken icon"
        />
        <img
          className="w-32 md:w-40"
          src="/assets/metamask.png"
          alt="MBToken icon"
        />
        <img
          className="w-28 md:w-36"
          src="/assets/opensea.svg"
          alt="MBToken icon"
        />
      </div>

      {/* Places to live section */}
      <section className="py-8 container mx-auto px-4">
        <h3 className="text-2xl text-center font-bold">
          Inspiration for your next adventure
        </h3>

        <PlaceList />
      </section>

      {/* Learn more section */}
      <section className="flex flex-col gap-4 justify-between items-center py-12 px-4 bg-gradient text-white md:px-12 md:flex-row">
        <div className="flex flex-col gap-8 md:w-1/3">
          <h3 className="text-3xl font-bold">Metabnb NFTs</h3>

          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our customer
            access to loads of our exclusive services.
          </p>

          <button className="bg-white py-3 px-6 text-sm text-purple rounded-lg w-fit">
            Learn more
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
