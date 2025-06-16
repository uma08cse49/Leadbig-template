import SliderSession from "./components/SliderSession";
import Faq from "./components/Faq";
import Hero from "../../Hero";
const page = () => {
  return <>
      <Hero title="Faq Question" link="/contact" label="Faq Question" />
      <SliderSession />
      <Faq />
      <SliderSession />
    </>;
};
export default page;