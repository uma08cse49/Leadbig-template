import SliderSession from "./SliderSession";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import ProjectDetails from "./ProjectDetails";
import Projects from "./Projects";
import Hero from "../../Hero";
const page = () => {
  return <>
      <Hero title="our project" link="/contact" label="project showcase" />
      <SliderSession />
      <div className="project-details-section-area sp6">
        <Container>
          <Row>
            <Col lg={4}>
              <SideBar />
            </Col>
            <Col lg={8}>
              <ProjectDetails />
            </Col>
          </Row>
        </Container>
        <Projects />
        <SliderSession />
      </div>
    </>;
};
export default page;