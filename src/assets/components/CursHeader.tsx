import React from "react";

interface CursHeaderProps {
  toggleSidebar: () => void;
}

const CursHeader: React.FC<CursHeaderProps> = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between sticky top-0 p-4 bg-[#f9fafe] h-24">
      <a
        href="/"
        className="text-xl md:text-2xl font-bold text-[#222f5d] cursor-pointer hover:text-[#00c5e7] transition-all duration-300"
      >
        AI-Oportunități
      </a>

      <button className="md:hidden" onClick={toggleSidebar}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <div className="hidden md:flex justify-end">
        <button className="md:p-4 md:px-8 font-semibold text-white bg-[#ff7070] rounded-[10px] hover:bg-[#00c5e7] transition-all duration-300">
          Completează și Continue {"   >"}
        </button>
      </div>
    </div>
  );
};

export default CursHeader;
