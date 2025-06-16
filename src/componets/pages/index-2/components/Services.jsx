import { useState } from "react";
import bg4 from "@/assets/img/all-images/bg/bg4.png";
import { Col, Container, Row } from "react-bootstrap";
import logo from "@/assets/img/icons/sub-logo3.svg";
import service5 from "@/assets/img/all-images/service/service-img5.png";
import ele10 from "@/assets/img/elements/elements10.png";
import service6 from "@/assets/img/all-images/service/service-img6.png";
import service7 from "@/assets/img/all-images/service/service-img7.png";
import service8 from "@/assets/img/all-images/service/service-img8.png";
import { Link } from "react-router-dom";
const Services = () => {
  const serviceData = [{
    id: "image1",
    title: "Responsive Development",
    description: "We build websites that perform flawlessly across all devices, providing a seamless experience for every user.",
    image: service5
  }, {
    id: "image2",
    title: "E-commerce Solutions",
    description: "Power your online store with an engaging, secure platform designed to maximize conversions and customer satisfaction.",
    image: service6
  }, {
    id: "image3",
    title: "SEO & Digital Marketing",
    description: "Our strategies drive traffic to your site, enhance visibility, and help your brand connect with the right audience.",
    image: service7
  }, {
    id: "image4",
    title: "Custom Web Design",
    description: "Tailored designs that reflect your brand’s identity, ensuring your website stands out in a crowded digital space.",
    image: service8
  }];
  const [activeImage, setActiveImage] = useState("image4");
  return <div className="service2-section-area sp1" style={{
    backgroundImage: `url(${bg4})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="service-header space-margin60">
              <div className="heading2">
                <h5>
                  <img src={logo} alt="" /> Our Services
                </h5>
                <div className="space20"></div>
                <h2>
                  Creative Solutions <br className="d-lg-block d-none" /> for
                  Your Brand
                </h2>
              </div>
              <div className="btn-area1">
                <Link to="/team" className="vl-btn2">
                  Our Expertise
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={5}>
            <div className="image-container">
              {serviceData.map(item => <div className={`image ${activeImage === item.id ? "active" : ""}`} id={item.id} key={item.id}>
                  <img src={item.image} alt={item.title} className="service-img5" />
                  <img src={ele10} alt="" className="shape" />
                </div>)}
            </div>
          </Col>
          <Col lg={7}>
            <div className="list-container">
              <ul>
                {serviceData.map(item => <li key={item.id} data-image={item.id} onMouseEnter={() => setActiveImage(item.id)}>
                    <div className="side-heading">
                      <div className="heading-area">
                        <a>{item.title}</a>
                        <div className="space16"></div>
                        <p>{item.description}</p>
                      </div>
                      <div className="arrow">
                        <Link to="/service-single">
                          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <path d="M9.16724 34.8312L31.1672 12.8312" stroke="#FEFE1F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.2922 12.8312H31.1672V30.7062" stroke="#FEFE1F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </li>)}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Services;