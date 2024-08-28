import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#f9fafe]">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ">
        <a href="/" className="text-3xl font-bold text-[#222f5d]">
          AI-Oportunități
        </a>
        <ul className="hidden md:flex text-2xl">
          <li className="p-4  hover:text-[#00c5e7]">
            <a href="/despre">Despre</a>
          </li>

          <li className="p-4 ml-5 hover:text-[#00c5e7]">
            <a href="/contact">Contacte</a>
          </li>

          <li className="p-4 px-8 ml-5 font-semibold text-white bg-[#ff7070] rounded-[10px] hover:bg-[#00c5e7] transition-all duration-300">
            <a href="/curs">Acceseaza Curs</a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full bg-[#f6f9fe]  ease-in-out duration-500"
              : "fixed left-[-100%] top-0 w-[60%] h-full ease-in duration-500"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00c5e7] m-4 pt-8 pl-4">
            AI-Oportunități
          </h1>
          <ul className=" uppercase p-4">
            <li className="p-4 hover:text-[#00c5e7]">
              <a href="/despre">Despre</a>
            </li>
            <li className="p-4 hover:text-[#00c5e7]">
              <a href="/contact">Contacte</a>
            </li>
            <li className="p-4 hover:text-[#00c5e7] font-semibold">
              <a href="/curs">Acceseaza Curs</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
