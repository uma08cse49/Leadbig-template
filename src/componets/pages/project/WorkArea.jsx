import bg5 from "@/assets/img/all-images/bg/bg5.png";
import portfolio1 from "@/assets/img/all-images/portfolio/portfolio-img1.png";
import portfolio2 from "@/assets/img/all-images/portfolio/portfolio-img2.png";
import portfolio3 from "@/assets/img/all-images/portfolio/portfolio-img3.png";
import project1 from "@/assets/img/all-images/project/project-img1.png";
import project2 from "@/assets/img/all-images/project/project-img2.png";
import project3 from "@/assets/img/all-images/project/project-img3.png";
import project4 from "@/assets/img/all-images/project/project-img4.png";
import project5 from "@/assets/img/all-images/project/project-img5.png";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
const WorkArea = () => {
  return <>
      <div className="project-inner-section-area sp6" style={{
      backgroundImage: `url(${bg5})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}>
        <Container>
          <Row>
            <Col lg={10} className="m-auto">
              <div className="tabs-area text-center space-margin60">
                <Tabs defaultActiveKey="all" id="pills-tab" className="nav-pills justify-content-center" style={{
                marginBottom: "60px",
                border: "none"
              }}>
                  <Tab eventKey="all" title="All">
                    <div className="all-project-area">
                      <Row>
                        {[portfolio1, portfolio2, portfolio3, project1, project2, project3, project4, project5].map((image, index) => <Col lg={6} md={6} key={index}>
                            <div className="portfolio-boxarea">
                              <div className="img1">
                                <img src={image} alt="" />
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
                          </Col>)}
                      </Row>
                    </div>
                  </Tab>

                  <Tab eventKey="uiux" title="UI/UX Design">
                    <div className="all-project-area">
                      <Row>
                        {[portfolio1, portfolio2, portfolio3, project1, project2, project3, project4, project5].map((image, index) => <Col lg={6} md={6} key={index}>
                            <div className="portfolio-boxarea">
                              <div className="img1">
                                <img src={image} alt="" />
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
                          </Col>)}
                      </Row>
                    </div>
                  </Tab>

                  <Tab eventKey="webdev" title="Web Development">
                    <div className="all-project-area">
                      <Row>
                        {[portfolio1, portfolio2, portfolio3, project1, project2, project3, project4, project5].map((image, index) => <Col lg={6} md={6} key={index}>
                            <div className="portfolio-boxarea">
                              <div className="img1">
                                <img src={image} alt="" />
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
                          </Col>)}
                      </Row>
                    </div>
                  </Tab>

                  <Tab eventKey="branding" title="Logo Branding">
                    <div className="all-project-area">
                      <Row>
                        {[portfolio1, portfolio2, portfolio3, project1, project2, project3, project4, project5].map((image, index) => <Col lg={6} md={6} key={index}>
                            <div className="portfolio-boxarea">
                              <div className="img1">
                                <img src={image} alt="" />
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
                          </Col>)}
                      </Row>
                    </div>
                  </Tab>

                  <Tab eventKey="ecommerce" title="eCommerce Service">
                    <div className="all-project-area">
                      <Row>
                        {[portfolio1, portfolio2, portfolio3, project1, project2, project3, project4, project5].map((image, index) => <Col lg={6} md={6} key={index}>
                            <div className="portfolio-boxarea">
                              <div className="img1">
                                <img src={image} alt="" />
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
                          </Col>)}
                      </Row>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
        <Pagination />
      </div>
    </>;
};
export default WorkArea;