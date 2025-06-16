import Hero from "../../Hero";
import SliderSession from "./componets/SliderSession";
import Teams from "./componets/Teams";
const page = () => {
  return <>
      <Hero title="our team" link="/contact" label="our team" />
      <SliderSession />
      <Teams />
      <SliderSession />
    </>;
};
export default page;