import serve from "@/assets/img/all-images/others/serve-img1.png";
import serve2 from "@/assets/img/all-images/others/serve-img2.png";
import serve3 from "@/assets/img/all-images/others/serve-img3.png";
import sublogo from "@/assets/img/icons/sub-logo1.svg";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const industriesData = [{
  img: serve,
  title: "STARTUPS"
}, {
  img: serve2,
  title: "GROWING BUSINESSES"
}, {
  img: serve3,
  title: "ECOMMERCE"
}, {
  img: serve,
  title: "HEALTHCARE"
}, {
  img: serve2,
  title: "FINANCIAL SERVICES"
}, {
  img: serve3,
  title: "EDTECH"
},
{
  img: serve,
  title: "REAL ESTATE"
},
{
  img: serve2,
  title: "REAL ESTATE"
},
{
  img: serve3,
  title: "SAAS PLATFORM"
},
{
  img: serve,
  title: "ENTERPRISE SOLUTIONS"
},

];
const repeatedIndustries = [...industriesData, ...industriesData, ...industriesData];
const Industries = () => {
  return <div className="serve-section-area sp10">
      <Container>
        <Row>
          <Col lg={4} className="m-auto">
            <div className="heading1 space-margin60 text-center">
              <h5 style={{
              color: "#fff"
            }}>
                <img src={sublogo} alt="" />
                Trusted Across Industries
              </h5>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="slider5-section-area">
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