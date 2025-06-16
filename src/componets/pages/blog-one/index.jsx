import SliderSession from "./SliderSession";
import Blog from "./Blog";
import Hero from "../../Hero";
const page = () => {
  return <>
      <Hero title="Our Blog" link="/contact" label="Our Blog" />
      <SliderSession />
      <Blog />
      <SliderSession />
    </>;
};
export default page;