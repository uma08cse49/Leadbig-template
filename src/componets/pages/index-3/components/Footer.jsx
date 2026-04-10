import { Link } from "react-router-dom";
import ele6 from "@/assets/img/elements/elements6.png";
import logo from "@/assets/img/logo/logo2.png";
import phone from "@/assets/img/icons/phn1.svg";
import location from "@/assets/img/icons/location1.svg";
import email from "@/assets/img/icons/email1.svg";
import global1 from "@/assets/img/icons/global1.svg";
import other from "@/assets/img/all-images/others/others-img2.png";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const socialLinks = [{
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/profile.php?id=61579026411412&sk=about"
  }, {
    icon: <FaXTwitter />,
    href: "https://x.com/LeadbigOfficial"
  }, {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/leadbigofficial"
  }, {
    icon: <FaYoutube />,
    href: "https://www.youtube.com/@leadbig",
    className: "m-0"
  }];
  const quickLinks = [{
    name: "About Us",
    href: "/about"
  }, {
    name: "Service",
    href: "/service"
  }, {
    name: "Project",
    href: "/project"
  }, {
    name: "Pricing Plan",
    href: "#"
  }, {
    name: "Contact Us",
    href: "/contact"
  }];
  const contactInfo = [{
    url: "tel:+91 99404 27777",
    icon: phone,
    text: "+91 99404 27777"
  }, {
    url: "#",
    icon: location,
    text: "No. 110/2, Agaram,Perambur Purasawalkam, Chennai - 600082"
  }, {
    url: "mailto:renevagency@com",
    icon: email,
    text: "leadbig@com"
  }, {
    url: "https://www.leadbig.in/",
    icon: global1,
    text: "leadbig.in"
  }];
  return <>
      <div className="cta-btn-area sp8">
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

      <div className="vl-footer1-section-area sp8">
        <img src={ele6} alt="" className="elements6" />
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <div className="footer-logo1">
                <img src={logo} alt="Logo" />
                <div className="space16"></div>
                <p>
                  At Renev, we believe that every business has the potential to
                  the thrive with the right guidance.
                </p>
                <div className="space24"></div>
                <ul>
                  {socialLinks.map((link, idx) => <li key={idx}>
                      <Link to={link.href} className={link.className || ""}>
                        {link.icon}
                      </Link>
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
                  {quickLinks.map((item, idx) => <li key={idx}>
                      <Link to={item.href}>{item.name}</Link>
                    </li>)}
                </ul>
              </div>
            </Col>

            <Col lg={3} md={6}>
              <div className="vl-footer-widget">
                <div className="space30 d-lg-none d-block"></div>
                <h3>Contact Us</h3>
                <ul>
                  {contactInfo.map((item, idx) => <li key={idx}>
                      <Link to={item.url}>
                        <img src={item.icon} alt="" />
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
                <img src={other} alt="" />
                <div className="space18"></div>
                <form>
                  <input type="text" placeholder="Email" />
                  <button type="submit" className="vl-btn1">
                    Subscribe
                  </button>
                </form>
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