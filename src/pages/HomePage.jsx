import React, { useState } from "react";
import Hero19 from "../components/home3/Hero19";
import Service9 from "../components/home3/Service9";
import Statistic4 from "../components/home3/Statistic4";
import Service8 from "../components/home3/Service8";
import Service8_2 from "../components/home3/Service8_2";
import Service8_3 from "../components/home3/Service8_3";
import Service8_4 from "../components/home3/Service8_4";
import Testimonial5 from "../components/home3/Testimonial5";
import Company3 from "../components/home3/Company3";
import Product from "../components/home3/Product";
import Pricing3 from "../components/home3/Pricing3";
import CTA12 from "../components/home3/CTA12";
import Faq6 from "../components/home3/Faq6";
import CTA3 from "../components/home3/CTA3";
import Contact4 from "../components/home3/Contact4";
// import Hero2 from "../components/home3/Hero2";
// import Company3 from "../components/home3/Company3";
// import Service1 from "../components/home3/Service1";
// import About from "../components/home3/About";
// import Service4 from "../components/home3/Service4";
// import Statistic1 from "../components/home3/Statistic1";
// import Gallery5 from "../components/home3/Gallery5";
// import Pricing4 from "../components/home3/Pricing4";
// import CTA12 from "../components/home3/CTA12";
// import Testimonial5 from "../components/home3/Testimonial5";
// import Contact1 from "../components/home3/Contact1";
// import Hero19 from "../components/home/Hero19";
// import Header from "../components/home/Header";
// import Service1 from "../components/home/Service1";
// import About from "../components/home/About";
// // import Service4 from "../components/home/Service4";
// // import CTA12 from "../components/home/CTA12";
// import Testimonial5 from "../components/home/Testimonial5";
// import Contact1 from "../components/home/Contact1";
// import Footer5 from "../components/home/Footer5";
// import Portfolio from "../components/home/Portfolio";
// import Service4 from "../components/home3/Service4";
// import Hero38 from "../components/home3/Hero38";
// import Service7 from "../components/home3/Service7";
// import Statistic4 from "../components/about/Statistic4";
// import CTA12 from "../components/home3/CTA12";
// import Faq5 from "../components/home3/Faq5";
// import Gallery5 from "../components/home3/Gallery5";
// import Company1 from "../components/home3/Company1";
// import Product from "../components/home3/Product";
// import CTA10 from "../components/home3/CTA10";
// import Testimonial4 from "../components/home3/Testimonial4";
// import Pricing2 from "../components/home3/Pricing2";
// import Blog from "../components/home3/Blog";
// import Contact5 from "../components/home3/Contact5";
// import HomePage2 from "../components/home/homePage";

function HomePage() {
  const [voirEtaps, setVoirEtaps] = useState(false);

  return (
    <div>
      <Hero19 />
      <Service9 />
      <Statistic4 />
      <Service8 />
      <Service8_2 setVoirEtaps={setVoirEtaps} voirEtaps={voirEtaps} />
      {voirEtaps && <Service8_3 />}
      {voirEtaps && (
        <Service8_4 setVoirEtaps={setVoirEtaps} voirEtaps={voirEtaps} />
      )}
      <Testimonial5 />
      <Company3 />
      {/* <Product grid={true} /> */}
      <Pricing3 />
      <CTA12 />
      <Faq6 />
      {/* <Blog /> */}
      <CTA3 />
      <Contact4 />
      {/* <Footer3 /> */}
      {/* <Hero38 />
      <Service7 />
      <Service4 />
      <CTA12 />
      <Faq5 />
      <Gallery5 />
      <Company1 />
      <Product grid={true} />
      <CTA10 />
      <Testimonial4 />
      <Pricing2 />
      <Contact5 /> */}
      {/* <Hero2 />
      <Company3 />

      <Service1 />
      <About />
      <Service4 />
      <Statistic1 />
      <Gallery5 />
      <Pricing4 />
      <CTA12 />
      <Testimonial5 />
      <Contact1 /> */}
    </div>
  );
}

export default HomePage;
