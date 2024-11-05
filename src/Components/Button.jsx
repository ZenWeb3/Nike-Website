import React from "react";

const Button = ({ label, iconUrl }) => (
  <button className="flex justify-center items-center gap-2 
  rounded-full border py-4 px-7 font-montserrat text-lg leading-none bg-coral-red
   border-x-coral-red text-white">
    {label}
    <img src={iconUrl} className="ml-2 rounded-full 
    w-5 h-5 " />
  </button>
);

export default Button;
