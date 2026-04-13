import sublogo from "@/assets/img/icons/sub-logo2.svg";
import { Container, Row, Col } from "react-bootstrap";
import ele8 from "@/assets/img/elements/elements8.png";
import ele9 from "@/assets/img/elements/elements9.png";

const MissionVision = () => {
  return (
    <div className="mission-section-area sp6">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="heading1 text-center">
              <h5>
                <img src={sublogo} alt="" />
                OUR PURPOSE
              </h5>
              <div className="space20"></div>
              <h2>Our Mission & Vision</h2>
            </div>
          </Col>
        </Row>

        <div className="space50"></div>

        <Row>
          {/* Mission */}
          <Col lg={6} md={6}>
            <div className="mission-box" data-aos="fade-up" data-aos-duration="800">
              <h3>🎯 Our Mission</h3>
              <p>
                Our mission is to deliver high-quality, scalable, and innovative 
                digital solutions that help businesses grow and succeed in a 
                rapidly evolving digital world. We aim to provide reliable 
                technology services with a strong focus on performance, security, 
                and user experience.
              </p>
            </div>
          </Col>

          {/* Vision */}
          <Col lg={6} md={6}>
            <div className="vision-box" data-aos="fade-up" data-aos-duration="1000">
              <h3>🚀 Our Vision</h3>
              <p>
                Our vision is to become a trusted global technology partner, 
                recognized for excellence, innovation, and customer satisfaction. 
                We strive to continuously evolve and create impactful digital 
                experiences that drive long-term success for our clients.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MissionVision;