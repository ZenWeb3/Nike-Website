import { services } from "../Constant"
import ServiceCard from '../Components/ServiceCard'
const Services = () => (
  <section id="Services" className="max-container flex-wrap flex flex-1  gap-9
                            justify-center items-center">
    {services.map((service) => (
          <ServiceCard  key={service.id} {...service}/>
    ))}
  </section>
)

export default Services 