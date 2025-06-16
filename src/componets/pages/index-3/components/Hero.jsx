import bg4 from "@/assets/img/all-images/bg/hero-bg4.png";
import ele11 from "@/assets/img/elements/elements11.png";
import logo1 from "@/assets/img/icons/sub-logo1.svg";
import ele2 from "@/assets/img/elements/elements2.png";
import hero4 from "@/assets/img/all-images/hero/hero-img4.png";
import hero5 from "@/assets/img/all-images/hero/hero-img5.png";
import arrow from "@/assets/img/icons/arrow1.svg";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
const serviceOptions = [{
  value: "Service",
  label: "Service Type"
}, {
  value: "branding",
  label: "Branding & Identity"
}, {
  value: "web",
  label: "Web Design & Development"
}, {
  value: "marketing",
  label: "Digital Marketing"
}, {
  value: "graphic",
  label: "Graphic Design"
}, {
  value: "uiux",
  label: "UI/UX Design"
}];
const Hero = () => {
  return <div className="hero3-section-area" style={{
    backgroundImage: `url(${bg4})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }}>
      <img src={ele11} alt="" className="elements11" />
      <Container>
        <Row>
          <Col lg={9}>
            <div className="hero3-boxarea">
              <div className="header-heading">
                <h5>
                  <img src={logo1} alt="" />
                  Designing the Future of Your Brand
                </h5>
                <div className="space20"></div>
                <h2 className="text-anime-style-3">
                  Elevates Your Brand Stunning Web Design
                </h2>
              </div>
              <div className="arrow">
                <Link to="/contact">
                  <img src={ele2} alt="" className="keyframe5" />
                  <img src={arrow} alt="" className="arrow1" />
                </Link>
              </div>
            </div>
            <div className="space32"></div>
            <div className="images">
              <div className="img1 image-anime">
                <img src={hero4} alt="" />
              </div>
            </div>
          </Col>

          <Col lg={3} md={6} data-aos="fade-right" data-aos-duration="1000">
            <div className="images-contact-area">
              <div className="img1">
                <img src={hero5} alt="" />
              </div>
              <div className="contact-boxarea">
                <h4>Schedule Appointment</h4>
                <div className="space20"></div>
                <div className="input-area">
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="space16"></div>
                <div className="input-area">
                  <input type="email" placeholder="Email Address" />
                </div>
                <div className="space16"></div>
                <div className="input-area">
                  <Select options={serviceOptions} name="country" id="country" placeholder="Service Type" classNamePrefix="nice-select" />
                </div>
                <div className="space16"></div>

                <div className="input-area">
                  <textarea name="#" id="#" placeholder="Message"></textarea>
                </div>
                <div className="space18"></div>
                <div className="input-area text-end">
                  <button type="submit" className="vl-btn1">
                    Submit Now
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Hero;