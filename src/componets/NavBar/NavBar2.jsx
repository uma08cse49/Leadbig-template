import search from "@/assets/img/icons/search1.svg";
import logo from "@/assets/img/logo/Leadbig-logo.png";
import { useEffect, useRef, useState } from "react";
import AppMenu from "./AppMenu";
import { Col, Row } from "react-bootstrap";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { menuItems } from "../../helpers/data";
import MobileMenu from "../MobileMenu";
import SearchBar from "../SearchBar";
const NavBar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const backToTop = useRef(null);
  const [searchOpen, setSearchOpen] = useState(false);
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
      <header className="homepage2-menu">
        <div ref={backToTop} id="vl-header-sticky" className="vl-header-area vl-transparent-header">
          <div className="container headerfix">
            <Row className="align-items-center row-bg1">
              <Col lg={2} md={6} xs={6}>
                <div className="vl-logo">
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
              </Col>
              <Col lg={7} className="d-none d-lg-block">
                <div className="vl-main-menu text-center">
                  <nav className="vl-mobile-menu-active">
                    <ul>
                      <AppMenu items={menuItems} buttonClassName="vl-btn2" />
                    </ul>
                  </nav>
                </div>
              </Col>
              <Col lg={3} md={6} xs={6}>
                <div className="vl-hero-btn d-none d-lg-block text-end">
                  <div className="search-icon header__search header-search-btn">
                    <Link to="#" onClick={() => setSearchOpen(true)}>
                      <img src={search} alt="" />
                    </Link>
                  </div>
                  <span className="vl-btn-wrap text-end">
                    <Link to="/contact" className="vl-btn2">
                      Work With Us
                    </Link>
                  </span>
                </div>
                <div className="vl-header-action-item d-block d-lg-none">
                  <button type="button" className="vl-offcanvas-toggle" onClick={() => setIsMenuOpen(true)}>
                    <FaBarsStaggered />
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </header>
      <SearchBar show={searchOpen} handleClose={() => setSearchOpen(!searchOpen)} />
      <MobileMenu show={isMenuOpen} handleClose={() => setIsMenuOpen(!isMenuOpen)} />
    </>;
};
export default NavBar2;