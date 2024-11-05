import { headerLogo } from "../assets/images"
import {Open, Close} from "../assets/icons"
import { navLinks } from "../Constant"
import { useState } from "react"

const Navbar = () => {
  const [Toggle, setToggle] = useState(false)
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" className="w-[130px] h-[29px]" />
        </a>
        <ul className="flex flex-1 gap-16 justify-center items-center max-lg:hidden">
            {navLinks.map((nav) => (
              <li key={nav.label}>
               <a href={`#${nav.href}`} className="font-montserrat leading-normal 
                                              text-lg text-slate-gray">
                  {nav.label}
               </a>
              </li>
            ))}
        </ul>
        <div className="sm:hidden justify-end items-center flex flex-1">
          <img 
          src={Toggle ? Close : Open} 
          className="hidden  h-[30px] w-[30px] object-contain max-lg:block"
          // {updater function}
          onClick={() => setToggle((prev) => !prev)}
           />
           <div className={`${Toggle ? "flex" : "hidden"}
                            max-h-screen absolute bg-white top-20 z-10000 min-w-full`}>
                  <ul className="flex flex-1 flex-col justify-center items-center">
                      {navLinks.map((nav) => (
                         <li key={nav.label}>
                         <a href={`#${nav.href}`} className="font-montserrat leading-normal 
                                                        text-lg text-slate-gray">
                            {nav.label}
                         </a>
                        </li>
                      ))}
                  </ul>
           </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar