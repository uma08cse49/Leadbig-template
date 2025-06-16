import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import bg1 from "@/assets/img/all-images/bg/bg1.png";
import subLogo from "@/assets/img/icons/sub-logo2.svg";
import dateIcon from "@/assets/img/icons/date1.svg";
import userIcon from "@/assets/img/icons/user1.svg";
import blog1 from "@/assets/img/all-images/blog/blog-img1.png";
import blog2 from "@/assets/img/all-images/blog/blog-img2.png";
import blog3 from "@/assets/img/all-images/blog/blog-img3.png";
import { Col, Container, Row } from "react-bootstrap";
const blogPosts = [{
  title: "Why Branding & Identity Design Business Matter More Than Ever",
  image: blog1,
  date: "8 December 2024",
  author: "Alex Roy",
  url: "/blog-single",
  aos: "fade-left",
  aosDuration: 900
}, {
  title: "The Complete Guide to Building A High-Converting Best Website",
  image: blog2,
  date: "8 December 2024",
  author: "Alex Roy",
  url: "/blog-single",
  aos: "fade-right",
  aosDuration: 1000
}, {
  title: "Effective SEO Digital Marketing Strategies to Grow Your Brand",
  image: blog3,
  date: "8 December 2024",
  author: "Alex Roy",
  url: "/blog-single",
  aos: "fade-right",
  aosDuration: 1000
}];
const Blog = () => {
  return <div className="vl-blog-1-area sp7" style={{
    backgroundImage: `url(${bg1})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }}>
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <div className="vl-blog-1-section-box heading1 text-center space-margin60">
              <h5 className="vl-section-subtitle">
                <span>
                  <img src={subLogo} alt="sub-logo" />
                </span>
                our latest blog and news
              </h5>
              <div className="space24"></div>
              <h2 className="vl-section-title text-anime-style-3">
                Stay Informed with Renev
              </h2>
            </div>
          </Col>
        </Row>

        <Row>
          {blogPosts.map((post, index) => <Col lg={4} md={6} key={index} data-aos={post.aos} data-aos-duration={post.aosDuration}>
              <div className="vl-blog-1-item">
                <div className="vl-blog-1-thumb image-anime">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="vl-blog-1-content">
                  <div className="vl-blog-meta">
                    <ul>
                      <li>
                        <Link to="#">
                          <img src={dateIcon} alt="date icon" /> {post.date}
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img src={userIcon} alt="user icon" /> By{" "}
                          {post.author}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space14"></div>
                  <h4 className="vl-blog-1-title">
                    <Link to={post.url}>{post.title}</Link>
                  </h4>
                  <div className="space20"></div>
                  <div className="vl-blog-1-icon">
                    <Link to={post.url}>
                      Learn More <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>)}
        </Row>
      </Container>
    </div>;
};
export default Blog;