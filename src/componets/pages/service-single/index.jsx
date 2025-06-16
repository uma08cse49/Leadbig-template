import SliderSession from "./components/SliderSession";
import { Container, Row } from "react-bootstrap";
import SideBar from "./components/SideBar";
import Details from "./components/Details";
import Service from "./components/Service";
import Case from "./components/ShowCase";
import Hero from "../../Hero";
const page = () => {
  return <>
      <Hero title="UI/UX Design" link="/contact" label="UI/UX design" />
      <SliderSession />
      <div className="service-details-section sp6">
        <Container>
          <Row>
            <SideBar />
            <Details />
          </Row>
        </Container>
        <Service />
        <Case />
        <SliderSession />
      </div>
    </>;
};
export default page;