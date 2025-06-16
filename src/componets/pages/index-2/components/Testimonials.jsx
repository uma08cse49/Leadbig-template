import bg4 from "@/assets/img/all-images/bg/bg4.png";
import testimonialImg1 from "@/assets/img/all-images/testimonial/testimonial-img1.png";
import testimonialImg2 from "@/assets/img/all-images/testimonial/testimonial-img2.png";
import testimonialImg3 from "@/assets/img/all-images/testimonial/testimonial-img3.png";
import logo3 from "@/assets/img/icons/sub-logo3.svg";
import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const Testimonials = () => {
  const sliderRef = useRef(null);
  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();
  const setting = {
    loop: true,
    arrows: false,
    margin: 30,
    nav: true,
    dots: false,
    slidesToShow: 3,
    navText: [<FaAngleLeft />, <FaAngleRight />],
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
    }]
  };
  const testimonialsData = [{
    name: "Corina McCoy",
    company: "Cut Rite Lawn Care",
    image: testimonialImg1,
    description: "“Working with Renev was a game-changer! Their team truly captured our brand’s vision and delivered a site that exceeded our expectations. We’re thrilled with the results!”"
  }, {
    name: "Rodger Struck",
    company: "Super Duper",
    image: testimonialImg2,
    description: "“Working with Renev was a game-changer! Their team truly captured our brand’s vision and delivered a site that exceeded our expectations. We’re thrilled with the results!”"
  }, {
    name: "Daniel Hamilton",
    company: "Stratacard",
    image: testimonialImg3,
    description: "“Working with Renev was a game-changer! Their team truly captured our brand’s vision and delivered a site that exceeded our expectations. We’re thrilled with the results!”"
  }];
  return <div className="testimonial2-section-area sp1" style={{
    backgroundImage: `url(${bg4})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }}>
      <Container>
        <Row>
          <Col lg={12}>
            <div className="testimonial-header space-margin60">
              <div className="heading2">
                <h5>
                  <img src={logo3} alt="" />
                  Testimonials{" "}
                </h5>
                <div className="space20"></div>
                <h2>What Our Client’s Say</h2>
              </div>
              <div className="btn-area1">
                <Link to="/testimonial" className="vl-btn2">
                  View All Review
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <div className="testimonial-review-area">
              <Slider ref={sliderRef} {...setting}>
                {testimonialsData.map((testimonial, index) => <div className="testimonial-boxarea" key={index}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
                      <g clipPath={`url(#clip0_${index})`}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 10L12.8 19.8182H16L16 28H8L8 19.8182L11.2 10L16 10Z" fill="white" />
                        <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M30 10L26.8 19.8182H30V28H22L22 19.8182L25.2 10L30 10Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id={`clip0_${index}`}>
                          <rect width="40" height="40" fill="white" transform="matrix(-1 0 0 -1 40 40)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="space16"></div>
                    <ul>
                      {[...Array(5)].map((_, starIndex) => <li key={starIndex}>
                          {" "}
                          <FaStar />
                        </li>)}
                    </ul>
                    <div className="space24"></div>
                    <p>{testimonial.description}</p>
                    <div className="space50"></div>
                    <div className="man-img-area">
                      <div className="img1">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="content-area">
                        <Link to="/team">{testimonial.name}</Link>
                        <div className="space10"></div>
                        <p>{testimonial.company}</p>
                      </div>
                    </div>
                  </div>)}
              </Slider>

              <div className="owl-nav">
                <button type="button" className="owl-prev" onClick={() => next()}>
                  <FaAngleLeft />
                </button>

                <button type="button" className="owl-next" onClick={() => previous()}>
                  <FaAngleRight />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Testimonials;