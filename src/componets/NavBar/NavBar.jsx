import logo from "@/assets/img/logo/logo1.png";
import { Col, Container, Row } from "react-bootstrap";
import AppMenu from "./AppMenu";
import icon from "@/assets/img/icons/bars-icons1.svg";
import search from "@/assets/img/icons/search1.svg";
import { useEffect, useRef, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { menuItems } from "../../helpers/data";
import MobileMenu from "../MobileMenu";
import SearchBar from "../SearchBar";
import SideBar from "../SideBar";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const backToTop = useRef(null);
  const handleChange = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (backToTop.current) {
        backToTop.current.classList.toggle("header-sticky", window.scrollY > 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <>
      <header className="homepage1-menu">
        <div className="vl-header-area vl-transparent-header" ref={backToTop}>
          <Container className="headerfix">
            <Row className="align-items-center row-bg1">
              <Col lg={2} md={6} xs={6}>
                <div className="vl-logo">
                  <Link to="/">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
              </Col>
              <Col lg={6} className="d-none d-lg-block">
                <div className="vl-main-menu text-center">
                  <nav className="vl-mobile-menu-active">
                    <ul>
                      <AppMenu items={menuItems} buttonClassName="vl-btn1" />
                    </ul>
                  </nav>
                </div>
              </Col>

              <Col lg={4} md={6} xs={6}>
                <div className="vl-hero-btn d-none d-lg-block text-end">
                  <div className="search-icon header__search header-search-btn">
                    <Link to="#" onClick={() => setSearchOpen(true)}>
                      <img src={search} alt="" />
                    </Link>
                  </div>
                  <span className="vl-btn-wrap text-end">
                    <Link to="/contact" className="vl-btn1" style={{
                    overflow: "hidden"
                  }}>
                      Let’s Build Together
                    </Link>
                  </span>
                  <button className="hamburger_menu" onClick={() => setOpen(true)}>
                    <img src={icon} alt="" />
                  </button>
                </div>
                <div className="vl-header-action-item d-block d-lg-none">
                  <button type="button" className="vl-offcanvas-toggle" onClick={() => setIsMenuOpen(true)}>
                    <FaBarsStaggered />
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <MobileMenu show={isMenuOpen} handleClose={() => setIsMenuOpen(!isMenuOpen)} />
      <SideBar show={open} toggle={() => setOpen(!open)} onChange={handleChange} />
      <SearchBar show={searchOpen} handleClose={() => setSearchOpen(!searchOpen)} />
    </>;
};
export default NavBar;