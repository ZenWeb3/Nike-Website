import { useState } from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../Constant";
import { bigShoe1} from "../assets/images"
import ShoeCard from "../Components/ShoeCard"

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
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
          className="text-[90px] leading-[6.75rem] max-sm:text-[50px]  mt-10 font-palanquin
            max-sm:leading-[50px] font-bold"
        >
          <span
            className="xl:bg-white xl:whitespace-nowrap 
          relative z-10 pr-10 "
          >
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block">Nike</span> Shoes
        </h1>
        <p
          className="font-montserrat text-slate-gray text-lg
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
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe,index) => (
            <div key={shoe}>
             <ShoeCardindex
              imageUrl = {shoe}
              changeShoeBtn = {(shoe) => setBigShoeImg(shoe)}
              bigShoeImage = {bigShoeImg}
             />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
