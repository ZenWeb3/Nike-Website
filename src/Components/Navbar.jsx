import { headerLogo } from "../assets/images";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "../Constant";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const MobileNav = () => {
    return (
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 transition duration-300`}
      >
        <div className="bg-white w-[50%] text-center h-full shadow-lg py-10 px-6">
          <AiOutlineClose
            className="h-[30px] w-[30px] mb-6 cursor-pointer text-black"
            onClick={() => setToggle(false)}
          />
          <ul className="flex flex-col gap-8 mt-4">
            {navLinks.map((nav) => (
              <li key={nav.label} onClick={() => setToggle(false)}>
                <a
                  href={`${nav.href}`}
                  className="font-montserrat font-semibold text-lg text-slate-gray hover:text-coral-red transition duration-300"
                >
                  {nav.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <header className="padding-x py-8 absolute top-0 z-20 w-full ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" className="w-[130px] h-[29px]" />
        </a>
        <ul className="flex flex-1 gap-10 justify-center items-center max-lg:hidden">
          {navLinks.map((nav) => (
            <li key={nav.label}>
              <a
                href={`${nav.href}`}
                className="font-montserrat text-lg text-slate-gray hover:text-coral-red transition duration-300"
              >
                {nav.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden flex items-center">
          {/* Show the hamburger icon when menu is closed */}
          {toggle ? (
            <AiOutlineClose
              className="h-[30px] w-[30px] cursor-pointer text-black"
              onClick={() => setToggle(false)}
            />
          ) : (
            <FaBars
              className="h-[30px] w-[30px] cursor-pointer text-black"
              onClick={() => setToggle(true)}
            />
          )}
        </div>
      </nav>
      {/* Mobile Menu */}
      {toggle && <MobileNav />}
    </header>
  );
};

export default Navbar;
