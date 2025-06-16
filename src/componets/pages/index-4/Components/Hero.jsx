import bg5 from "@/assets/img/all-images/bg/hero-bg5.png";
import ele27 from "@/assets/img/elements/elements27.png";
import ele28 from "@/assets/img/elements/elements28.png";
import ele30 from "@/assets/img/elements/elements30.png";
import logo from "@/assets/img/icons/sub-logo1.svg";
import ele29 from "@/assets/img/elements/elements29.png";
import image3 from "@/assets/img/all-images/others/others-img3.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Hero = () => {
  return <div className="hero4-section-area" style={{
    backgroundImage: `url(${bg5})`,
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }}>
      <img src={ele27} alt="" className="elements27 aniamtion-key-1" />
      <img src={ele28} alt="" className="elements28 aniamtion-key-3" />
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="m-auto">
            <div className="hero-header-area text-center">
              <img src={ele30} alt="" className="elements30 aniamtion-key-2" />
              <h5>
                <img src={logo} alt="" /> Designing the Future of Your Brand
              </h5>
              <div className="space32"></div>
              <h1 className="text-anime-style-3">
                Pixel-Perfect{" "}
                <img src={ele29} alt="" className="elements1 keyframe5" />
              </h1>
              <div className="space40 d-md-block d-none"></div>
              <div className="space16 d-block d-md-none"></div>
              <h1 className="text-anime-style-3">
                <img src={image3} alt="" className="others-img1" /> Web Design
              </h1>
              <div className="space40"></div>
              <div className="btn-area1">
                <Link to="/project" style={{
                overflow: "hidden"
              }} className="vl-btn3">
                  Start Your Project Today
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Hero;