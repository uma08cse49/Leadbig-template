import { Col, Container, Row } from "react-bootstrap";
import ReactCountUp from "react-countup";
const Counter = () => {
  return <div className="counter-section-area">
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <div className="counter-box">
              <h2>
                <span className="counter">
                  <ReactCountUp end={99} />
                </span>
                %
              </h2>
              <div className="space18"></div>
              <p>Satisfaction Rate</p>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="counter-box">
              <h2>
                <span className="counter">
                  <ReactCountUp end={88} />
                </span>
                %
              </h2>
              <div className="space18"></div>
              <p>Engagement by</p>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="counter-box">
              <h2>
                <span className="counter">
                  <ReactCountUp end={200} />
                </span>
                +
              </h2>
              <div className="space18"></div>
              <p>Website launched</p>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="counter-box">
              <h2>
                <span className="counter">
                  <ReactCountUp end={76} />
                </span>
                +
              </h2>
              <div className="space18"></div>
              <p>Industry Awards</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Counter;