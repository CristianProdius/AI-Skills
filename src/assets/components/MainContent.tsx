import React from "react";
import { Lesson } from "../pages/Curs";

interface MainContentProps {
  selectedLesson: Lesson | null;
}

const MainContent: React.FC<MainContentProps> = ({ selectedLesson }) => {
  return (
    <div className="flex-grow p-4 w-full sm:w-auto">
      {selectedLesson ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">{selectedLesson.title}</h2>
          <div className="relative w-full pb-[56.25%] mb-4">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={selectedLesson.videoUrl.replace("watch?v=", "embed/")}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={selectedLesson.title}
            ></iframe>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Resurse</h3>
            <ul className="list-disc list-inside">
              {selectedLesson.resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    download
                    className="text-blue-500 hover:underline"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500">Selecteaza o lectie</div>
      )}
      <div className="">
        <button className="md:hidden mt-4 p-2 px-6 font-semibold text-white bg-[#ff7070] rounded-[10px] hover:bg-[#00c5e7] transition-all duration-300">
          Completează și Continue {"   >"}
        </button>
      </div>
    </div>
  );
};

export default MainContent;
