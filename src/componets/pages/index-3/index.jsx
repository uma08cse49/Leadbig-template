import { Suspense } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import SliderSession from "./components/SliderSession";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Loader from "../../Loader";
import CustomCursor from "../../CustomCursor";
import Navbar3 from "../../NavBar/Navbar3";
import BackToTop from "../../BackToTop";
const page = () => {
  return <>
      <Suspense fallback={<Loader />}>
        <CustomCursor />
        <Navbar3 />
        <Hero />
        <SliderSession />
        <About />
        <Service />
        <Portfolio />
        <Team />
        <Testimonial />
        <SliderSession />
        <Footer />
        <BackToTop />
      </Suspense>
    </>;
};
export default page;