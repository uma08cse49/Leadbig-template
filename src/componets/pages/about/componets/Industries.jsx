import serve from "@/assets/img/all-images/others/serve-img1.png";
import serve2 from "@/assets/img/all-images/others/serve-img2.png";
import serve3 from "@/assets/img/all-images/others/serve-img3.png";
import sublogo from "@/assets/img/icons/sub-logo1.svg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
const industryData = [{
  title: "Business Consulting",
  img: serve
}, {
  title: "Medical Healthcare",
  img: serve2
}, {
  title: "Bank/Insurances",
  img: serve3
}, {
  title: "Sass/Software",
  img: serve
}, {
  title: "Media Entertainment",
  img: serve2
}, {
  title: "Website Design",
  img: serve3
}];
const repeatedIndustries = [...industryData, ...industryData, ...industryData];
const Industries = () => {
  return <div className="serve-section-area sp6">
      <Container>
        <Row>
          <Col lg={4} className="m-auto">
            <div className="heading1 space-margin60 text-center">
              <h5 style={{
              color: "#fff"
            }}>
                <img src={sublogo} alt="" />
                Industries we serve
              </h5>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="slider2-section-area">
        <div className="marquee-wrap">
          <div className="marquee-text">
            {repeatedIndustries.map((industry, index) => <div className="brand-single-box" key={index}>
                <h3>
                  <Link to="/service-single">
                    <img src={industry.img} alt={industry.title} />
                    <span>
                      <FaArrowRight />
                    </span>
                    {industry.title}
                  </Link>
                </h3>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
export default Industries;