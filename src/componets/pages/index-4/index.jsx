import { Suspense } from "react";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Industries from "./Components/Industries";
import Service from "./Components/Service";
import Case from "./Components/ShowCase";
import SliderEnd from "./Components/SliderEnd";
import SliderSession from "./Components/SliderSession";
import Team from "./Components/Team";
import Testimonial from "./Components/Testimonial";
import Loader from "../../Loader";
import CustomCursor from "../../CustomCursor";
import NavBar4 from "../../NavBar/NavBar4";
import BackToTop from "../../BackToTop";
const page = () => {
  return <>
      <Suspense fallback={<Loader />}>
        <CustomCursor colorClassName="procus-cursor cursor3" />
        <NavBar4 />
        <Hero />
        <SliderSession />
        <About />
        <Industries />
        <Service />
        <Case />
        <Testimonial />
        {/* <Team /> */}
        <Blog />
        <SliderEnd />
        {/* <Footer /> */}
        <BackToTop />
      </Suspense>
    </>;
};
export default page;