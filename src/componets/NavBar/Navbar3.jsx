import bars from "@/assets/img/icons/bars-icons1.svg";
import search from "@/assets/img/icons/search1.svg";
import logo1 from "@/assets/img/logo/logo1.png";
import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu";
import SearchBar from "../SearchBar";
import SideBar from "../SideBar";
import AppMenu from "./AppMenu";
import { menuItems } from "../../helpers/data";
const Navbar3 = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleChange = () => {
    setOpen(false);
  };
  const backToTop = useRef(null);
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
      <header className="homepage3-menu">
        <div ref={backToTop} id="vl-header-sticky" className="vl-header-area vl-transparent-header">
          <Container>
            <Row className="align-items-center row-bg1">
              <Col lg={2} md={6} xs={6}>
                <div className="vl-logo">
                  <Link to="/">
                    <img src={logo1} alt="" />
                  </Link>
                </div>
              </Col>
              <Col lg={6} className="d-none d-lg-block">
                <div className="vl-main-menu text-start">
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
                    <img src={bars} alt="" />
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
      <SideBar show={open} toggle={() => setOpen(!open)} onChange={handleChange} />
      <SearchBar show={searchOpen} handleClose={() => setSearchOpen(!searchOpen)} />
      <MobileMenu show={isMenuOpen} handleClose={() => setIsMenuOpen(!isMenuOpen)} />
    </>;
};
export default Navbar3;