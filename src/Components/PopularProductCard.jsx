import {star} from '../assets/icons'

const PopularProductCard = ({ imgURL, name, price }) => (
  <div className="flex flex-col flex-1 w-full max-sm:w-full">
    <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
    <div className="flex justify-start mt-8 gap-2.5">
        <img src={star} alt="star" className="w-[28px] h-[28px]" />
        <p className='font-montserrat text-slate-gray text-xl leading-normal'>
            (4.5)
        </p>
    </div>
    <h3 className='mt-2 font-palanquin learning-normal font-semibold text-2xl'>{name}</h3>
    <p>{price}</p>
  </div>
);

export default PopularProductCard;
