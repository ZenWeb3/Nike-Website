import { offer } from "../assets/images"
import Button from "../Components/Button"
const SpecialOffer = () => (
  <section id="Offer" className="max-container flex flex-wrap gap-10
                            justify max-xl:flex-col-reverse ">
                  
      <div className="flex flex-1">
        <img src={offer} width={750} height={700} className=" object-contain  w-full"/>
      </div>
      <div className="flex flex-col justify-start">
        <h1 className="text-4xl font-bold font-palanquin mb-4">
          Special <span className="text-coral-red">Offer</span>
        </h1>
        <p className=" text-lg info-text lg:max-w-lg ">
            Embark on a shopping journey that redefines your experience with unbeatable deals. {" "}
            From premier selactions to incredible savings, we offer unparallel value that sets us apart
        </p>
        <p className="my-6 text-lg info-text lg:max-w-lg">
          Navigate a realm of possibilities designed to fufill your unique desires, 
          surpassing the loftiest expectations. Your journey with us is nothing but exceptional. 
        </p>
        <div className="flex gap-6 max-md:gap-2 flex-wrap">
        <Button label="View Details"/>
        <Button label="Learn More" 
        backgroundColor="bg-white" 
        textColor="text-slate-gray" />
      </div>
    </div>
  </section>
)

export default SpecialOffer