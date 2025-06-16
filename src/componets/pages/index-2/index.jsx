import { Suspense } from "react";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import SliderSession from "./components/SliderSession";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Loader from "../../Loader";
import CustomCursor from "../../CustomCursor";
import NavBar2 from "../../NavBar/NavBar2";
import BackToTop from "../../BackToTop";
const page = () => {
  return <>
      <Suspense fallback={<Loader />}>
        <CustomCursor />
        <NavBar2 />
        <Hero />
        <SliderSession />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Team />
        <Blog />
        <Footer />
        <BackToTop />
      </Suspense>
    </>;
};
export default page;