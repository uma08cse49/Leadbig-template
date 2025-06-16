import bg5 from "@/assets/img/all-images/bg/bg5.png";
import blog1 from "@/assets/img/all-images/blog/blog-img1.png";
import blog10 from "@/assets/img/all-images/blog/blog-img10.png";
import blog11 from "@/assets/img/all-images/blog/blog-img11.png";
import blog2 from "@/assets/img/all-images/blog/blog-img2.png";
import blog3 from "@/assets/img/all-images/blog/blog-img3.png";
import blog6 from "@/assets/img/all-images/blog/blog-img6.png";
import blog7 from "@/assets/img/all-images/blog/blog-img7.png";
import blog8 from "@/assets/img/all-images/blog/blog-img8.png";
import blog9 from "@/assets/img/all-images/blog/blog-img9.png";
import ele15 from "@/assets/img/elements/elements15.png";
import date from "@/assets/img/icons/date1.svg";
import user from "@/assets/img/icons/user1.svg";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
const blogPosts = [{
  id: 1,
  image: blog1,
  title: "Why Branding & Identity Design Business Matter More Than Ever",
  date: "8 December 2024",
  author: "Alex Roy",
  url: "/blog-single"
}, {
  id: 2,
  image: blog2,
  title: "The Complete Guide to Building A High-Converting Best Website",
  date: "8 December 2024",
  author: "Alex Roy",
  url: "/blog-single"
}, {
  id: 3,
  image: blog3,
  title: "Effective SEO Digital Marketing Strategies to Grow Your Brand",
  date: "8 December 2024",
  author: "Alex Roy",
  url: "/blog-single"
}, {
  id: 4,
  image: blog6,
  title: "Web Design Unleashed: Renev Powering Your Digital Journey",
  date: "8 December 2024",
  author: "Alex Roy",
  url: "/blog-single"
}, {
  id: 5,
  image: blog7,
  title: "From Concept to Clicks: Master Your Online Web Design Space",
  date: "8 December 2024",
  author: "Alex Roy",
  url: "/blog-single"
}, {
  id: 6,
  image: blog8,
  title: "Fueling Growth with Cutting-Edge Web Design Strategies",
  date: "8 December 2024",
  author: "Alex Roy",
  url: "/blog-single"
}, {
  id: 7,
  image: blog9,
  title: "Experience the Revolution of Modern Web Design Agency",
  date: "8 December 2024",
  author: "Alex Roy",
  url: "/blog-single"
}, {
  id: 8,
  image: blog10,
  title: "Dream Big, Design Bigger, Design Achieve the Evolution Impossible",
  date: "8 December 2024",
  author: "Alex Roy",
  url: "/blog-single"
}, {
  id: 9,
  image: blog11,
  title: "Your Guide to Building Brands That Shine An Online Support",
  date: "8 December 2024",
  author: "Alex Roy",
  url: "/blog-single"
}];
const Blog = () => {
  return <>
      <div className="vl-blog-1-area sp7" style={{
      backgroundImage: `url(${bg5})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}>
        <img src={ele15} alt="" className="elements15" />
        <Container>
          <Row>
            <Col lg={7} className="m-auto">
              <div className="vl-blog-1-section-box heading1 text-center space-margin60">
                <h2>our latest blog</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {blogPosts.map(post => <Col lg={4} md={4} key={post.id}>
                <div className="vl-blog-1-item">
                  <div className="vl-blog-1-thumb image-anime">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="vl-blog-1-content">
                    <div className="vl-blog-meta">
                      <ul>
                        <li>
                         <Link to="#">
                            <img src={date} alt="Date Icon" /> {post.date}
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <img src={user} alt="User Icon" /> By {post.author}
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
          <Pagination />
        </Container>
      </div>
    </>;
};
export default Blog;