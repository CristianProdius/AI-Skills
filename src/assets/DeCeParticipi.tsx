import React from "react";

const DeCeParticipi = () => {
  return (
    <section className="bg-[#f9fafe] pb-12">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            Acum de ce ai <span className="text-[#ff7070]">participa?</span>
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl ">
            In primul rand cai cool dar daca sincer pai uite:
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-[#f6f9fe] border-b border-[#222f5d] md:p-12 lg:border-r ">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 ">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Competențe de viitor
              </h3>
              <p className="my-4">
                Dezvoltă abilități în AI care sunt extrem de căutate pe piața
                muncii actuală și viitoare.
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-[#f6f9fe] border-b border-[#222f5d] md:p-12">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 ">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Oportunități de angajare
              </h3>
              <p className="my-4">
                Crește-ți șansele de a obține un loc de muncă bine plătit în
                domeniul tehnologiei.
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-[#f6f9fe] border-b border-[#222f5d] lg:border-b-0 md:p-12 lg:border-r">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 ">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Inovație și creativitate
              </h3>
              <p className="my-4">
                Învață să utilizezi AI pentru a genera idei inovatoare și a
                rezolva probleme complexe.
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-[#f6f9fe] border-[#222f5d] md:p-12">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 ">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Networking și comunitate
              </h3>
              <p className="my-4">
                Conectează-te cu alți cursanți și profesioniști din domeniu,
                construind relații valoroase.
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-[#f6f9fe] border-b border-[#222f5d] lg:border-b-0 md:p-12 lg:border-r lg:border-t">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 className="text-lg font-semibold text-gray-900">
                Instruire practică
              </h3>
              <p className="my-4">
                Beneficiază de sesiuni hands-on cu instrumente AI reale și
                proiecte bazate pe scenarii din lumea reală.
              </p>
            </blockquote>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-[#f6f9fe] border-b border-[#222f5d] lg:border-b-0 md:p-12 lg:border-t">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 className="text-lg font-semibold text-gray-900">
                Suport personalizat
              </h3>
              <p className="my-4">
                Primește îndrumare și mentorat adaptat nevoilor tale specifice
                și obiectivelor de carieră.
              </p>
            </blockquote>
          </figure>
        </div>
        <div className="text-center">
          <h2 className="mb-12  text-4xl tracking-tight font-extrabold text-gray-900 ">
            Ce teai convins sa participi?
          </h2>
          <a
            href="#"
            className=" py-2.5 px-5 mr-2 mb-2 text-md font-medium text-white focus:outline-none bg-[#ff7070] rounded-lg  hover:bg-[#00c5e7]  focus:z-10 focus:ring-4 focus:ring-[#00c5e7] "
          >
            Hai am plecat
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeCeParticipi;
