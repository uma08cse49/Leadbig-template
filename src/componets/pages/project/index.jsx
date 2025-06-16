import Hero from "../../Hero";
import SliderSession from "./SliderSession";
import WorkArea from "./WorkArea";
const page = () => {
  return <>
      <Hero title="Our Project" link="/contact" label="project showcase" />
      <SliderSession />
      <WorkArea />
      <SliderSession />
    </>;
};
export default page;