import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaSearch, FaChevronRight, FaCheckCircle,
  FaCogs, FaUsers, FaCloud, FaRobot,
  FaPlug, FaShieldAlt, FaArrowRight,
  FaLightbulb, FaDraftingCompass, FaCode,
  FaVial, FaRocket, FaHeadset,FaAws 
} from "react-icons/fa";
import {
  SiReact, SiNodedotjs, SiPython, SiDjango,
  SiPostgresql, SiMongodb, 
  SiDocker, SiKubernetes,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import "./SoftwareSolutions.css";

/* ── IntersectionObserver hook ── */
const useReveal = () => {
  const refs = useRef([]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("ss-visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.15 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  return refs;
};

/* ══════════════════════════════════
   MARQUEE TICKER
══════════════════════════════════ */
const Marquee = () => {
  const items = ["SOFTWARE SOLUTIONS", "CUSTOM DEVELOPMENT", "CLOUD SYSTEMS", "API INTEGRATION", "ERP & CRM", "AUTOMATION TOOLS", "SAAS PRODUCTS", "SECURE SYSTEMS"];
  return (
    <div className="ss-marquee-wrap">
      <div className="ss-marquee-track">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="ss-marquee-item">{t} <span className="ss-marquee-star">✦</span></span>
        ))}
      </div>
    </div>
  );
};

/* ══════════════════════════════════
   BREADCRUMB HERO BANNER
══════════════════════════════════ */
const PageBanner = () => (
  <div className="ss-banner">
    <div className="ss-banner-glow" />
    <Container>
      <Row className="align-items-center">
        <Col lg={7}>
          <p className="ss-breadcrumb">HOME <FaChevronRight /> SOFTWARE SOLUTIONS</p>
          <h1 className="ss-banner-title">SOFTWARE<br />SOLUTIONS</h1>
        </Col>
        <Col lg={5} className="text-end">
          <div className="ss-banner-img-wrap">
            <div className="ss-banner-img-placeholder">
              <FaCogs className="ss-banner-icon" />
              <div className="ss-banner-orbit ss-orbit1" />
              <div className="ss-banner-orbit ss-orbit2" />
              <div className="ss-banner-orbit ss-orbit3" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <Marquee />
  </div>
);

/* ══════════════════════════════════
   SIDEBAR
══════════════════════════════════ */
const services = [
  { label: "UI/UX DESIGN",         to: "/uiux-design" },
  { label: "E-COMMERCE SHOP",      to: "/ecommerce" },
  { label: "BRANDING IDENTITY",    to: "/branding" },
  { label: "SOFTWARE SOLUTIONS",   to: "/software-solutions", active: true },
  { label: "DIGITAL MARKETING",    to: "/digital-marketing" },
  { label: "WEB DEVELOPMENT",      to: "/web-development" },
];

const Sidebar = () => (
  <div className="ss-sidebar">
    {/* Search */}
    <div className="ss-sidebar-block">
      <h6 className="ss-sidebar-title">SEARCH</h6>
      <div className="ss-search-wrap">
        <input type="text" placeholder="Search..." className="ss-search-input" />
        <button className="ss-search-btn"><FaSearch /></button>
      </div>
    </div>

    {/* Service Links */}
    <div className="ss-sidebar-block">
      <h6 className="ss-sidebar-title">OUR SERVICE</h6>
      <ul className="ss-service-list">
        {services.map((s, i) => (
          <li key={i} className={s.active ? "ss-service-active" : ""}>
            <Link to={s.to}>
              {s.label}
              <FaChevronRight className="ss-link-arrow" />
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Free Quote Form */}
    <div className="ss-sidebar-block">
      <h6 className="ss-sidebar-title">GET A FREE QUOTE</h6>
      <div className="ss-quote-form">
        <input type="text"  placeholder="Your Name"     className="ss-form-input" />
        <input type="email" placeholder="Email Address" className="ss-form-input" />
        <input type="tel"   placeholder="Phone Number"  className="ss-form-input" />
        <textarea           placeholder="Your Message"  className="ss-form-input ss-form-textarea" rows={4} />
        <button className="ss-form-btn">SEND MESSAGE <FaArrowRight /></button>
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════
   MAIN CONTENT — INTRO
══════════════════════════════════ */
const benefits = [
  "Custom Software Development",
  "Scalable Architecture",
  "Cloud-Ready Systems",
  "API-Driven Solutions",
  "Secure & Fully Tested",
  "Agile Delivery Model",
];

const IntroSection = ({ refs, idx }) => (
  <div className="ss-intro ss-fade-up" ref={(el) => (refs.current[idx] = el)}>
    <h2 className="ss-main-title">SOFTWARE SOLUTIONS</h2>
    <p className="ss-main-desc">
      We engineer powerful, scalable software that solves real business problems.
      From enterprise platforms to intelligent automation — we turn complex requirements
      into clean, maintainable, and future-proof digital systems.
    </p>
    <div className="ss-benefits-grid">
      {benefits.map((b, i) => (
        <div key={i} className="ss-benefit-item">
          <FaCheckCircle className="ss-check" /> {b}
        </div>
      ))}
    </div>
  </div>
);

/* ══════════════════════════════════
   WHAT WE BUILD (SERVICE CARDS)
══════════════════════════════════ */
const builds = [
  { icon: <FaCogs />,    title: "ERP Systems",        desc: "Fully integrated enterprise platforms to streamline operations, finance, and HR.", tags: ["#ERPSolutions", "#Enterprise"] },
  { icon: <FaUsers />,   title: "CRM Platforms",      desc: "Customer relationship tools built to improve sales pipelines and client retention.", tags: ["#CRMDev", "#SalesTools"] },
  { icon: <FaRocket />,  title: "SaaS Products",      desc: "Multi-tenant cloud products built for scale, with robust billing and user management.", tags: ["#SaaS", "#CloudFirst"] },
  { icon: <FaRobot />,   title: "Automation Tools",   desc: "Workflow automation and RPA solutions that reduce manual effort and improve accuracy.", tags: ["#Automation", "#Efficiency"] },
  { icon: <FaCloud />,   title: "Cloud Solutions",    desc: "AWS and cloud-native architectures designed for performance, reliability and cost control.", tags: ["#CloudOps", "#AWS"] },
  { icon: <FaPlug />,    title: "API Development",    desc: "RESTful and GraphQL APIs that connect your systems and power third-party integrations.", tags: ["#APIFirst", "#Integration"] },
];

const WhatWeBuildSection = ({ refs, startIdx }) => (
  <div className="ss-section">
    <div className="ss-fade-up" ref={(el) => (refs.current[startIdx] = el)}>
      <p className="ss-section-label">✦ WHAT WE BUILD</p>
      <h2 className="ss-section-title">WHAT WE OFFER IN<br />SOFTWARE SOLUTIONS?</h2>
    </div>
    <Row className="g-3 mt-3">
      {builds.map((b, i) => (
        <Col md={6} key={i}>
          <div
            className="ss-build-card ss-fade-up"
            ref={(el) => (refs.current[startIdx + 1 + i] = el)}
            style={{ "--delay": `${i * 100}ms` }}
          >
            <div className="ss-build-icon">{b.icon}</div>
            <div className="ss-build-body">
              <h5>{b.title}</h5>
              <p>{b.desc}</p>
              <div className="ss-tags">
                {b.tags.map((t, j) => <span key={j} className="ss-tag">{t}</span>)}
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </div>
);

/* ══════════════════════════════════
   TECH STACK
══════════════════════════════════ */
const techs = [
  { icon: <SiReact />,      name: "React",      color: "#61dafb" },
  { icon: <SiNodedotjs />,  name: "Node.js",    color: "#6cc24a" },
  { icon: <SiPython />,     name: "Python",     color: "#ffd343" },
  { icon: <SiDjango />,     name: "Django",     color: "#09622a" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
  { icon: <SiMongodb />,    name: "MongoDB",    color: "#47a248" },
  { icon: <FaAws />,        name: "AWS",        color: "#ff9900" },
  { icon: <SiDocker />,     name: "Docker",     color: "#2496ed" },
  { icon: <SiKubernetes />, name: "Kubernetes", color: "#326ce5" },
  { icon: <TbApi />,        name: "REST API",   color: "#f97316" },
];

const TechStackSection = ({ refs, startIdx }) => (
  <div className="ss-section">
    <div className="ss-fade-up" ref={(el) => (refs.current[startIdx] = el)}>
      <p className="ss-section-label">✦ TECHNOLOGIES</p>
      <h2 className="ss-section-title">OUR TECH STACK</h2>
    </div>
    <div className="ss-tech-grid mt-4">
      {techs.map((t, i) => (
        <div
          key={i}
          className="ss-tech-badge ss-fade-up"
          ref={(el) => (refs.current[startIdx + 1 + i] = el)}
          style={{ "--delay": `${i * 70}ms`, "--tc": t.color }}
        >
          <span className="ss-tech-icon" style={{ color: t.color }}>{t.icon}</span>
          <span className="ss-tech-name">{t.name}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ══════════════════════════════════
   PROCESS / HOW WE WORK
══════════════════════════════════ */
const steps = [
  { num: "01", icon: <FaLightbulb />,      title: "Requirements",  desc: "We gather detailed business requirements, user stories, and define clear project scope." },
  { num: "02", icon: <FaDraftingCompass />, title: "Architecture",  desc: "System design, database schema, tech stack selection, and infrastructure planning." },
  { num: "03", icon: <FaCode />,            title: "Development",   desc: "Agile sprints with continuous integration, code reviews, and weekly progress demos." },
  { num: "04", icon: <FaVial />,            title: "QA & Testing",  desc: "Automated and manual testing across unit, integration, and end-to-end test coverage." },
  { num: "05", icon: <FaRocket />,          title: "Deployment",    desc: "CI/CD pipelines, cloud deployment, monitoring setup and zero-downtime launches." },
  { num: "06", icon: <FaHeadset />,         title: "Maintenance",   desc: "Ongoing support, performance tuning, security patches and feature enhancements." },
];

const ProcessSection = ({ refs, startIdx }) => (
  <div className="ss-section">
    <div className="ss-fade-up" ref={(el) => (refs.current[startIdx] = el)}>
      <p className="ss-section-label">✦ HOW WE WORK</p>
      <h2 className="ss-section-title">OUR DEVELOPMENT<br />PROCESS</h2>
    </div>
    <div className="ss-process-list mt-4">
      {steps.map((s, i) => (
        <div
          key={i}
          className={`ss-process-item ss-fade-up ${i % 2 === 0 ? "ss-from-left" : "ss-from-right"}`}
          ref={(el) => (refs.current[startIdx + 1 + i] = el)}
          style={{ "--delay": `${i * 100}ms` }}
        >
          <div className="ss-process-num">{s.num}</div>
          <div className="ss-process-icon">{s.icon}</div>
          <div className="ss-process-body">
            <h5>{s.title}</h5>
            <p>{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ══════════════════════════════════
   PORTFOLIO SHOWCASE
══════════════════════════════════ */
const projects = [
  { category: "ERP SYSTEM",      title: "ENTERPRISE RESOURCE PLANNING PLATFORM",   bg: "#1a1a2e" },
  { category: "SAAS PRODUCT",    title: "CLOUD-BASED PROJECT MANAGEMENT TOOL",     bg: "#0f2027" },
  { category: "CRM PLATFORM",    title: "SALES & CUSTOMER PIPELINE DASHBOARD",     bg: "#1a0a2e" },
  { category: "AUTOMATION",      title: "AI-POWERED WORKFLOW AUTOMATION SUITE",    bg: "#0a1a0f" },
];

const PortfolioSection = ({ refs, startIdx }) => (
  <div className="ss-section">
    <div className="ss-fade-up" ref={(el) => (refs.current[startIdx] = el)}>
      <p className="ss-section-label">✦ SHOWCASING OUR IMPACT</p>
      <h2 className="ss-section-title">OUR PORTFOLIO<br />SHOWCASE</h2>
    </div>
    <Row className="g-3 mt-3">
      {projects.map((p, i) => (
        <Col md={6} key={i}>
          <div
            className="ss-project-card ss-fade-up"
            ref={(el) => (refs.current[startIdx + 1 + i] = el)}
            style={{ "--delay": `${i * 120}ms`, background: p.bg }}
          >
            {/* placeholder visual */}
            <div className="ss-project-visual">
              <FaCogs className="ss-project-bg-icon" />
            </div>
            {/* floating label */}
            <div className="ss-project-label">
              <div className="ss-project-arrow">
                <FaArrowRight />
              </div>
              <div>
                <p className="ss-project-cat">{p.category}</p>
                <h5 className="ss-project-name">{p.title}</h5>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </div>
);

/* ══════════════════════════════════
   CTA STRIP
══════════════════════════════════ */
const CTAStrip = () => (
  <div className="ss-cta-strip">
    <Marquee />
    <Container>
      <Row className="align-items-center justify-content-between py-5">
        <Col lg={7}>
          <h2 className="ss-cta-title">GET IN TOUCH</h2>
          <p className="ss-cta-sub">Ready to build something powerful? Let's turn your idea into a world-class software product.</p>
        </Col>
        <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
          <Link to="/contact" className="ss-cta-btn">
            START YOUR PROJECT <FaArrowRight />
          </Link>
        </Col>
      </Row>
    </Container>
  </div>
);

/* ══════════════════════════════════
   MAIN PAGE
══════════════════════════════════ */
const SoftwareSolutions = () => {
  const refs = useReveal();

  return (
    <div className="ss-page">
      <PageBanner />

      <Container className="ss-main-container">
        <Row className="g-4">
          {/* Sidebar */}
          <Col lg={4} md={12}>
            <Sidebar />
          </Col>

          {/* Main Content */}
          <Col lg={8} md={12}>
            <IntroSection       refs={refs} idx={0} />
            <WhatWeBuildSection refs={refs} startIdx={1} />
            <TechStackSection   refs={refs} startIdx={10} />
            <ProcessSection     refs={refs} startIdx={22} />
            <PortfolioSection   refs={refs} startIdx={30} />
          </Col>
        </Row>
      </Container>

      <CTAStrip />
    </div>
  );
};

export default SoftwareSolutions;
