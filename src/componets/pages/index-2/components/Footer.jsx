import gmail from "@/assets/img/icons/email1.svg";
import global from "@/assets/img/icons/global1.svg";
import location from "@/assets/img/icons/location1.svg";
import phone from "@/assets/img/icons/phn1.svg";
import logo3 from "@/assets/img/logo/logo3.png";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  const footerData = {
    services: [{
      name: "SEO Marketing",
      url: "/about"
    }, {
      name: "Responsive Design",
      url: "/service"
    }, {
      name: "Custom Web Design",
      url: "/project"
    }, {
      name: "E-Commerce Solution",
      url: "/project-single"
    }, {
      name: "Responsive Development",
      url: "/contact"
    }],
    quickLinks: [{
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
    }],
    contactInfo: [{
      icon: phone,
      text: "+91 99404 27777",
      url: "tel:+91 99404 27777"
    }, {
      icon: location,
      text: "No. 110/2, Agaram,Perambur Purasawalkam, Chennai - 600082",
      url: "#"
    }, {
      icon: gmail,
      text: "renevagency@com",
      url: "mailto:renevagency@com"
    }, {
      icon: global,
      text: "leadbig.in",
      url: "https://www.leadbig.in/"
    }],
    socialLinks: [{
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
    }]
  };
  return <>
      <div className="cta2-section-area sp8">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="cta-bg-area">
                <Row>
                  <Col lg={6}>
                    <div className="cta-header">
                      <p>Ready to Take Your Brand to the Next Level.</p>
                      <div className="space16"></div>
                      <h2>Subscribe To Our Newsletter</h2>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <Form>
                      <Form.Control type="email" placeholder="Enter Your Email" />
                      <button type="submit" className="vl-btn2">
                        Subscribe
                      </button>
                    </Form>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="vl-footer2-section-area sp8">
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <div className="footer-logo1">
                <img src={logo3} alt="" />
                <div className="space16"></div>
                <p>
                  At Renev, we believe that every business has the potential to
                  the thrive with the right guidance.
                </p>
                <div className="space24"></div>
                <ul>
                  {footerData.socialLinks.map((item, idx) => <li key={idx}>
                      <Link to={item.url}>{item.icon}</Link>
                    </li>)}
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="space30 d-md-none d-block"></div>
              <div className="vl-footer-widget first-padding">
                <h3>Our Services</h3>
                <div className="space4"></div>
                <ul>
                  {footerData.services.map((item, idx) => <li key={idx}>
                      <Link to={item.url}>{item.name}</Link>
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
                  {footerData.quickLinks.map((item, idx) => <li key={idx}>
                      <Link to={item.url}>{item.name}</Link>
                    </li>)}
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="vl-footer-widget">
                <div className="space30 d-lg-none d-block"></div>
                <h3>Contact Us</h3>
                <ul>
                  {footerData.contactInfo.map((item, idx) => <li key={idx}>
                      <Link to={item.url}>
                        <img src={item.icon} alt="" /> {item.text}
                      </Link>
                    </li>)}
                </ul>
              </div>
            </Col>
          </Row>
          <div className="space60"></div>
          <Row>
            <Col lg={12}>
              <div className="vl-copyright-area">
                <p>© Copyright 2024 - Renev. All Right Reserved</p>
                <ul>
                  <li>
                    <Link to="#"> Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#"> | </Link>
                  </li>
                  <li>
                    <Link to="#"> Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>;
};
export default Footer;