import { useState } from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../Constant";
import { bigShoe1,bigShoe2,bigShoe3 } from "../assets/images"

const Hero = () => {
  return (
    <section
      id="home"
      className=" w-full
     xl:flex-row flex-col  min-h-screen  gap-10 max-container
     flex "
    >
      <div
        className="xl:w-[40%] flex flex-col w-full justify-center 
      items-start max-x:padding-x pt-28 padding-l"
      >
        <p className="font-montserrat text-coral-red text-xl">
          Our Summer Collections
        </p>
        <h1
          className="text-[85px] max-sm:text-72px font-palanquin
            max-sm:leading-[82px] font-bold"
        >
          <span
            className="xl:bg-white xl:whitespace-nowrap 
          relative z-10 pr-10 "
          >
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p
          className="font-montserrat text-slate-gray letxt-lg
        leading-8 mt-6 mb-14  sm:max-w-sm"
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div
          className="flex flex-wrap justify-start items-start
                        gap-16 w-full mt-20"
        >
          {statistics.map((stats) => (
            <div key={stats.label}>
              <p
                className="font-bold
                  font-palanquin text-4xl
              "
              >
                {stats.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stats.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative  flex flex-1 justify-center items-center
       xl:min-h-screen max-xl:py-40 bg-hero bg-primary bg-cover bg-center ">
        <img
          src={bigShoe1 }
          alt="shoe collection"
          className="w-[610px] h-[500px] object-contain
            z-10 relative"
        />
      </div>
    </section>
  );
};

export default Hero;
