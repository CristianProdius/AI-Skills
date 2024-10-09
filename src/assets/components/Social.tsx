const Social = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <div className="grid max-w-screen-md gap-24 mx-auto text-gray-900 sm:grid-cols-3">
            <div className="flex flex-col items-center justify-center">
              <h1 className="mb-2 text-3xl md:text-4xl font-extrabold text-nowrap text-[#ff7070]">
                100+ Persoane
              </h1>
              <p className=" text-gray-500">
                Din raioanele Cahul, Cantemir și Taraclia
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="mb-2 text-3xl md:text-4xl font-extrabold text-[#ff7070]">
                12 module
              </h1>
              <p className=" text-gray-500">
                Acoperind competențe digitale și AI
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="mb-2 text-3xl md:text-4xl font-extrabold text-[#ff7070]">
                7 Luni
              </h1>
              <p className=" text-gray-500">
                De instruire intensivă și practică, in AI
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Social;
