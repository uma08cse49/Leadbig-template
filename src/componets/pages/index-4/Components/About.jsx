import about1 from "@/assets/img/all-images/about/about-img1.png";
import ele31 from "@/assets/img/elements/elements31.png";
import subLogo4 from "@/assets/img/icons/sub-logo4.svg";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
const About = () => {
  return <div className="about4-section-area sp6">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="images">
              <div className="img1">
                <img src={about1} alt="" />
              </div>
              <img src={ele31} alt="" className="elements8" />
            </div>
          </Col>

          <Col lg={6}>
            <div className="about-header heading3">
              <h5 data-aos="fade-left" data-aos-duration="800">
                <img src={subLogo4} alt="" />
                Driven to the Creativity
              </h5>
              <div className="space20"></div>
              <h2 className="text-anime-style-3">
                Crafting Website with Purpose and Passions
              </h2>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">
                Our team of designers, developers, and strategists are
                passionate about bringing your brand’s vision to life through
                innovative user.
              </p>
              <div className="space32"></div>
              <div className="bg-progress" data-aos="fade-left" data-aos-duration="1000">
                <div className="progress-bar">
                  <label>
                    User Interface Designer <span>98%</span>
                  </label>
                  <div className="progress">
                    <div className="progress-inner" style={{
                    width: "98%"
                  }}></div>
                  </div>
                </div>

                <div className="progress-bar m-0">
                  <label>
                    WordPress Developer <span>99%</span>
                  </label>
                  <div className="progress">
                    <div className="progress-inner" style={{
                    width: "99%"
                  }}></div>
                  </div>
                </div>
              </div>
              <div className="space32"></div>
              <div className="btn-area1" data-aos="fade-left" data-aos-duration="1100">
                <Link to="/contact" className="vl-btn3" style={{
                overflow: "hidden"
              }}>
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default About;