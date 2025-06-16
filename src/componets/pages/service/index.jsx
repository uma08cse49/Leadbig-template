import SliderSession from "./components/SliderSession";
import Industries from "./components/Industries";
import Service from "./components/Service";
import Case from "./components/ShowCase";
import Hero from "../../Hero";
const page = () => {
  return <>
      <Hero title="services" link="/contact" label="our services" />
      <SliderSession />
      <Industries />
      <Service />
      <Case />
      <SliderSession />
    </>;
};
export default page;