import { Col, Container, Row } from "react-bootstrap";
import heroBg1 from "@/assets/img/all-images/bg/hero-bg1.png";
import logo1 from "@/assets/img/icons/sub-logo1.svg";
import element1 from "@/assets/img/elements/elements1.png";
import element2 from "@/assets/img/elements/elements2.png";
import element3 from "@/assets/img/elements/elements3.png";
import otherImg from "@/assets/img/all-images/others/others-img1.png";
import hero from "@/assets/img/all-images/hero/hero-img1.png";
import hero2 from "@/assets/img/all-images/hero/hero-img2.png";
import arrow from "@/assets/img/icons/arrow1.svg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
const Hero = () => {
  return <div className="hero1-section-area" style={{
    backgroundImage: `url(${heroBg1})`,
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <div className="hero-header-area">
              <h5>
                <img src={logo1} alt="logo" /> Designing the Future of Your
                Brand
              </h5>
              <div className="space32"></div>
              <h1 className="text-anime-style-3">
                Digital Designs
                <img src={element1} alt="element" className="elements1 keyframe5" />
              </h1>
              <div className="space40 d-md-block d-none"></div>
              <div className="space16 d-block d-md-none"></div>
              <h1 className="text-anime-style-3">
                <img src={otherImg} alt="" className="others-img1" /> That
                Deliver
              </h1>
            </div>
          </Col>

          <Col lg={1}></Col>

          <Col lg={4}>
            <div className="imges-header">
              <div className="img1">
                <img src={hero} alt="" className="keyframe6" />
              </div>
              <div className="arrow">
                <Link to="/contact">
                  <img src={element2} alt="element2" className="keyframe5" />
                  <img src={arrow} alt="arrow1" className="arrow1" />
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <div className="space60"></div>

        <Row>
          <Col lg={12}>
            <div className="hero-bottom-images">
              <img src={element3} alt="element3" className="elements3" />
              <div className="img1 image-anime">
                <img src={hero2} alt="hero2" />
              </div>
              <div className="started-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="190" height="190" viewBox="0 0 190 190" fill="none" className="keyframe5">
                  <path d="M89.6307 2.22405C92.2799 1.12669 93.6046 0.578013 95 0.578013C96.3954 0.578013 97.7201 1.12669 100.369 2.22405L156.806 25.6008C159.455 26.6982 160.78 27.2468 161.766 28.2336C162.753 29.2203 163.302 30.5449 164.399 33.1942L187.776 89.6307C188.873 92.2799 189.422 93.6046 189.422 95C189.422 96.3954 188.873 97.7201 187.776 100.369L164.399 156.806C163.302 159.455 162.753 160.78 161.766 161.766C160.78 162.753 159.455 163.302 156.806 164.399L100.369 187.776C97.7201 188.873 96.3954 189.422 95 189.422C93.6046 189.422 92.2799 188.873 89.6307 187.776L33.1942 164.399C30.5449 163.302 29.2203 162.753 28.2336 161.766C27.2468 160.78 26.6982 159.455 25.6008 156.806L2.22405 100.369C1.12669 97.7201 0.578013 96.3954 0.578013 95C0.578013 93.6046 1.12669 92.2799 2.22405 89.6307L25.6008 33.1942C26.6982 30.5449 27.2468 29.2203 28.2336 28.2336C29.2203 27.2468 30.5449 26.6982 33.1942 25.6008L89.6307 2.22405Z" fill="#C0F037" />
                </svg>
                <Link to="/contact">
                  <span>
                    <FaArrowRight />
                  </span>
                </Link>
                <div className="space10"></div>
                <Link to="/contact">Get Started</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Hero;