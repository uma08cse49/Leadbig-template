import logo3 from "@/assets/img/icons/sub-logo3.svg";
import portfolio9 from "@/assets/img/all-images/portfolio/portfolio-img9.png";
import portfolio10 from "@/assets/img/all-images/portfolio/portfolio-img10.png";
import portfolio11 from "@/assets/img/all-images/portfolio/portfolio-img11.png";
import portfolio12 from "@/assets/img/all-images/portfolio/portfolio-img12.png";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
const Portfolio = () => {
  const portfolioItems = [{
    image: portfolio9,
    title: "Website Redesign",
    description: "A modern, responsive website that increased  </br>engagement and conversions",
    url: "/project-single"
  }, {
    image: portfolio10,
    title: "Complete Branding",
    description: "A bold new identity for a brand seeking to reposition </br>itself in the market.",
    url: "/project-single"
  }, {
    image: portfolio11,
    title: "Website Redesign",
    description: "A modern, responsive website that increased </br> engagement and conversions",
    url: "/project-single"
  }, {
    image: portfolio12,
    title: "Complete Branding",
    description: "A bold new identity for a brand seeking to reposition </br> itself in the market.",
    url: "/project-single"
  }];
  const setting = {
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    arrows: false,
    slidesToShow: 2,
    autoplay: true,
    smartSpeed: 1500,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: [{
      breakpoint: 0,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }]
  };
  return <div className="portfoli2-section-area sp1">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="heading2">
              <h5>
                <img src={logo3} alt="" /> Our Portfolio
              </h5>
              <div className="space20"></div>
              <h2 className="text-anime-style-3">Our Portfolio Showcase</h2>
            </div>
          </Col>
          <Col lg={5}></Col>
          <Col lg={2}>
            <div className="btn-area1">
              <div className="space20 d-md-none d-block"></div>
              <Link to="/team" className="vl-btn2">
                Our Expertise
              </Link>
            </div>
          </Col>
        </Row>
        <div className="space60 d-lg-block d-none"></div>
        <div className="space30 d-lg-none d-block"></div>
        <Col lg={12}>
          <Slider {...setting} className="portfolio-slider2-boxarea owl-carousel">
            {portfolioItems.map((item, index) => <div className="portfolio-boxarea" key={index}>
                <div className="img1">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="content-area">
                  <div className="content">
                    <Link to={item.url}>{item.title}</Link>
                    <div className="space16"></div>
                    <p dangerouslySetInnerHTML={{
                  __html: item.description
                }} />
                  </div>
                  <div className="arrow">
                    <Link to={item.url}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M8 24L24 8" stroke="#F13A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11 8H24V21" stroke="#F13A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>)}
          </Slider>
        </Col>
      </Container>
    </div>;
};
export default Portfolio;