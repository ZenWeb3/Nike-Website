import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => (
  <div className="flex flex-col justify-center items-center ">
    <img
      src={imgURL}
      alt={customerName}
      className="rounded-full object-contain w-[120px] h-[120px]"
    />
    <p className="info-text font-montserrat mt-4 max-w-sm text-center">{feedback}</p>
    <div className="flex gap-4 mt-4 items-center" >
      <img src={star} width={24} height={24} className="object-contain m-0" />
      <p className="font-montserrat text-slate-gray">({rating})</p>
    </div>
    <h3 className="text-2xl mt-4 font-bold">{customerName}</h3>
  </div>
);

export default ReviewCard;
