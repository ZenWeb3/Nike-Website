import { reviews } from "../Constant";
import ReviewCard from "../Components/ReviewCard";
const CustomerReviews = () => (
  <section className="max-container">
    <h3 className="text-4xl font-bold font-palanquin text-center">
      What Our <span className="text-coral-red">Customers</span> Say?
    </h3>
    <p className="info-text max-w-lg text-center m-auto mt-4 ">
      Hear geniune stories of our satisfied customers about their exceptional
      experience with us.
    </p>
    <div
      className="mt-24 flex flex-1 justify-evenly max-lg:flex-col
      items-center gap-14 "
    >
      {reviews.map((review) => (
        <ReviewCard 
        key={review.id}
        {...review}
        />
      ))}
    </div>
  </section>
);

export default CustomerReviews;
