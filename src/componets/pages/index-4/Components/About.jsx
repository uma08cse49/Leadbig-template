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
                INTEGRATED DIGITAL EXPERTIS
              </h5>
              <div className="space20"></div>
              <h2 className="text-anime-style-3">
                FROM DEVELOPMENT TO GROWTH - WE DELIVER BOTH
              </h2>
              <div className="space16"></div>
              <p data-aos="fade-left" data-aos-duration="900">
                At Leadbig.in, we focus on delivering high-quality digital solutions backed by strong execution and attention to detail. 
                Our team ensures every project is built with precision, optimised for performance, and aligned with your business goal.
              </p>
              <div className="space32"></div>
              <div className="bg-progress" data-aos="fade-left" data-aos-duration="1000">
                <div className="progress-bar">
                  <label>
                    Web & Software Development <span>95%</span>
                  </label>
                  <div className="progress">
                    <div className="progress-inner" style={{
                    width: "95%"
                  }}></div>
                  </div>
                </div>

                <div className="progress-bar m-0">
                  <label>
                    Digital Marketing Execution <span>92%</span>
                  </label>
                  <div className="progress">
                    <div className="progress-inner" style={{
                    width: "92%"
                  }}></div>
                  </div>
                </div>
              </div>
              <div className="space32"></div>
              <div className="btn-area1" data-aos="fade-left" data-aos-duration="1100">
                <Link to="/contact" className="vl-btn3" style={{
                overflow: "hidden"
              }}>
                  BOOK A FREE CONSULTATION
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default About;