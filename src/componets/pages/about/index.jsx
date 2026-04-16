import Hero from "../../Hero";
import About from "./componets/About";
import Counter from "./componets/Counter";
import Industries from "./componets/Industries";
import Partners from "./componets/Partners";
import Slider from "./componets/SliderSession";
import Team from "./componets/Team";
import MissionVision from "./componets/MissionVision";
import WhyChooseUs from "./componets/WhyChooseUs";
import OurProcess from "./componets/OurProcess";
import Achivement from "./componets/Achivement";
import CTA from "./componets/CallToAction";

const Page = () => {
  return <>
      <Hero title="About Us" link="/about" label="About us" />
      <Slider />
      <About />
      <MissionVision />
      <WhyChooseUs />
      <OurProcess/>
      <Achivement />
      <CTA />
      <Counter />
      <Industries />
      <Partners />
      {/* <Team /> */}
      <Slider />
    </>;
};
export default Page;