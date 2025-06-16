import bg4 from "@/assets/img/all-images/bg/bg4.png";
import logo3 from "@/assets/img/icons/sub-logo3.svg";
import blog4 from "@/assets/img/all-images/blog/blog-img4.png";
import blog5 from "@/assets/img/all-images/blog/blog-img5.png";
import date from "@/assets/img/icons/date1.svg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
const Blog = () => {
  return <div className="vl-blog-2-area sp2" style={{
    backgroundImage: `url(${bg4})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }}>
      <Container>
        <Row>
          <Col lg={12} className="m-auto">
            <div className="vl-blog-1-section-box space-margin60">
              <div className="heading2">
                <h5 className="vl-section-subtitle">
                  <span>
                    <img src={logo3} alt="" />
                  </span>
                  Our Blog
                </h5>
                <div className="space24"></div>
                <h2 className="vl-section-title text-anime-style-3">
                  Our Latest Blog & News
                </h2>
              </div>
              <div className="btn-area1">
                <Link to="/blog" className="vl-btn2">
                  View Full Blogs
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} data-aos="fade-left" data-aos-duration="900">
            <div className="vl-blog-1-item">
              <div className="vl-blog-1-thumb image-anime">
                <img src={blog4} alt="" />
              </div>
              <div className="vl-blog-1-content">
                <div className="vl-blog-meta">
                  <ul>
                    <li>
                      <Link to="#">
                        <img src={date} alt="" /> 8 December 2024
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space16"></div>
                <h4 className="vl-blog-1-title">
                  <Link to="/blog-single">Design Tips & Digital Trends</Link>
                </h4>
                <div className="space14"></div>
                <p>
                  Our blog is packed with tips, best practices, and insights to
                  keep your brand at the forefront of the digital landscape.
                </p>
                <div className="space32"></div>
                <div className="vl-blog-1-icon">
                  <Link to="/blog-single">
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} data-aos="fade-right" data-aos-duration="1000">
            <div className="vl-blog-1-item">
              <div className="vl-blog-1-thumb image-anime">
                <img src={blog5} alt="" />
              </div>
              <div className="vl-blog-1-content">
                <div className="vl-blog-meta">
                  <ul>
                    <li>
                      <Link to="#">
                        <img src={date} alt="" /> 8 December 2024
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="space16"></div>
                <h4 className="vl-blog-1-title">
                  <Link to="/blog-single">Your Guide to Digital Success</Link>
                </h4>
                <div className="space14"></div>
                <p>
                  Our blog is here to guide you through the evolving world of
                  web design and digital strategy. From practical tips to
                  future-facing.
                </p>
                <div className="space32"></div>
                <div className="vl-blog-1-icon">
                  <Link to="/blog-single">
                    Learn More <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Blog;