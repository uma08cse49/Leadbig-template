import Hero from "../../Hero";
import SliderSession from "./components/SliderSession";
import Testimonial from "./components/Testimonial";
import TestimonialCard from "./components/TestimonialCard";
const page = () => {
  return <>
      <Hero title="testimonials" link="/contact" label="testimonial" />
      <SliderSession />
      <Testimonial />
      <TestimonialCard />
    </>;
};
export default page;