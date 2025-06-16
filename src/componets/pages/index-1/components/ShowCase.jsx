import logo from "@/assets/img/icons/sub-logo2.svg";
import portfolio1 from "@/assets/img/all-images/portfolio/portfolio-img1.png";
import portfolio2 from "@/assets/img/all-images/portfolio/portfolio-img2.png";
import portfolio3 from "@/assets/img/all-images/portfolio/portfolio-img3.png";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";
import { useRef } from "react";
const portfolioItems = [{
  img: portfolio1,
  title: "Web Design For Business",
  tag: "User Interface design"
}, {
  img: portfolio2,
  title: "Web Design For Business",
  tag: "User Interface design"
}, {
  img: portfolio3,
  title: "Web Design For Business",
  tag: "User Interface design"
}];
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 1
    }
  }]
};
const Case = () => {
  const sliderRef = useRef(null);
  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();
  return <div className="portfolio1-section-area sp6">
      <Container>
        <Row>
          <Col lg={7}>
            <div className="portfolio-header heading1 space-margin60">
              <h5>
                <img src={logo} alt="logo" />
                Showcasing Our Impact
              </h5>
              <div className="space24" />
              <h2 className="text-anime-style-3">Our Portfolio Showcase</h2>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <div className="portfolio-slider-area">
              <Slider ref={sliderRef} {...sliderSettings}>
                {portfolioItems.map((item, index) => <div className="portfolio-boxarea" key={index}>
                    <div className="img1">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className="arrow-content">
                      <div className="arrow">
                        <Link to="/project-single">
                          <span>
                            <FaArrowRight />
                          </span>
                        </Link>
                      </div>
                      <div className="content-area">
                        <p>{item.tag}</p>
                        <div className="space16" />
                        <Link to="/project-single">{item.title}</Link>
                      </div>
                    </div>
                  </div>)}
              </Slider>

              <div className="owl-nav">
                <button type="button" className="owl-prev" onClick={previous}>
                  <FaAngleLeft />
                </button>
                <button type="button" className="owl-next" onClick={next}>
                  <FaAngleRight />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Case;