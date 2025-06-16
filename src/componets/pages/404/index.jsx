import error from "@/assets/img/all-images/others/erorr-img.png";
import ele15 from "@/assets/img/elements/elements15.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Hero from "../../Hero";
import SliderSession from "./componets/SliderSession";
const page = () => {
  return <>
      <Hero title="404 error" link="/contact" label="404 error" />
      <SliderSession />
      <div className="error-section-area sp6">
        <img src={ele15} alt="" className="elements15" />
        <Container>
          <Row>
            <Col lg={8} className="m-auto">
              <div className="images-content heading1 text-center">
                <div className="img1">
                  <img src={error} alt="" />
                </div>
                <div className="space60"></div>
                <h2>Oops!! Page Not Found</h2>
                <div className="space18"></div>
                <p>
                  It seems that the page you were trying to reach is no longer
                  available or <br className="d-lg-block d-none" /> might have
                  been moved. Don’t worry; you’re not alone-errors happen! We{" "}
                  <br className="d-lg-block d-none" /> understand how
                  frustrating it can be when a link doesn’t work as expected.
                </p>
                <div className="space32"></div>
                <div className="btn-area1">
                  <Link to="/" className="vl-btn1" style={{
                  overflow: "hidden"
                }}>
                    back to home page
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <SliderSession />
    </>;
};
export default page;