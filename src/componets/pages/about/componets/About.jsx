import about from "@/assets/img/all-images/about/about-img1.png";
import ele8 from "@/assets/img/elements/elements8.png";
import ele9 from "@/assets/img/elements/elements9.png";
import sublogo from "@/assets/img/icons/sub-logo2.svg";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const About = () => {
  return <div className="about1-section-area sp6">
      <img src={ele9} alt="" className="elements9" />
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="images">
              <div className="img1">
                <img src={about} alt="" />
              </div>
              <img src={ele8} alt="" className="elements8" />
            </div>
          </Col>

          {/* <Col lg={6}>
            <div className="about-header heading1">
              <h5 data-aos="fade-left" data-aos-duration="800">
                <img src={sublogo} alt="" />
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
                <Link to="/contact" className="vl-btn1" style={{
                overflow: "hidden"
              }}>
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </Col> */}

          <Col lg={6}>
            <div className="about-header heading1">
              
              <h5 data-aos="fade-left" data-aos-duration="800">
                <img src={sublogo} alt="" />
                ABOUT OUR COMPANY
              </h5>

              <div className="space20"></div>

              <h2 className="text-anime-style-3">
                Who We Are
              </h2>

              <div className="space16"></div>

              <p data-aos="fade-left" data-aos-duration="900">
                We are a passionate team of developers and digital solution providers 
                dedicated to building scalable, efficient, and user-friendly applications. 
                Our goal is to help businesses transform their ideas into powerful digital experiences.
              </p>

              <div className="space16"></div>

              <p data-aos="fade-left" data-aos-duration="1000">
                With expertise in modern technologies, we focus on delivering high-quality 
                solutions that are secure, reliable, and performance-driven. We believe in 
                creating long-term value for our clients through innovation and commitment.
              </p>

              <div className="space24"></div>

              <ul data-aos="fade-left" data-aos-duration="1100">
                <li>✔️ Customer-focused approach</li>
                <li>✔️ Scalable & secure solutions</li>
                <li>✔️ Modern technologies</li>
                <li>✔️ On-time delivery</li>
              </ul>

              <div className="space32"></div>

              <div className="btn-area1" data-aos="fade-left" data-aos-duration="1200">
                <Link to="/contact" className="vl-btn1" style={{ overflow: "hidden" }}>
                  Get in Touch
                </Link>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default About;