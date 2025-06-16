import { FaSearch } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SideBar = () => {
  const socialLinks = [{
    icon: <FaFacebookF />,
    url: "#"
  }, {
    icon: <FaLinkedinIn />,
    url: "#"
  }, {
    icon: <FaInstagram />,
    url: "#"
  }, {
    icon: <FaYoutube />,
    url: "#",
    className: "m-0"
  }];
  return <>
      <div className="project-details-side">
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
        <div className="project-details-box">
          <h3>Project Details</h3>
          <div className="space12"></div>
          <div className="list-details">
            <h4>Category:</h4>
            <h5>Website Re-Design</h5>
          </div>

          <div className="list-details1">
            <h4>Client:</h4>
            <h5>James Anderson</h5>
          </div>

          <div className="list-details2">
            <h4>Location:</h4>
            <h5>New York, USA</h5>
          </div>

          <div className="list-details3">
            <h4>Value::</h4>
            <h5>$50.00K</h5>
          </div>

          <div className="list-details4">
            <h4>Website:</h4>
            <h5>www.renev.com</h5>
          </div>

          <div className="list-details5">
            <h4>Share:</h4>
            <ul>
              {socialLinks.map((link, idx) => <li key={idx}>
                  <Link to={link.url} className={link.className || ""}>
                    {link.icon}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </>;
};
export default SideBar;