import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCode, FaServer, FaLayerGroup, FaShoppingCart,
  FaWordpress, FaPlug, FaRocket, FaSearch,
  FaPencilRuler, FaCogs, FaFlask, FaHeadset,
  FaChevronDown, FaArrowRight
} from "react-icons/fa";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
  SiMongodb, SiPostgresql, SiTypescript,
  SiTailwindcss, SiGraphql
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import "./WebDevelopment.css";

/* ── Reusable IntersectionObserver hook ── */
const useScrollReveal = (options = {}) => {
  const refs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("wd-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, ...options }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return refs;
};

/* ── Count-up hook ── */
const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
};

/* ── Hero Section ── */
const HeroSection = () => (
  <div className="wd-hero">
    <div className="wd-bg-pattern" />
    <div className="wd-hero-blob1" />
    <div className="wd-hero-blob2" />
    <Container className="position-relative">
      <Row className="justify-content-center">
        <Col lg={9} className="text-center">
          <div className="wd-hero-badge">Web Development Services</div>
          <h1 className="wd-hero-title">
            We Build <span className="wd-gradient-text">Powerful</span><br />
            Web Experiences
          </h1>
          <p className="wd-hero-sub">
            From pixel-perfect frontends to robust backend systems — we craft
            full-stack web solutions that are fast, secure, and built to scale
            with your business ambitions.
          </p>
          <div className="wd-hero-btns">
            <a href="#contact" className="wd-btn-primary">
              Get a Free Quote <FaArrowRight />
            </a>
            <a href="#work" className="wd-btn-outline">
              View Our Work
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

/* ── Services Section ── */
const services = [
  { icon: <FaCode />,         title: "Frontend Development",  desc: "Blazing-fast, responsive UIs built with React, Next.js and modern CSS.", color: "#6366f1" },
  { icon: <FaServer />,       title: "Backend Development",   desc: "Scalable server-side logic with Node.js, Express and RESTful APIs.",    color: "#ec4899" },
  { icon: <FaLayerGroup />,   title: "Full Stack Solutions",  desc: "End-to-end product development from database design to deployment.",    color: "#06b6d4" },
  { icon: <FaShoppingCart />, title: "E-Commerce",            desc: "Custom online stores with secure payments, inventory and analytics.",   color: "#f59e0b" },
  { icon: <FaWordpress />,    title: "CMS Development",       desc: "Headless CMS integrations and custom WordPress solutions.",             color: "#10b981" },
  { icon: <FaPlug />,         title: "API Integration",       desc: "Seamlessly connect third-party services, payment gateways and more.",   color: "#8b5cf6" },
];

const ServicesSection = () => {
  const cardRefs = useScrollReveal();

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const rotateX = -((e.clientY - rect.top  - rect.height / 2) / 14);
    const rotateY =  (e.clientX - rect.left  - rect.width  / 2) / 14;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`;
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0) scale(1)";
  };

  return (
    <section className="wd-section">
      <div className="wd-bg-pattern" />
      <Container className="position-relative">
        <Row>
          <Col lg={12}>
            <div className="wd-section-head text-center wd-fade-up" ref={(el) => (cardRefs.current[99] = el)}>
              <span className="wd-label">What We Offer</span>
              <h2>Our Web Development <span className="wd-gradient-text">Services</span></h2>
              <p>Comprehensive digital solutions tailored to your unique business needs.</p>
            </div>
          </Col>
        </Row>
        <div className="space50" />
        <Row className="g-4">
          {services.map((s, i) => (
            <Col lg={4} md={6} key={i}>
              <div
                className="wd-card wd-fade-up"
                ref={(el) => (cardRefs.current[i] = el)}
                style={{ "--delay": `${i * 120}ms`, "--accent": s.color }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="wd-card-accent" />
                <div className="wd-icon-wrap" style={{ background: `${s.color}18` }}>
                  <span style={{ color: s.color }}>{s.icon}</span>
                </div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

/* ── Tech Stack Section ── */
const techs = [
  { icon: <SiReact />,      name: "React",       color: "#61dafb" },
  { icon: <SiNextdotjs />,  name: "Next.js",     color: "#ffffff" },
  { icon: <SiNodedotjs />,  name: "Node.js",     color: "#6cc24a" },
  { icon: <SiExpress />,    name: "Express",     color: "#ffffff" },
  { icon: <SiMongodb />,    name: "MongoDB",     color: "#47a248" },
  { icon: <SiPostgresql />, name: "PostgreSQL",  color: "#336791" },
  { icon: <SiTypescript />, name: "TypeScript",  color: "#3178c6" },
  { icon: <SiTailwindcss />,name: "Tailwind",    color: "#38bdf8" },
  { icon: <TbApi />,        name: "REST API",    color: "#f59e0b" },
  { icon: <SiGraphql />,    name: "GraphQL",     color: "#e10098" },
];

const TechStackSection = () => {
  const techRefs = useScrollReveal();
  return (
    <section className="wd-section wd-section-alt">
      <div className="wd-bg-pattern" />
      <Container className="position-relative">
        <Row>
          <Col lg={12}>
            <div className="wd-section-head text-center wd-fade-up" ref={(el) => (techRefs.current[99] = el)}>
              <span className="wd-label">Technologies</span>
              <h2>Our <span className="wd-gradient-text">Tech Stack</span></h2>
              <p>We work with cutting-edge technologies to deliver modern, future-proof solutions.</p>
            </div>
          </Col>
        </Row>
        <div className="space50" />
        <Row className="justify-content-center g-3">
          {techs.map((t, i) => (
            <Col xs={6} sm={4} md={3} lg={2} key={i}>
              <div
                className="wd-tech-badge wd-fade-up"
                ref={(el) => (techRefs.current[i] = el)}
                style={{ "--delay": `${i * 80}ms`, "--tech-color": t.color }}
              >
                <span className="wd-tech-icon">{t.icon}</span>
                <span className="wd-tech-name">{t.name}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

/* ── Process Section ── */
const steps = [
  { num: "01", icon: <FaSearch />,     title: "Discovery",    desc: "We deep-dive into your goals, audience, and requirements to craft a clear project roadmap." },
  { num: "02", icon: <FaPencilRuler />,title: "Design",       desc: "Wireframes, prototypes and visual design — every pixel planned before a line of code is written." },
  { num: "03", icon: <FaCode />,       title: "Development",  desc: "Agile sprints, clean code, and constant communication to bring your product to life." },
  { num: "04", icon: <FaFlask />,      title: "Testing",      desc: "Rigorous QA across devices, browsers and edge cases to ensure a flawless experience." },
  { num: "05", icon: <FaRocket />,     title: "Launch",       desc: "Smooth deployment with performance monitoring, SEO setup and go-live support." },
  { num: "06", icon: <FaHeadset />,    title: "Support",      desc: "Ongoing maintenance, updates and enhancements to keep your product thriving." },
];

const ProcessSection = () => {
  const stepRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("wd-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wd-section">
      <div className="wd-bg-pattern" />
      <Container className="position-relative">
        <Row>
          <Col lg={12}>
            <div className="wd-section-head text-center wd-fade-up" ref={(el) => (stepRefs.current[99] = el)}>
              <span className="wd-label">How We Work</span>
              <h2>Our <span className="wd-gradient-text">Process</span></h2>
              <p>A proven 6-step process that turns your idea into a polished digital product.</p>
            </div>
          </Col>
        </Row>
        <div className="space50" />
        <div className="wd-process-grid">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`wd-process-step ${i % 2 === 0 ? "wd-slide-left" : "wd-slide-right"}`}
              ref={(el) => (stepRefs.current[i] = el)}
              style={{ "--delay": `${i * 100}ms` }}
            >
              <div className="wd-step-num">{step.num}</div>
              <div className="wd-step-body">
                <div className="wd-step-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ── Stats Section ── */
const StatCard = ({ value, suffix, label, delay }) => {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Col lg={3} md={6}>
      <div className="wd-stat-card wd-fade-up" ref={ref} style={{ "--delay": delay }}>
        <div className="wd-stat-num">{count}{suffix}</div>
        <div className="wd-stat-label">{label}</div>
      </div>
    </Col>
  );
};

const StatsSection = () => (
  <section className="wd-section wd-section-alt">
    <div className="wd-bg-pattern" />
    <Container className="position-relative">
      <Row className="g-4 justify-content-center">
        <StatCard value={120} suffix="+"  label="Projects Delivered"  delay="0ms" />
        <StatCard value={95}  suffix="+"  label="Happy Clients"       delay="150ms" />
        <StatCard value={5}   suffix="+"  label="Years Experience"    delay="300ms" />
        <StatCard value={18}  suffix="+"  label="Technologies Used"   delay="450ms" />
      </Row>
    </Container>
  </section>
);

/* ── FAQ Section ── */
const faqs = [
  { q: "How long does it take to build a website?",          a: "Timelines vary by complexity — a standard business site takes 3–6 weeks, while complex web apps can take 3–6 months. We provide a detailed timeline after the discovery phase." },
  { q: "What technologies do you use for web development?",  a: "We primarily use React, Next.js, Node.js, and Express for modern web apps. For databases we use MongoDB and PostgreSQL depending on the project needs." },
  { q: "Do you provide post-launch support and maintenance?", a: "Absolutely. We offer flexible maintenance packages including bug fixes, updates, performance monitoring and feature enhancements after launch." },
  { q: "Will my website be mobile responsive?",              a: "Yes — every project we build is fully responsive and tested across all screen sizes and browsers as a standard practice." },
  { q: "Can you redesign my existing website?",              a: "Yes. We handle full redesigns, performance optimization and migration of existing sites to modern tech stacks without losing your data or SEO rankings." },
  { q: "How do you handle project communication?",           a: "We assign a dedicated project manager and use tools like Slack and Notion for regular updates. You'll always know exactly where your project stands." },
];

const FAQSection = () => {
  const [open, setOpen] = useState(null);
  const faqRefs = useScrollReveal();

  return (
    <section className="wd-section">
      <div className="wd-bg-pattern" />
      <Container className="position-relative">
        <Row>
          <Col lg={12}>
            <div className="wd-section-head text-center wd-fade-up" ref={(el) => (faqRefs.current[99] = el)}>
              <span className="wd-label">FAQ</span>
              <h2>Common <span className="wd-gradient-text">Questions</span></h2>
              <p>Everything you need to know before we start building together.</p>
            </div>
          </Col>
        </Row>
        <div className="space50" />
        <Row className="justify-content-center">
          <Col lg={8}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`wd-faq-item wd-fade-up ${open === i ? "wd-faq-open" : ""}`}
                ref={(el) => (faqRefs.current[i] = el)}
                style={{ "--delay": `${i * 100}ms` }}
              >
                <button className="wd-faq-q" onClick={() => setOpen(open === i ? null : i)}>
                  <span>{faq.q}</span>
                  <FaChevronDown className="wd-faq-icon" />
                </button>
                <div className="wd-faq-a">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

/* ── CTA Banner ── */
const CTASection = () => (
  <section className="wd-cta">
    <div className="wd-cta-blob1" />
    <div className="wd-cta-blob2" />
    <Container className="position-relative text-center">
      <span className="wd-label">Let's Collaborate</span>
      <h2 className="wd-cta-title">
        Ready to Build Something <span className="wd-gradient-text">Amazing?</span>
      </h2>
      <p className="wd-cta-sub">
        Tell us about your project and we'll get back to you within 24 hours with a free consultation.
      </p>
      <a href="#contact" className="wd-btn-primary wd-btn-pulse">
        Start Your Project <FaArrowRight />
      </a>
    </Container>
  </section>
);

/* ── Main Page ── */
const WebDevelopment = () => (
  <div className="wd-page">
    <HeroSection />
    <ServicesSection />
    <TechStackSection />
    <ProcessSection />
    <StatsSection />
    <FAQSection />
    <CTASection />
  </div>
);

export default WebDevelopment;
