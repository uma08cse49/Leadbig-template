import React, { useState } from "react";
import logo from "@/assets/img/logo/logo1.png";
import { FaAngleDown, FaAngleRight, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaTwitter, FaXmark } from "react-icons/fa6";
import image1 from "@/assets/img/all-images/demo/demo-img1.png";
import image2 from "@/assets/img/all-images/demo/demo-img2.png";
import image3 from "@/assets/img/all-images/demo/demo-img3.png";
import image4 from "@/assets/img/all-images/demo/demo-img4.png";
import { Col, Collapse, Offcanvas, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const homePages = [
//   {
//   image: image1,
//   title: "RENEV - Homepage 01",
//   url: "/index-1"
// }, 
// {
//   image: image2,
//   title: "RENEV - Homepage 02",
//   url: "/index-2"
// }, 
// {
//   image: image3,
//   title: "RENEV - Homepage 03",
//   url: "/index-3"
// }, 
{
  image: image4,
  title: "RENEV - Homepage 04",
  url: "/index-4"
}];
const menuItems = [{
  key: "pages",
  label: "Pages",
  links: [{
    url: "/about",
    text: "About Us"
  }, {
    url: "/team",
    text: "Our Team"
  }, {
    url: "/testimonial",
    text: "Testimonials"
  }, {
    url: "/contact",
    text: "Contact Us"
  }, {
    url: "/faq",
    text: "FAQ,s"
  }, {
    url: "/404",
    text: "404"
  }]
}, {
  key: "services",
  label: "Services",
  links: [{
    url: "/service",
    text: "Our Service"
  }, {
    url: "/service-single",
    text: "Service Single"
  }]
}, {
  key: "project",
  label: "Project",
  links: [{
    url: "/project",
    text: "Project"
  }, {
    url: "/project-single",
    text: "Project Single"
  }]
}, {
  key: "blog",
  label: "Blogs",
  links: [{
    url: "/blog-one",
    text: "Blog One"
  }, {
    url: "/blog-two",
    text: "Blog Two"
  }, {
    url: "/blog-single",
    text: "Blog Single"
  }]
}];
const MobileMenu = ({
  show,
  handleClose
}) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleDropdown = (menuName, e) => {
    e?.stopPropagation();
    setOpenDropdown(prev => prev === menuName ? null : menuName);
  };
  return <Offcanvas className="vl-offcanvas" show={show} onHide={handleClose} placement="end">
            <div className="homepage1-menu">
                <div className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-90">
                    <div className="vl-offcanvas-logo">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="vl-offcanvas-close">
                        <button className="vl-offcanvas-close-toggle" onClick={handleClose}>
                            <FaXmark />
                        </button>
                    </div>
                </div>
                <div className="vl-offcanvas-menu d-lg-none mb-4">
                    <nav>
                        <ul>
                            <li>
                                <a href="#" onClick={e => {
                e.preventDefault();
                toggleDropdown("home", e);
              }}>
                                    Home{" "}
                                    <button className="vl-menu-close">
                                        {openDropdown === "home" ? <FaAngleDown /> : <FaAngleRight />}
                                    </button>
                                </a>

                                <Collapse in={openDropdown === "home"}>
                                    <div className="vl-mega-menu">
                                        <div className="vl-home-menu">
                                            <Row className="gx-4 row-cols-1 row-cols-md-1 row-cols-lg-4">
                                                {homePages.map(({
                        image,
                        title,
                        url
                      }, idx) => <Col key={idx}>
                                                        <div className="vl-home-thumb">
                                                            <div className="img1">
                                                                <img src={image} alt={title} style={{
                              width: "100%"
                            }} />
                                                            </div>
                                                            <Link to={url}>{title}</Link>
                                                            <div className="btn-area1">
                                                                <Link to={url} className="vl-btn1">
                                                                    View Demo
                                                                </Link>
                                                            </div>
                                                            <div className="space20 d-lg-none d-block"></div>
                                                        </div>
                                                    </Col>)}
                                            </Row>
                                        </div>
                                    </div>
                                </Collapse>
                            </li>

                            {menuItems.map(({
              key,
              label,
              links
            }) => <li key={key}>
                                    <a href="#" onClick={e => {
                e.preventDefault();
                toggleDropdown(key, e);
              }}>
                                        {label}
                                        <span className="vl-menu-close" style={{
                  marginLeft: "8px"
                }}>
                                            {openDropdown === key ? <FaAngleDown /> : <FaAngleRight />}
                                        </span>
                                    </a>
                                    <Collapse in={openDropdown === key}>
                                        <ul style={{
                  paddingLeft: "10px"
                }}>
                                            {links.map(link => <li key={link.url}>
                                                    <Link to={link.url}>{link.text}</Link>
                                                </li>)}
                                        </ul>
                                    </Collapse>
                                </li>)}
                        </ul>
                    </nav>
                </div>

                <div className="space20" />

                <div className="vl-offcanvas-info mb-4">
                    <h3 className="vl-offcanvas-sm-title">Contact Us</h3>
                    <div className="space20"></div>
                    <span>
                        <Link to="">
                            <FaEnvelope /> hello@exdos.com
                        </Link>
                    </span>
                    <br />
                    <span>
                        <Link to="">
                            <FaPhone /> +57 9954 6476.about
                        </Link>
                    </span>
                    <br />
                    <span>
                        <Link to="">
                            <FaLocationDot /> Bhemeara, Kushtia
                        </Link>
                    </span>
                </div>

                <div className="vl-offcanvas-social">
                    <h3 className="vl-offcanvas-sm-title">Follow Us</h3>
                    <div className="space20" />
                    <div className="d-flex gap-2">
                        <Link to="#">
                            <FaFacebookF />
                        </Link>
                        <Link to="#">
                            <FaTwitter />
                        </Link>
                        <Link to="#">
                            <FaLinkedinIn />
                        </Link>
                        <Link to="#">
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </div>
        </Offcanvas>;
};
export default MobileMenu;