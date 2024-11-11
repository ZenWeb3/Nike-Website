import {products} from "../Constant"
import PopularProductCard from '../Components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col gap-5 justify-start">
          <h1 className="text-4xl font-palanquin font-bold">
            Our <span className="text-coral-red">Product</span> Collection
          </h1>
          <p className="font-montserrat text-slate-gray text-lg
        leading-8 mt-4 mb-14  ">
            Experience top-notch quality and style with our sought-after <br className="block max-md:hidden"/> selections.
            Discover a world of comfort, design and value
          </p>
          <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-3 
            sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-6">
              {products.map((product) => (
                <PopularProductCard
                  key={product.name} {...product}
                />
              ))}
          </div>
      </div>
    </section>
  )
}

export default PopularProducts