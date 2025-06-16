import { Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SideBar = () => {
  return <Col lg={4}>
      <div className="service-details-side">
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
          <h3>Our Service</h3>
          <div className="space6"></div>
          <ul>
            <li>
              <Link to="#">
                UI/UX Design <FaChevronRight />
              </Link>
            </li>
            <li>
              <Link to="#">
                E-commerce Shop <FaChevronRight />
              </Link>
            </li>
            <li>
              <Link to="#">
                Branding Identity <FaChevronRight />
              </Link>
            </li>
            <li>
              <Link to="#">
                Digital Marketing
                <FaChevronRight />
              </Link>
            </li>
          </ul>
        </div>

        <div className="space30"></div>
        <div className="contact-boxarea">
          <h3>Get A Free Quote</h3>
          <div className="space8"></div>
          <div className="input-area">
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="input-area">
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="input-area">
            <input type="number" placeholder="Phone Number" />
          </div>

          <div className="input-area">
            <textarea placeholder="Your Message"></textarea>
          </div>
          <div className="input-area text-end">
            <button type="submit" className="vl-btn1" style={{
            overflow: "hidden"
          }}>
              Submit Now
            </button>
          </div>
        </div>
        <div className="space30 d-lg-none d-block"></div>
      </div>
    </Col>;
};
export default SideBar;