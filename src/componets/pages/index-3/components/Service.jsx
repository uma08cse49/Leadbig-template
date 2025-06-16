import bg5 from "@/assets/img/all-images/bg/bg5.png";
import ele15 from "@/assets/img/elements/elements15.png";
import logo2 from "@/assets/img/icons/sub-logo2.svg";
import service9 from "@/assets/img/all-images/service/service-img9.png";
import service2 from "@/assets/img/all-images/service/service-img2.png";
import service3 from "@/assets/img/all-images/service/service-img3.png";
import service4 from "@/assets/img/all-images/service/service-img4.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
const Service = () => {
  return <div className="service3-section-area sp6" style={{
    backgroundImage: `url(${bg5})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }}>
      <img src={ele15} alt="" className="elements15" />
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <div className="service-header heading1 text-center space-margin60">
              <h5>
                <img src={logo2} alt="" />
                Driven to the Creativity
              </h5>
              <div className="space20"></div>
              <h2 className="text-anime-style-3">Our Web Design Services</h2>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <div className="service-branding-boxesarea" data-aos="fade-up" data-aos-duration="900">
              <div className="service-brand-head">
                <h2>
                  <Link to="/service-single">Branding Identity</Link>
                </h2>
                <div className="space8"></div>
                <ul className="service-list">
                  <li>
                    <Link to="#">#BrandIdentityDesign</Link>
                  </li>
                  <li>
                    <Link to="#">#DesignYourBrand</Link>
                  </li>
                </ul>
              </div>
              <div className="hidden-img">
                <img src={service9} alt="" />
              </div>
              <div className="arrow">
                <Link to="/service-single">
                  <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="service-branding-boxesarea" data-aos="fade-up" data-aos-duration="1000">
              <div className="service-brand-head">
                <h2>
                  <Link to="/service-single">E-commerce Shop</Link>
                </h2>
                <div className="space8"></div>
                <ul className="service-list">
                  <li>
                    <Link to="javascript:void(0);">#EcommerceExperts</Link>
                  </li>
                  <li>
                    <Link to="javascript:void(0);">#DesignYourBrand</Link>
                  </li>
                </ul>
              </div>
              <div className="hidden-img">
                <img src={service2} alt="" />
              </div>
              <div className="arrow">
                <Link to="/service-single">
                  <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="service-branding-boxesarea" data-aos="fade-up" data-aos-duration="1100">
              <div className="service-brand-head">
                <h2>
                  <Link to="/service-single">ui/ux designer</Link>
                </h2>
                <div className="space8"></div>
                <ul className="service-list">
                  <li>
                    <Link to="javascript:void(0);">#DesignInspiration</Link>
                  </li>
                  <li>
                    <Link to="javascript:void(0);">#UserCenteredDesign</Link>
                  </li>
                </ul>
              </div>
              <div className="hidden-img">
                <img src={service3} alt="" />
              </div>
              <div className="arrow">
                <Link to="/service-single">
                  <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className="service-branding-boxesarea" data-aos="fade-up" data-aos-duration="1200" style={{
            borderBottom: "1px solid #282A2D"
          }}>
              <div className="service-brand-head">
                <h2>
                  <Link to="/service-single">Digital Marketing</Link>
                </h2>
                <div className="space8"></div>
                <ul className="service-list">
                  <li>
                    <Link to="javascript:void(0);">#WebDevelopment</Link>
                  </li>
                  <li>
                    <Link to="javascript:void(0);">#FrontendDevelopment</Link>
                  </li>
                </ul>
              </div>
              <div className="hidden-img">
                <img src={service4} alt="" />
              </div>
              <div className="arrow">
                <Link to="/service-single">
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Service;