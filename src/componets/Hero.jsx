import hero from "@/assets/img/all-images/hero/hero-img1.png";
import herobg from "@/assets/img/all-images/bg/hero-bg1.png";
import arrow from "@/assets/img/icons/arrow1.svg";
import ele2 from "@/assets/img/elements/elements2.png";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa6";
const Hero = ({
  title = "",
  label = "",
  link = ""
}) => {
  return <div className="inner-section-area" style={{
    backgroundImage: `url(${herobg})`,
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="hero-header-area">
              <h1>{title}</h1>
              <div className="space32"></div>
              <h4>
                <Link to="/">Home</Link>

                <i>
                  <FaChevronRight />
                </i>

                <Link to={link}>{label}</Link>
              </h4>
            </div>
          </Col>
          <Col lg={3}></Col>
          <Col lg={3}>
            <div className="imges-header">
              <div className="img1">
                <img src={hero} alt="" className="keyframe6" />
              </div>
              <div className="arrow">
                <Link to="/contact">
                  <img src={ele2} alt="" className="keyframe5" />
                  <img src={arrow} alt="" className="arrow1" />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <div className="space30"></div>
      </Container>
    </div>;
};
export default Hero;