import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../Constant";
const Footer = () => (
  <footer className="max-container">
    <div className="flex flex-wrap justify-between items-start gap-20 max-lg:flex-col">
      <div className="flex flex-col items-start">
        <a href="/">
          <img src={footerLogo} alt="footer logo" width={150} height={46} />
        </a>
        <p
          className="text-base text-white-400 font-montserrat 
        sm:max-w-sm mt-6 leading-7"
        >
          Get shoes ready for your new termat your nearest Nike store. Find your
          perfect size in store. Get Rewards
        </p>
        <div className="flex items-center gap-5 mt-8">
          {socialMedia.map((icon) => (
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white">
              <img src={icon.src} alt={icon.alt} width={24} height={24} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-between lg:gap-10 gap-20 
                      flex-wrap ">
            {footerLinks.map((link) => (
              <div key={link}>
                 <h2 className="text-white text-2xl font-montserrat leading-normal
                  mb-6">{link.title}</h2>
                 <ul>
                    {link.links.map((link) => (
                      <li
                       key={link}
                       className="text-white-400 text-base leading-normal hover:text-slate-gray cursor-pointer font-montserrat mt-2 "
                      >
                        <a>{link.name}</a>
                      </li>
                    ))}
                 </ul>
              </div>
            ))}
      </div>
      <div className="flex justify-between text-white-400 mt-24
                      max-sm:flex-col max-sm:items-center"> 
              <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer ">
                <img src={} alt="" />
              </div>
      </div>
    </div>
  </footer>
);

export default Footer;
