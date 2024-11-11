import Button from "../Components/Button"


const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-between
     items-center max-lg:flex-col gap-10">
      <h1 className="font-palanquin text-4xl font-bold leading-[68px] lg:max-w-md">
        Sign Up For <span className="text-coral-red">Updates</span> & Newsletter
      </h1>
      <div className="lg:max-w-[40%] flex items-center w-full max-sm:flex-col
                      gap-5 p-2.5 sm:border rounded-full ">
        <input type="email"
          placeholder="subscribe@nike.com"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button 
          label="Sign Up"
          fullWidth
          />
        </div>
      </div>
    </section>
  )
}

export default Subscribe