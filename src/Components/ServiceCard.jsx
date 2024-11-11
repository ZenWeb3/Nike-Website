const ServiceCard = ({imgURL, label, subtext}) => (
    <div className="flex flex-1 sm:w-[350px] sm:min-w-[350px]
    rounded-[20px] shadow-3xl flex-col w-full px-10 max-md:py-8 py-16">
        <div className="flex justify-center items-center h-11 w-11 bg-coral-red rounded-full">
            <img src={imgURL} alt={label} className="w-[30px] h-[30px]" />
        </div>
        <h2 className="mt-5 font-palanquin text-3xl font-bold leading-normal">
            {label}
        </h2>
        <p className="text-slate-gray text-lg break-words leading-normal mt-3">
            {subtext}
        </p>
    </div>
)

export default ServiceCard