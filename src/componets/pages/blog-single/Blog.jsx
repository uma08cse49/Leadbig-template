import ele15 from "@/assets/img/elements/elements15.png";
import image1 from "@/assets/img/all-images/blog/blog-img1.png";
import image2 from "@/assets/img/all-images/blog/blog-img2.png";
import image3 from "@/assets/img/all-images/blog/blog-img3.png";
import date from "@/assets/img/icons/date1.svg";
import user from "@/assets/img/icons/user1.svg";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Blog = () => {
  const blogPosts = [{
    id: 1,
    image: image1,
    date: "8 December 2024",
    author: "Alex Roy",
    title: "Why Branding & Identity Design Business Matter More Than Ever",
    url: "/blog-single"
  }, {
    id: 2,
    image: image2,
    date: "8 December 2024",
    author: "Alex Roy",
    title: "The Complete Guide to Building A High-Converting Best Website",
    url: "/blog-single"
  }, {
    id: 3,
    image: image3,
    date: "8 December 2024",
    author: "Alex Roy",
    title: "Effective SEO Digital Marketing Strategies to Grow Your Brand",
    url: "/blog-single"
  }];
  return <>
      <div className="vl-blog-1-area sp7">
        <img src={ele15} alt="" className="elements15" />
        <Container>
          <Row>
            <Col lg={7} className="m-auto">
              <div className="vl-blog-1-section-box heading1 text-center space-margin60">
                <h2>read more latest blog</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {blogPosts.map(post => <Col key={post.id} lg={4} md={6}>
                <div className="vl-blog-1-item">
                  <div className="vl-blog-1-thumb image-anime">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="vl-blog-1-content">
                    <div className="vl-blog-meta">
                      <ul>
                        <li>
                         <Link to="#">
                            <img src={date} alt="date icon" /> {post.date}
                          </Link>
                        </li>
                        <li>
                         <Link to="#">
                            <img src={user} alt="user icon" /> By{" "}
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
      </div>
    </>;
};
export default Blog;