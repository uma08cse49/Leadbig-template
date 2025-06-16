import Blog from "./components/Blog";
import Brand from "./components/Brand";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import Service from "./components/Service";
import Case from "./components/ShowCase";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import { Suspense } from "react";
import BackToTop from "../../BackToTop";
import CustomCursor from "../../CustomCursor";
import Loader from "../../Loader";
import NavBar from "../../NavBar/NavBar";
import About from "./components/About";
const page = () => {
  return <>
      <Suspense fallback={<Loader />}>
        <CustomCursor />
        <NavBar />
        <Hero />
        <Brand />
        <About />
        <Industries />
        <Service />
        <Case />
        <Testimonial />
        <Team />
        <Blog />
        <Brand />
        <Footer />
        <BackToTop />
      </Suspense>
    </>;
};
export default page;