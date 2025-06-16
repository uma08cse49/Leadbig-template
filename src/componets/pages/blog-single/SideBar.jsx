import blog12 from "@/assets/img/all-images/blog/blog-img12.png";
import blog13 from "@/assets/img/all-images/blog/blog-img13.png";
import blog14 from "@/assets/img/all-images/blog/blog-img14.png";
import date from "@/assets/img/icons/date1.svg";
import { Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SideBar = () => {
  return <>
      <Col lg={4}>
        <div className="blog-details-side">
          <div className="search-area">
            <h3>Search</h3>
            <div className="space24"></div>
            <form>
              <input type="text" placeholder="Search..." />
              <button type="submit">
                <FaSearch />
              </button>
            </form>
          </div>
          <div className="space30"></div>
          <div className="category-area">
            <h3>Blog Category</h3>
            <div className="space6"></div>
            <ul>
              <li>
                <Link to="#">
                  Web Design Trends (14)
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to="#">
                  Web Development Coding (05)
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to="#">
                  SEO & Digital Marketing (10)
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to="#">
                  E-commerce Solutions (6)
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to="#">
                  Branding & Strategy (8)
                  <FaAngleRight />
                </Link>
              </li>
              <li>
                <Link to="#">
                  Web Design Inspiration (8)
                  <FaAngleRight />
                </Link>
              </li>
            </ul>
          </div>
          <div className="space30"></div>
          <div className="recent-posts">
            <h3>Recent Posts</h3>
            <div className="space32"></div>
            <div className="img1">
              <img src={blog12} alt="" />
            </div>
            <div className="space24"></div>
            <div className="content-area">
              <ul>
                <li>
                  <Link to="#">
                    <img src={date} alt="" />8 December 2024
                  </Link>
                </li>
              </ul>
              <div className="space14"></div>
              <Link to="/blog-single">
                Why Branding & Identity Design Business Matter More Than Ever
              </Link>
              <div className="space20"></div>
              <Link to="blog-single" className="readmore">
                Learn More
                <FaArrowRight />
              </Link>
            </div>
            <div className="space30"></div>
            <div className="img1">
              <img src={blog13} alt="" />
            </div>
            <div className="space24"></div>
            <div className="content-area">
              <ul>
                <li>
                  <Link to="#">
                    <img src={date} alt="" />8 December 2024
                  </Link>
                </li>
              </ul>
              <div className="space14"></div>
              <Link to="/blog-single">
                Why Branding & Identity Design Business Matter More Than Ever
              </Link>
              <div className="space20"></div>
              <Link to="blog-single" className="readmore">
                Learn More <FaArrowRight />
              </Link>
            </div>
            <div className="space30"></div>
            <div className="img1">
              <img src={blog14} alt="" />
            </div>
            <div className="space24"></div>
            <div className="content-area">
              <ul>
                <li>
                  <Link to="#">
                    <img src={date} alt="" />8 December 2024
                  </Link>
                </li>
              </ul>
              <div className="space14"></div>
              <Link to="/blog-single">
                Why Branding & Identity Design Business Matter More Than Ever
              </Link>
              <div className="space20"></div>
              <Link to="blog-single" className="readmore">
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="space30"></div>
          <div className="blog-category2">
            <h3>Blog Category</h3>
            <div className="space8"></div>
            <ul>
              <li>
                <Link to="#">#BrandStrategy</Link>
              </li>
              <li>
                <Link to="#">#CreativeStrategy</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="#">#DigitalTransform</Link>
              </li>
              <li>
                <Link to="#">#MarketAnalysis</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="#">#RiskManagement</Link>
              </li>
              <li>
                <Link to="#">#ClientSuccess</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="#">#SuccessConsulting</Link>
              </li>
              <li>
                <Link to="#">#GrowthStrategy</Link>
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </>;
};
export default SideBar;