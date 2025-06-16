import logo from "@/assets/img/icons/sub-logo2.svg";
import Portfolio4 from "@/assets/img/all-images/portfolio/portfolio-img4.png";
import portfolio5 from "@/assets/img/all-images/portfolio/portfolio-img5.png";
import Portfolio6 from "@/assets/img/all-images/portfolio/portfolio-img6.png";
import portfolio7 from "@/assets/img/all-images/portfolio/portfolio-img7.png";
import portfolio8 from "@/assets/img/all-images/portfolio/portfolio-img8.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Portfolio = () => {
  return <div className="portfolio2-section-area sp1">
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <div className="heading1 text-center space-margin60">
              <h5>
                <img src={logo} alt="" />
                our portfolio
              </h5>
              <div className="space20"></div>
              <h2 className="text-anime-style-3">Our Portfolio Showcase</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="800">
            <div className="portfolio-boxarea">
              <div className="img1">
                <img src={Portfolio4} alt="" />
              </div>
              <div className="btn-area">
                <Link to="/project-single">
                  learn <br /> <span>more</span>
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="900">
            <div className="portfolio-boxarea">
              <div className="img1">
                <img src={portfolio5} alt="" />
              </div>
              <div className="btn-area">
                <Link to="/project-single">
                  learn <br /> <span>more</span>
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="1000">
            <div className="portfolio-boxarea">
              <div className="img1">
                <img src={Portfolio6} alt="" />
              </div>
              <div className="btn-area">
                <Link to="/project-single">
                  learn <br /> <span>more</span>
                </Link>
              </div>
            </div>
          </Col>

          <Col lg={6} md={6} data-aos="zoom-in" data-aos-duration="1100">
            <div className="portfolio-boxarea">
              <div className="img1">
                <img src={portfolio7} alt="" />
              </div>
              <div className="btn-area">
                <Link to="/project-single">
                  learn <br /> <span>more</span>
                </Link>
              </div>
            </div>
          </Col>

          <Col g={6} md={6} data-aos="zoom-in" data-aos-duration="1200">
            <div className="portfolio-boxarea">
              <div className="img1">
                <img src={portfolio8} alt="" />
              </div>
              <div className="btn-area">
                <Link to="/project-single">
                  learn <br /> <span>more</span>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <div className="space30"></div>
            <div className="btn-area1 text-center">
              <a href="project" className="vl-btn1" style={{
              overflow: "hidden'"
            }}>
                View More Showcase
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Portfolio;