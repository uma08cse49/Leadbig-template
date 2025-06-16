import { Col, Container, Row } from "react-bootstrap";
import subLogo from "@/assets/img/icons/sub-logo3.svg";
import about2 from "@/assets/img/all-images/about/about-img2.png";
import about3 from "@/assets/img/all-images/about/about-img3.png";
import { Link } from "react-router-dom";
const About = () => {
  return <div className="about2-section-area sp1">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="heading2">
              <h5>
                <img src={subLogo} alt="" />
                About Agency
              </h5>
              <div className="space20"></div>
              <h2>Passion for Design Driven by Results</h2>
              <div className="space32"></div>
              <div className="btn-area1">
                <Link to="/about" className="vl-btn2">
                  Explore More
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <Row>
              <Col lg={7} md={6}>
                <div className="about-images heading2">
                  <div className="img1 image-anime reveal img">
                    <img src={about2} alt="" />
                  </div>
                  <div className="space24"></div>
                  <p>
                    Renev is a forward-thinking web design agency committed to
                    creating powerful, visually stunning websites that drive
                    results. Our team of designers, developers, and strategists
                    work together to build websites that captivate, engage, and
                    convert visitors into loyal customers.
                  </p>
                </div>
              </Col>
              <Col lg={5} md={6}>
                <div className="space100 d-lg-block d-none"></div>
                <div className="space100 d-lg-block d-none"></div>
                <div className="space28"></div>
                <div className="img1 image-anime reveal img ">
                  <img src={about3} alt="" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default About;