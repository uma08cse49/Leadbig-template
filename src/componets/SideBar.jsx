import logo from "@/assets/img/logo/logo1.png";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaXmark, FaYoutube } from "react-icons/fa6";
HTMLButtonElement;
const SideBar = ({
  toggle,
  show,
  onChange,
  className,
  buttonClassName
}) => {
  const onClose = () => {
    onChange();
  };
  return <>
      <Offcanvas show={show} onHide={toggle} placement="end" style={{
      width: "450px"
    }} className={className ? "homepage4" : ""}>
        <div className="header-site-icon">
          <div className="slide-bar slide-bar1">
            <div className="sidebar-info">
              <div className="sidebar-logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
                <div className="close-mobile-menu">
                  <Link to={""}>
                    <FaXmark onClick={() => onClose()} />
                  </Link>
                </div>
              </div>
              <div className="sidebar-content">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/service">service</Link>
                  </li>
                  <li>
                    <Link to="/project">Project</Link>
                  </li>
                  <li>
                    <Link to="/blog-single">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="space32"></div>
              <div className="btn-area">
                <Link to="/contact" style={{
                overflow: "hidden"
              }} className={buttonClassName ? buttonClassName : "vl-btn1"}>
                  Get in touch now
                </Link>
              </div>
              <div className="space40"></div>
              <div className="social-link-area">
                <h3 className="sidebar-heading">Social Links</h3>
                <ul>
                  <li>
                    <Link to="#">
                      <FaFacebookF />
                    </Link>
                    <Link to="#">
                      <FaInstagram />
                    </Link>
                    <Link to="#">
                      <FaLinkedinIn />
                    </Link>
                    <Link to="#">
                      <FaPinterestP />
                    </Link>
                    <Link to="#">
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space40"></div>
              <div className="form-area">
                <h3>Subscribe To Newsletter</h3>
                <form>
                  <input type="text" placeholder="Email Address*" readOnly />

                  <button type="submit" className={buttonClassName ? buttonClassName : "vl-btn1"} style={{
                  overflow: "hidden"
                }}>
                    subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Offcanvas>
    </>;
};
export default SideBar;