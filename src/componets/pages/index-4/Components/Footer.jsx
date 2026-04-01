import { Link } from "react-router-dom";
import ele32 from "@/assets/img/elements/elements32.png";
import { Col, Container, Form, Row } from "react-bootstrap";
import logo4 from "@/assets/img/logo/Leadbig-logo.png";
import phone1 from "@/assets/img/icons/phn1.svg";
import location from "@/assets/img/icons/location1.svg";
import email from "@/assets/img/icons/email1.svg";
import global from "@/assets/img/icons/global1.svg";
import image4 from "@/assets/img/all-images/others/others-img4.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
const Footer = () => {
  const socialLinks = [{
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/profile.php?id=61579026411412&sk=about"
  }, {
    icon: <FaLinkedinIn />,
    url: "https://x.com/LeadbigOfficial"
  }, {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/leadbigofficial"
  }, {
    icon: <FaYoutube />,
    url: "https://www.youtube.com/@leadbig"
  }];
  const quickLinks = [{
    name: "About Us",
    url: "/about"
  }, {
    name: "Service",
    url: "/service"
  }, {
    name: "Project",
    url: "/project"
  }, {
    name: "Pricing Plan",
    url: "#"
  }, {
    name: "Contact Us",
    url: "/contact"
  }];
  const contactInfo = [{
    url: "tel:+91 99404 27777",
    icon: phone1,
    text: "+91 99404 27777"
  }, {
    url: "#",
    icon: location,
    text: "No. 110/2, Agaram,Perambur Purasawalkam, Chennai - 600082"
  }, {
    url: "mailto:renevagency@com",
    icon: email,
    text: "renevagency@com"
  }, {
    url: "https://www.leadbig.in",
    icon: global,
    text: "leadbig.in"
  }];
  return <>
      <div className="cta-btn-area6 sp8">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="btn-area">
                <Link to="/contact" className="cta-btn1">
                  Get In touch
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="vl-footer4-section-area sp8">
        <img src={ele32} alt="" className="elements6" />
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <div className="footer-logo1">
                <img src={logo4} alt="" />
                <div className="space16"></div>
                <p>
                  At Renev, we believe that every business has the potential to
                  the thrive with the right guidance.
                </p>
                <div className="space24"></div>
                <ul>
                  {socialLinks.map((link, index) => <li key={index}>
                      <Link to={link.url}>{link.icon}</Link>
                    </li>)}
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="space30 d-md-none d-block"></div>
              <div className="vl-footer-widget first-padding">
                <h3>Quick Links</h3>
                <div className="space4"></div>
                <ul>
                  {quickLinks.map((link, index) => <li key={index}>
                      <Link to={link.url}>{link.name}</Link>
                    </li>)}
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="vl-footer-widget">
                <div className="space30 d-lg-none d-block"></div>
                <h3>Contact Us</h3>
                <ul>
                  {contactInfo.map((item, index) => <li key={index}>
                      <Link to={item.url}>
                        <img src={item.icon} alt="icon" />
                        {item.text}
                      </Link>
                    </li>)}
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="vl-footer-widget">
                <div className="space30 d-lg-none d-block"></div>
                <h3>Join Newsletter</h3>
                <div className="space24"></div>
                <img src={image4} alt="" />
                <div className="space18"></div>
                <Form>
                  <Form.Control type="text" placeholder="Email" />
                  <button type="submit" className="vl-btn3">
                    Subscribe
                  </button>
                </Form>
              </div>
            </Col>
          </Row>
          <div className="space60"></div>
          <Row>
            <Col lg={12}>
              <div className="vl-copyright-area">
                <p>© Copyright 2024 - Renev. All Right Reserved</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>;
};
export default Footer;