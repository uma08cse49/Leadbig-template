import ele17 from "@/assets/img/elements/elements17.png";
import ele18 from "@/assets/img/elements/elements18.png";
import ele20 from "@/assets/img/elements/elements20.png";
import logo2 from "@/assets/img/icons/sub-logo2.svg";
import { useRef } from "react";
import testimonial1 from "@/assets/img/all-images/testimonial/testimonial-img1.png";
import testimonial4 from "@/assets/img/all-images/testimonial/testimonial-img4.png";
import { Col, Container, Row } from "react-bootstrap";
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const testimonials = [{
  name: "Sheldon Jackson",
  role: "Owner FeatherDev",
  description: "“Our website has completely transformed since design working with this team. They understood our vision the perfectly and brought it to life in a way that exceeded our expectations. The design is both beautiful and the.”",
  rating: 5,
  image: testimonial1
}, {
  name: "John Doe",
  role: "CEO ExampleCorp",
  description: "“Our website has completely transformed since design working with this team. They understood our vision the perfectly and brought it to life in a way that exceeded our expectations. The design is both beautiful and the.”",
  rating: 5,
  image: testimonial1
}, {
  name: "Alice Smith",
  role: "Founder WebWorks",
  description: "“Our website has completely transformed since design working with this team. They understood our vision the perfectly and brought it to life in a way that exceeded our expectations. The design is both beautiful and the.”",
  rating: 5,
  image: testimonial1
}];
const setting = {
  loop: true,
  margin: 30,
  arrows: false,
  nav: true,
  dots: true,
  slidesToShow: 1,
  autoplay: true,
  smartSpeed: 1500,
  autoplayTimeout: 3000,
  responsiveClass: true,
  responsive: [{
    breakpoint: 0,
    settings: {
      slidesToShow: 1,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      dots: true
    }
  }, {
    breakpoint: 1000,
    settings: {
      slidesToShow: 1,
      dots: true
    }
  }]
};
const Testimonial = () => {
  const sliderRef = useRef(null);
  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();
  return <div className="testimonial3-section-area sp1">
      <Container>
        <Row>
          <Col lg={6} className="m-auto">
            <div className="heading1 text-center space-margin60">
              <h5>
                <img src={logo2} alt="Logo" />
                Testimonial
              </h5>
              <div className="space20"></div>
              <h2 className="text-anime-style-3">What Our Clients Say</h2>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="images-area">
              <img src={ele17} alt="Element 17" className="elements17 keyframe6" />
              <img src={ele18} alt="Element 18" className="elements18 keyframe5" />
              <div className="img1">
                <img src={testimonial4} alt="Testimonial" />
              </div>
            </div>
          </Col>
          <Col lg={1}></Col>
          <Col lg={6}>
            <div className="testimonial-slider-box">
              <Slider ref={sliderRef} {...setting}>
                {testimonials.map((testimonial, index) => <div key={index} className="testimonial-boxarea">
                    <ul>
                      {[...Array(testimonial.rating)].map((_, i) => <li key={i}>
                          <FaStar />
                        </li>)}
                    </ul>
                    <div className="space16"></div>
                    <p>{testimonial.description}</p>
                    <div className="space32"></div>
                    <div className="names-area">
                      <div className="man-textarea">
                        <div className="man">
                          <img src={testimonial.image} alt={testimonial.name} />
                        </div>
                        <div className="text">
                          <Link to="/team">{testimonial.name}</Link>
                          <div className="space12"></div>
                          <p>{testimonial.role}</p>
                        </div>
                      </div>
                      <img src={ele20} alt="Element 20" className="elements20" />
                    </div>
                  </div>)}
              </Slider>
              <div className="owl-nav">
                <button type="button" role="presentation" className="owl-prev" onClick={() => next()}>
                  <FaChevronUp />
                </button>
                <button type="button" role="presentation" className="owl-next" onClick={() => previous()}>
                  <FaChevronDown />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Testimonial;