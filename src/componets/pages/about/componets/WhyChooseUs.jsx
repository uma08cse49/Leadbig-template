import sublogo from "@/assets/img/icons/sub-logo2.svg";
import ele8 from "@/assets/img/elements/elements8.png";
import ele9 from "@/assets/img/elements/elements9.png";
import { Container, Row, Col } from "react-bootstrap";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Experienced Team",
      desc: "Skilled developers with strong technical expertise."
    },
    {
      title: "Scalable Solutions",
      desc: "We build systems that grow with your business."
    },
    {
      title: "On-Time Delivery",
      desc: "We ensure projects are delivered within deadlines."
    },
    {
      title: "Secure Systems",
      desc: "Security is our priority in every solution."
    },
    {
      title: "Modern Technologies",
      desc: "We use the latest tools and frameworks."
    },
    {
      title: "Client-Focused",
      desc: "We prioritize your goals and business needs."
    }
  ];

  return (
    <div className="whychoose-section-area sp6">
      
      {/* Elements (matching your template) */}
      {/* <img src={ele8} alt="" className="elements8" />
      <img src={ele9} alt="" className="elements9" /> */}

      <Container>
        <Row>
          <Col lg={12}>
            <div className="heading1 text-center">
              <h5>
                <img src={sublogo} alt="" />
                WHY CHOOSE US
              </h5>
              <div className="space20"></div>
              <h2>Why Choose Us</h2>
            </div>
          </Col>
        </Row>

        <div className="space50"></div>

        <Row>
          {features.map((item, index) => (
            <Col lg={4} md={6} key={index}>
              <div className="choose-box" data-aos="fade-up">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;