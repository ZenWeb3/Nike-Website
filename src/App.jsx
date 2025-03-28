import {
  Navbar,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  CustomerReviews,
  SuperQuality,
  Subscribe,
  Footer,
} from "./Sections";

const App = () => (
  <main className="relative overflow-hidden">
    <Navbar />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x padding-t bg-black w-full pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
