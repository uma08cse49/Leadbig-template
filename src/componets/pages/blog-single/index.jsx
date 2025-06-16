import SliderSession from "./SliderSession";
import SideBar from "./SideBar";
import { Container, Row } from "react-bootstrap";
import BlogDetails from "./BlogDetails";
import Blog from "./Blog";
import Hero from "../../Hero";
const page = () => {
  return <>
      <Hero title="Blog Details" link="/contact" label="Blog Details" />
      <SliderSession />
      <div className="blog-details-section-area sp9">
        <Container>
          <Row>
            <SideBar />
            <BlogDetails />
          </Row>
        </Container>
        <Blog />
      </div>
    </>;
};
export default page;