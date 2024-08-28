import { IoPlayOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <section className="bg-[#f9fafe]">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto md:gap-8 lg:gap-0 md:py-16 md:grid-cols-12  flex-col-reverse md:flex-row max-w-[1240px]">
        <div className="mr-auto place-self-center md:col-span-6  ">
          <h1 className="max-w-2xl mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            Curs de Inteligență Artificială{" "}
            <span className="text-[#00c5e7]">Generativă</span>
          </h1>
          <p className="max-w-2xl mb-8 lg:mb-10 md:text-lg lg:text-4xl ">
            Către locuri de muncă sustenabile prin Inteligență Artificială
          </p>
          <div className="flex items-center">
            <a
              href="/curs"
              className="inline-flex items-center justify-center px-6 py-4 mr-3  text-base font-semibold text-center text-white rounded-lg bg-[#222f5d] hover:bg-[#00c5e7] transition-all duration-300 "
            >
              Vezi Cursul
            </a>
            <div className="rounded-full p-2 bg-white shadow-lg  transition-transform duration-300 ease-in-out hover:-translate-y-1 ml-4">
              <IoPlayOutline
                size={30}
                className="text-[#00c5e7] hover:text-black transition-all duration-300"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 md:col-span-6 flex justify-end">
          <img
            src="./hero.png"
            alt="hero img"
            className="w-full lg:w-[70%] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
