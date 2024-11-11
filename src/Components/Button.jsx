import React from "react";

const Button = ({ label, iconUrl, backgroundColor, textColor, fullWidth }) => (
  <button
    className={`flex justify-center items-center gap-2 
  rounded-full border py-4 px-7 font-montserrat text-lg leading-none 
  ${
    backgroundColor
      ? `${backgroundColor} ${textColor}`
      : "bg-coral-red border-coral-red  text-white"
  } ${fullWidth && "w-full"}`}
  >
    {label}
    {iconUrl && (
      <img
        src={iconUrl}
        className="ml-2 rounded-full 
    w-5 h-5 "
      />
    )}
  </button>
);

export default Button;
