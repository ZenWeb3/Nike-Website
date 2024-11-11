import { shoe8 } from '../assets/images'
import Button from '../Components/Button'
const SuperQuality = () => (
  <section id="about-us" className="flex max-lg:flex-col justify-center items-center lg:gap-12 gap-10 w-full max-container">
    <div className="flex flex-col justify-start">
        <h1 className="text-4xl font-bold font-palanquin mb-4">
          We Provide You <span className="text-coral-red">Super</span> <br className="max-lg:hidden block"/>
            <span className="text-coral-red">Quality</span> Shoes
        </h1>
        <p className=" text-lg info-text lg:max-w-lg ">
            Ensuring Premium comfort and style, our meticulously crafted footware is designed to elevate your experience,
            providing you with unmatched quality, innovation and a touch of elegance.
        </p>
        <p className="my-6 text-lg info-text lg:max-w-lg">
          Our dedication to details and excellence ensures your satisfaction
        </p>
        <div>
        <Button label="View Details" className=""/>
      </div>
    </div>
    <div className='flex flex-1 justify-center items-center '>
      <img
        src={shoe8}
        className='w-[570px] h-[520px] object-contain' 
      />
    </div>
  </section>
)

export default SuperQuality