import ele12 from "@/assets/img/elements/elements12.png";
import ele13 from "@/assets/img/elements/elements13.png";
import image5 from "@/assets/img/all-images/about/about-img5.png";
import image4 from "@/assets/img/all-images/about/about-img4.png";
import logo2 from "@/assets/img/icons/sub-logo2.svg";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import ReactCountUp from "react-countup";
const About = () => {
  return <div className="abotu3-section-area sp1">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="about-images-area">
              <img src={ele12} alt="" className="elements12" />
              <img src={ele13} alt="" className="elements13 keyframe5" />
              <Row>
                <Col lg={6} md={6}>
                  <div className="img1  image-anime">
                    <img src={image5} alt="" />
                  </div>
                </Col>
                <Col lg={6} md={6}>
                  <div className="space50 d-md-block d-none"></div>
                  <div className="space30 d-block d-md-none"></div>
                  <div className="img1  image-anime">
                    <img src={image4} alt="" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={6}>
            <div className="about-heading heading1">
              <h5 data-aos="fade-left" data-aos-duration="800">
                <img src={logo2} alt="" />
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
              <div className="space28"></div>
              <Row>
                <Col lg={12}>
                  <div className="counter-boxarea">
                    <div className="counter-box">
                      <h2>
                        <span className="counter">
                          <ReactCountUp end={99} />
                        </span>
                        %
                      </h2>
                      <div className="space16"></div>
                      <p>Boost Engagement</p>
                    </div>
                    <span className="border"> | </span>
                    <div className="counter-box">
                      <h2>
                        <span className="counter">
                          <ReactCountUp end={100} />
                        </span>
                        %
                      </h2>
                      <div className="space16"></div>
                      <p>Increase Conversion</p>
                    </div>
                    <span className="border"> | </span>
                    <div className="counter-box">
                      <h2>
                        <span className="counter">
                          <ReactCountUp end={600} />
                        </span>
                        +
                      </h2>
                      <div className="space16"></div>
                      <p>Website Launch</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="space40"></div>
              <div className="btn-area1" data-aos="fade-left" data-aos-duration="1000">
                <Link to="/contact" className="vl-btn1" style={{
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