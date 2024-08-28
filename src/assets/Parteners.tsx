import React from "react";

const Parteners = () => {
  return (
    <div>
      <section className="bg-white py-12">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">
            Parteneri noștri
          </h2>
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 ">
            <a href="#" className="flex justify-center items-center">
              <img
                src="./part1.jpg"
                alt=""
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img
                src="./part2.jpg"
                alt=""
                className="h-10 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img
                src="./part3.jpg"
                alt=""
                className="h-10 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
              />
            </a>

            <a href="#" className="flex justify-center items-center">
              <img
                src="./part4.jpg"
                alt=""
                className="h-10 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img
                src="./part5.jpg"
                alt=""
                className="h-7 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img
                src="./part6.jpg"
                alt=""
                className="h-12 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:opacity-80"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parteners;
