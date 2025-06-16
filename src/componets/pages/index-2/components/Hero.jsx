import hero from "@/assets/img/all-images/bg/hero-bg3.png";
import ele2 from "@/assets/img/elements/elements2.png";
import arrow from "@/assets/img/icons/arrow1.svg";
import hero3 from "@/assets/img/all-images/hero/hero-img3.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Hero = () => {
  return <div className="hero2-section-area">
      <img src={hero} alt="" className="hero-bg3" />
      <Container>
        <Row>
          <Col lg={3}>
            <div className="top-heading">
              <h3>
                WEB DESIGN
                <span>DEVELOPMENT</span>
                MARKETING
              </h3>
              <div className="arrow">
                <Link to="/contact">
                  <img src={ele2} alt="" className="keyframe5" />
                  <img src={arrow} alt="" className="arrow1" />
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="main-images-area">
              <div className="img1 keyframe6">
                <img src={hero3} alt="" className="img-fluid" />
              </div>
            </div>
          </Col>
          <Col lg={2}>
            <div className="peragraph-area">
              <p>
                Our team of designers, developers, and strategists are
                passionate about bringing your brand’s vision to life through
                innovative user.
              </p>
              <div className="space24"></div>
              <div className="btn-area1">
                <Link to="/contact" className="vl-btn2">
                  Get Started Today
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="marquee-wrap">
        <div className="marquee-text">
          <div className="main-heading">
            <h1>WEB DESIGN</h1>
            <h1>WEB DESIGN</h1>
            <h1>WEB DESIGN</h1>
            <h1>WEB DESIGN</h1>
            <h1>WEB DESIGN</h1>
            <h1>WEB DESIGN</h1>
            <h1>WEB DESIGN</h1>
            <h1>WEB DESIGN</h1>
            <h1>WEB DESIGN</h1>
            <h1>WEB DESIGN</h1>
            <h1>WEB DESIGN</h1>
            <h1>WEB DESIGN</h1>
            <h1>WEB DESIGN</h1>
            <h1>WEB DESIGN</h1>
            <h1>WEB DESIGN</h1>
            <h1>WEB DESIGN</h1>
            <h1>WEB DESIGN</h1>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;