import bg5 from "@/assets/img/all-images/bg/bg5.png";
import portfolio1 from "@/assets/img/all-images/portfolio/portfolio-img1.png";
import portfolio2 from "@/assets/img/all-images/portfolio/portfolio-img2.png";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Projects = () => {
  return <div className="project-bottom-scetion" style={{
    backgroundImage: `url(${bg5})`,
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }}>
      <Container>
        <Row>
          <Col lg={6} className="m-auto">
            <div className="heading1 space-margin60 text-center">
              <h2>View More project</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={10} className="m-auto">
            <Row>
              <Col lg={6} md={6}>
                <div className="portfolio-boxarea">
                  <div className="img1">
                    <img src={portfolio1} alt="" />
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
                      <p>User Interface design</p>
                      <div className="space16"></div>
                      <Link to="/project-single">
                        Web Design For Business
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6}>
                <div className="portfolio-boxarea">
                  <div className="img1">
                    <img src={portfolio2} alt="" />
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
                      <p>User Interface design</p>
                      <div className="space16"></div>
                      <Link to="/project-single">
                        Web Design For Business
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Projects;