import bg6 from "@/assets/img/all-images/bg/bg6.png";
import subLogo from "@/assets/img/icons/sub-logo4.svg";
import blog1 from "@/assets/img/all-images/blog/blog-img1.png";
import blog2 from "@/assets/img/all-images/blog/blog-img2.png";
import blog3 from "@/assets/img/all-images/blog/blog-img3.png";
import dateIcon from "@/assets/img/icons/date1.svg";
import userIcon from "@/assets/img/icons/user1.svg";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const blogPosts = [{
  image: blog1,
  date: "8 December 2024",
  author: "Alex Roy",
  title: "Why Branding & Identity Design Business Matter More Than Ever",
  url: "/blog-single",
  animation: "fade-left",
  duration: 900
}, {
  image: blog2,
  date: "8 December 2024",
  author: "Alex Roy",
  title: "The Complete Guide to Building A High-Converting Best Website",
  url: "/blog-single",
  animation: "fade-right",
  duration: 1000
}, {
  image: blog3,
  date: "8 December 2024",
  author: "Alex Roy",
  title: "Effective SEO Digital Marketing Strategies to Grow Your Brand",
  url: "/blog-single",
  animation: "fade-right",
  duration: 1100
}];
const Blog = () => {
  return <div className="vl-blog-4-area sp7" style={{
    backgroundImage: `url(${bg6})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }}>
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <div className="vl-blog-1-section-box heading3 text-center space-margin60">
              <h5 className="vl-section-subtitle">
                <span>
                  <img src={subLogo} alt="Sub Logo" />
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
          {blogPosts.map((post, index) => <Col lg={4} md={6} key={index} data-aos={post.animation} data-aos-duration={post.duration}>
              <div className="vl-blog-1-item">
                <div className="vl-blog-1-thumb image-anime">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="vl-blog-1-content">
                  <div className="vl-blog-meta">
                    <ul>
                      <li>
                        <Link to="#">
                          <img src={dateIcon} alt="Date Icon" /> {post.date}
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img src={userIcon} alt="User Icon" /> By{" "}
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
                      Learn More
                      <FaArrowRight />
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