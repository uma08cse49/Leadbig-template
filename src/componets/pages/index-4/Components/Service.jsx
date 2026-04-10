import { useState } from "react";
import bg6 from "@/assets/img/all-images/bg/bg6.png";
import logo4 from "@/assets/img/icons/sub-logo4.svg";
import service1 from "@/assets/img/icons/service1.svg";
import service2 from "@/assets/img/icons/service2.svg";
import service3 from "@/assets/img/icons/service3.svg";
import service4 from "@/assets/img/icons/service4.svg";
import service13 from "@/assets/img/all-images/service/service-img13.png";
import service34 from "@/assets/img/elements/elements34.png";
import service33 from "@/assets/img/elements/elements33.png";
import service35 from "@/assets/img/elements/elements35.png";
import service36 from "@/assets/img/elements/elements36.png";
import subLogo from "@/assets/img/icons/sub-logo4.svg";
import check from "@/assets/img/icons/check3.svg";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Service = () => {
  const services = [{
    id: "home",
    title: "Web and Software Development",
    btnText: "BUILD YOUR PLATFORM",
    icon: service1,
    heading: "Web and Software Development",
    subHeading: "ENGINEERED FOR PERFORMANCE.BUILD FOR SCALE.",
    description: "We create robust digital infrastructure that supports your business as it grows.Every solution is designed to be fast,flexible and ready for future expansion.",
    points: ["High performanve Web & Software Systems", "Automation and API Integrations", "Future Ready Scalable Architecture"],
    image: service13
  }, {
    id: "profile",
    title: "UI/UX & Product Design",
    btnText: "DESIGN YOUR EXPERIENCE",
    icon: service2,
    heading: "UI/UX & Product Design",
    subHeading: "DESIGNED FOR USER AND OPTIMIZED FOR RESULTS.",
    description: "We create a seamless digital experience that reduce friction,improve usability and guide users towards meaningful actions - from first click to final conversion ",
    points: ["UX Strategy and wireframing", "Hi-Impact UI Design","Coversion and Usability optimisation"],
    image: service13
  }, {
    id: "contact",
    title: "Growth Marketing",
    btnText: "START GROWING",
    icon: service3,
    heading: "Growth Marketing",
    subHeading: "DRIVE TARGETED TRAFFIC.GENERATE CONSISTENT LEADS.",
    description: "We design and xecute marketing Strategies backed by data,ensuring every campaign drives visibility,engagement and rea business outcomes.",
    points: ["SEO and Organic Growth", "Paid Advertising(Google & Meta)","Conversion Tracking & Optimisation"],
    image: service13
  }, {
    id: "contact1",
    title: "E-commerce & Conversion",
    btnText: "START SELLING SMARTER",
    icon: service4,
    heading: "E-commerce & Conversion",
    subHeading: "DESIGNED TO SELL.OPTIMISED TO SCALE.",
    description: "We create hign performance commerce systems that go beyond just selling - driving repeat purchases, higher conversions and long-term customer value.",
    points: ["Custom E-commerce platforms", "Sales funnel architecture", "Conversion rate optimisation"],
    image: service13
  }];
  const [activeTab, setActiveTab] = useState("home");
  return <div className="service4-section-area sp1" style={{
    backgroundImage: `url(${bg6})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }}>
      <Container>
        <Row>
          <Col lg={5} className="m-auto text-center">
            <div className="heading3 space-margin60">
              <h5>
                <img src={logo4} alt="" /> TRUSTED ACROSS INDUSTRIES
              </h5>
              <div className="space20"></div>
              <h2>BUILD TO PERFORM. DESIGNED TO SCALE.</h2>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={10} className="m-auto">
            <div className="service-tabs-area">
              <ul className="nav nav-pills" role="tablist">
                {services.map(service => <li className="nav-item" key={service.id} role="presentation">
                    <button className={`nav-link ${activeTab === service.id ? "active" : ""}`} onClick={() => setActiveTab(service.id)}>
                      <span className="icons">
                        <img src={service.icon} alt="" />
                      </span>
                      <span className="text">{service.title}</span>
                    </button>
                  </li>)}
              </ul>

              <div className="space100"></div>

              <div className="tab-content">
                {services.map(service => <div key={service.id} className={`tab-pane fade ${activeTab === service.id ? "show active" : ""}`}>
                    <Row>
                      <Col lg={5}>
                        <div className="service-heading heading3">
                          <h5>
                            <img src={subLogo} alt="" /> {service.heading}
                          </h5>
                          <div className="space16"></div>
                          <h2>{service.subHeading}</h2>
                          <div className="space16"></div>
                          <p>{service.description}</p>
                          <div className="space8"></div>
                          <ul>
                            {service.points.map((point, idx) => <li key={idx}>
                                <img src={check} alt="" /> {point}
                              </li>)}
                          </ul>
                          <div className="space32"></div>
                          <div className="btn-area1">
                            <Link to="/contact" className="vl-btn3" style={{
                          overflow: "hidden"
                        }}>
                              {service.btnText}
                            </Link>
                          </div>
                        </div>
                      </Col>
                      <Col lg={7}>
                        <div className="space50 d-lg-none d-block"></div>
                        <div className="service-images">
                          <div className="img1">
                            <img src={service.image} alt="" />
                          </div>
                          <img src={service33} alt="" className="elements33 aniamtion-key-1" />
                          <img src={service34} alt="" className="elements34 aniamtion-key-2" />
                          <img src={service35} alt="" className="elements35" />
                          <img src={service36} alt="" className="elements36" />
                        </div>
                        <div className="space50 d-lg-none d-block"></div>
                      </Col>
                    </Row>
                  </div>)}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Service;