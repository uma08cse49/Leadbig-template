import Pagination from "./Pagination";
import ele20 from "@/assets/img/elements/elements20.png";
import ele22 from "@/assets/img/elements/elements22.png";
import ele23 from "@/assets/img/elements/elements23.png";
import ele24 from "@/assets/img/elements/elements24.png";
import ele25 from "@/assets/img/elements/elements25.png";
import ele26 from "@/assets/img/elements/elements26.png";
import test1 from "@/assets/img/all-images/testimonial/testimonial-img1.png";
import test10 from "@/assets/img/all-images/testimonial/testimonial-img10.png";
import test2 from "@/assets/img/all-images/testimonial/testimonial-img2.png";
import test3 from "@/assets/img/all-images/testimonial/testimonial-img3.png";
import { FaStar } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const TestimonialCard = () => {
  const testimonials = [{
    id: 1,
    name: "Sheldon Jackson",
    role: "Owner FeatherDev",
    image: test1,
    element: ele20,
    quote: "“Our website has completely transformed since design working with this team. They understood our vision the perfectly and brought it to life in a way that exceeded our expectations. The design is both beautiful and the.”"
  }, {
    id: 2,
    name: "Alex Healy",
    role: "Owner FeatherDev",
    image: test10,
    element: ele22,
    quote: "Working with this team was a game-changer for our business. We came to them with a vision for a modern, user-friendly website, and they not only delivered but exceeded our expectations The best team’s attention"
  }, {
    id: 3,
    name: "Xavi Hernandez",
    role: "Owner FeatherDev",
    image: test2,
    element: ele23,
    quote: "We’ve worked with several web design agencies over the years, but none compare to the level of service and expertise we experienced here. From the initial design consultation to the final launch, the team was highly"
  }, {
    id: 4,
    name: "Florian Wirtz",
    role: "Owner FeatherDev",
    image: test3,
    element: ele24,
    quote: "From day one, this agency has been a true partner in our digital journey. They understood our goals and to delivered a website that not only looks great but also functions flawlessly. The design is clean, on modern."
  }, {
    id: 5,
    name: "Victor Boniface",
    role: "Owner FeatherDev",
    image: test1,
    element: ele25,
    quote: "From day one, this agency has been a true partner in our digital journey. They understood our goals and the delivered a website that not only looks great but also functions flawlessly. The design is clean, on modern."
  }, {
    id: 6,
    name: "Kavin de bruyne",
    role: "Owner FeatherDev",
    image: test2,
    element: ele26,
    quote: "This web design agency took our outdated site and of transformed it into a modern, mobile-friendly best to powerhouse. Their team provided invaluable guidance throughout the entire process, from on initial concept."
  }];
  return <div className="testimonial-inner-section-area sp6">
      <Container>
        <Row>
          {testimonials.map(testimonial => <Col lg={6} key={testimonial.id}>
              <div className="testimonial-boxarea">
                <ul>
                  {Array.from({
                length: 5
              }).map((_, i) => <li key={i}>
                      <FaStar />
                    </li>)}
                </ul>
                <div className="space16"></div>
                <p>{testimonial.quote}</p>
                <div className="space32"></div>
                <div className="names-area">
                  <div className="man-textarea">
                    <div className="man">
                      <img src={testimonial.image} alt={testimonial.name} width={100} height={100} />
                    </div>
                    <div className="text">
                      <Link to="/team">{testimonial.name}</Link>
                      <div className="space12"></div>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                  <img width={100} height={100} src={testimonial.element} alt="" className="elements20" />
                </div>
              </div>
            </Col>)}

          <Pagination />
        </Row>
      </Container>
    </div>;
};
export default TestimonialCard;