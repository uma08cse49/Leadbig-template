import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaChevronRight, FaSearch, FaArrowRight, FaCheckCircle,
  FaBullhorn, FaHashtag, FaPenNib, FaChartBar,
  FaEnvelopeOpenText, FaLightbulb, FaCrosshairs,
  FaPaintBrush, FaRocket, FaChartLine, FaHeadset,
  FaChevronDown, FaSearchDollar, 
} from "react-icons/fa";
import {
  SiGoogleads, SiGoogleanalytics, SiMailchimp,
  SiHubspot, SiCanva, SiHootsuite, SiSemrush, 
} from "react-icons/si";
import { MdAdsClick } from "react-icons/md";
import "./DigitalMarketing.css";

/* ── IntersectionObserver hook ── */
const useReveal = () => {
  const refs = useRef([]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("dm-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.13 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  return refs;
};

/* ── Count-up hook ── */
const useCountUp = (target, duration = 2000, started = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const tick = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);
  return count;
};

/* ════════════════════════════════════
   MARQUEE
════════════════════════════════════ */
const Marquee = () => {
  const items = [
    "SEO MARKETING", "SOCIAL MEDIA", "PPC ADS",
    "CONTENT MARKETING", "EMAIL MARKETING",
    "ANALYTICS", "BRAND STRATEGY", "LEAD GENERATION",
  ];
  return (
    <div className="dm-marquee-wrap">
      <div className="dm-marquee-track">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="dm-marquee-item">
            {t} <span className="dm-marquee-star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

/* ════════════════════════════════════
   PAGE BANNER
════════════════════════════════════ */
const PageBanner = () => (
  <div className="dm-banner">
    <div className="dm-banner-glow" />
    <Container>
      <Row className="align-items-center">
        <Col lg={7}>
          <p className="dm-breadcrumb">
            HOME <FaChevronRight /> DIGITAL MARKETING
          </p>
          <h1 className="dm-banner-title">
            DIGITAL<br />MARKETING
          </h1>
        </Col>
        <Col lg={5} className="text-end">
          <div className="dm-banner-icon-wrap">
            <FaBullhorn className="dm-banner-icon" />
            <div className="dm-orbit dm-orbit1" />
            <div className="dm-orbit dm-orbit2" />
            <div className="dm-orbit dm-orbit3" />
            <div className="dm-orbit-dot dm-dot1" />
            <div className="dm-orbit-dot dm-dot2" />
          </div>
        </Col>
      </Row>
    </Container>
    <Marquee />
  </div>
);

/* ════════════════════════════════════
   SIDEBAR
════════════════════════════════════ */
const navLinks = [
  { label: "UI/UX DESIGN",        to: "/uiux-design" },
  { label: "E-COMMERCE SHOP",     to: "/ecommerce" },
  { label: "BRANDING IDENTITY",   to: "/branding" },
  { label: "SOFTWARE SOLUTIONS",  to: "/software-solutions" },
  { label: "DIGITAL MARKETING",   to: "/digital-marketing", active: true },
  { label: "WEB DEVELOPMENT",     to: "/web-development" },
];

const Sidebar = () => (
  <div className="dm-sidebar">
    {/* Search */}
    <div className="dm-sidebar-block">
      <h6 className="dm-sidebar-heading">SEARCH</h6>
      <div className="dm-search-wrap">
        <input type="text" placeholder="Search..." className="dm-search-input" />
        <button className="dm-search-btn"><FaSearch /></button>
      </div>
    </div>

    {/* Service nav */}
    <div className="dm-sidebar-block">
      <h6 className="dm-sidebar-heading">OUR SERVICE</h6>
      <ul className="dm-nav-list">
        {navLinks.map((s, i) => (
          <li key={i} className={s.active ? "dm-nav-active" : ""}>
            <Link to={s.to}>
              {s.label}
              <FaChevronRight className="dm-nav-arrow" />
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Quote form */}
    <div className="dm-sidebar-block">
      <h6 className="dm-sidebar-heading">GET A FREE QUOTE</h6>
      <div className="dm-quote-form">
        <input type="text"  placeholder="Your Name"     className="dm-input" />
        <input type="email" placeholder="Email Address" className="dm-input" />
        <input type="tel"   placeholder="Phone Number"  className="dm-input" />
        <textarea           placeholder="Your Message"  className="dm-input dm-textarea" rows={4} />
        <button className="dm-quote-btn">
          SEND MESSAGE <FaArrowRight />
        </button>
      </div>
    </div>
  </div>
);

/* ════════════════════════════════════
   INTRO
════════════════════════════════════ */
const benefits = [
  "Data-Driven Strategy",
  "SEO & SEM",
  "Social Media Management",
  "PPC Campaigns",
  "Content Marketing",
  "ROI-Focused Results",
];

const Intro = ({ refs, idx }) => (
  <div className="dm-intro dm-fade-up" ref={(el) => (refs.current[idx] = el)}>
    <h2 className="dm-main-title">DIGITAL MARKETING</h2>
    <p className="dm-main-desc">
      We help businesses grow their online presence through data-driven digital
      marketing strategies. From SEO to social media — we craft campaigns that
      attract, engage, and convert your ideal customers into loyal brand advocates.
    </p>
    <div className="dm-benefits-grid">
      {benefits.map((b, i) => (
        <div key={i} className="dm-benefit">
          <FaCheckCircle className="dm-check" /> {b}
        </div>
      ))}
    </div>
  </div>
);

/* ════════════════════════════════════
   WHAT WE OFFER
════════════════════════════════════ */
const offerCards = [
  {
    icon: <FaSearchDollar />,
    title: "SEO Optimization",
    desc: "Rank higher on Google with technical SEO, on-page optimization, keyword strategy and high-quality link building.",
    tags: ["#SEOExperts", "#OrganicGrowth"],
  },
  {
    icon: <FaHashtag />,
    title: "Social Media Marketing",
    desc: "Build brand presence and engaged communities across Instagram, Facebook, LinkedIn and X with targeted content.",
    tags: ["#SocialMediaGrowth", "#BrandAwareness"],
  },
  {
    icon: <MdAdsClick />,
    title: "PPC Advertising",
    desc: "Run high-converting paid campaigns on Google Ads and Meta Ads designed to maximize your ROAS.",
    tags: ["#PPCExperts", "#PaidAds"],
  },
  {
    icon: <FaPenNib />,
    title: "Content Marketing",
    desc: "Strategic blogs, videos, and creatives that educate your audience and drive consistent organic traffic.",
    tags: ["#ContentStrategy", "#Storytelling"],
  },
  {
    icon: <FaEnvelopeOpenText />,
    title: "Email Marketing",
    desc: "Automated email sequences and newsletters that nurture leads, boost retention and drive repeat sales.",
    tags: ["#EmailCampaigns", "#LeadNurturing"],
  },
  {
    icon: <FaChartBar />,
    title: "Analytics & Reporting",
    desc: "Real-time dashboards and monthly performance reports to track, measure and optimize every campaign.",
    tags: ["#DataDriven", "#MarketingROI"],
  },
];

const WhatWeOffer = ({ refs, startIdx }) => (
  <div className="dm-section">
    <div className="dm-fade-up" ref={(el) => (refs.current[startIdx] = el)}>
      <p className="dm-label">✦ WHAT WE OFFER</p>
      <h2 className="dm-section-title">
        WHAT WE OFFER IN<br />DIGITAL MARKETING?
      </h2>
    </div>
    <Row className="g-3 mt-3">
      {offerCards.map((c, i) => (
        <Col md={6} key={i}>
          <div
            className="dm-offer-card dm-fade-up"
            ref={(el) => (refs.current[startIdx + 1 + i] = el)}
            style={{ "--delay": `${i * 100}ms` }}
          >
            <div className="dm-offer-icon">{c.icon}</div>
            <div className="dm-offer-body">
              <h5>{c.title}</h5>
              <p>{c.desc}</p>
              <div className="dm-tags">
                {c.tags.map((t, j) => (
                  <span key={j} className="dm-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </div>
);

/* ════════════════════════════════════
   TOOLS / PLATFORMS
════════════════════════════════════ */
const tools = [
  { icon: <SiGoogleads />,      name: "Google Ads",     color: "#4285f4" },
  { icon: <MdAdsClick />,       name: "Meta Ads",       color: "#0668e1" },
  { icon: <SiGoogleanalytics />,name: "GA4",            color: "#e37400" },
  { icon: <SiSemrush />,        name: "SEMrush",        color: "#f97316" },
  { icon: <SiMailchimp />,      name: "Mailchimp",      color: "#ffe01b" },
  { icon: <SiHubspot />,        name: "HubSpot",        color: "#ff7a59" },
  { icon: <SiCanva />,          name: "Canva",          color: "#00c4cc" },
  { icon: <SiHootsuite />,      name: "Hootsuite",      color: "#143059" },
  { icon: <FaSearch />,         name: "Ahrefs",         color: "#ff7043" },
  { icon: <FaSearch />,         name: "Search Console", color: "#34a853" },
];

const ToolsSection = ({ refs, startIdx }) => (
  <div className="dm-section">
    <div className="dm-fade-up" ref={(el) => (refs.current[startIdx] = el)}>
      <p className="dm-label">✦ PLATFORMS & TOOLS</p>
      <h2 className="dm-section-title">TOOLS WE USE</h2>
    </div>
    <div className="dm-tools-grid mt-4">
      {tools.map((t, i) => (
        <div
          key={i}
          className="dm-tool-badge dm-fade-up"
          ref={(el) => (refs.current[startIdx + 1 + i] = el)}
          style={{ "--delay": `${i * 70}ms`, "--tc": t.color }}
        >
          <span className="dm-tool-icon" style={{ color: t.color }}>{t.icon}</span>
          <span className="dm-tool-name">{t.name}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ════════════════════════════════════
   PROCESS
════════════════════════════════════ */
const steps = [
  { num: "01", icon: <FaLightbulb />,     title: "Discovery & Audit",   desc: "We audit your current online presence, competitors and market opportunities to identify quick wins and long-term strategies." },
  { num: "02", icon: <FaCrosshairs />,    title: "Strategy Planning",   desc: "Define target audiences, set KPIs, choose the right channels and build a data-backed marketing roadmap." },
  { num: "03", icon: <FaPaintBrush />,    title: "Campaign Setup",      desc: "Build ad accounts, set up tracking pixels, configure analytics, create audience segments and prepare all creatives." },
  { num: "04", icon: <FaPenNib />,        title: "Content Creation",    desc: "Produce high-quality copy, graphics, videos and landing pages optimized for each platform and audience." },
  { num: "05", icon: <FaRocket />,        title: "Launch & Monitor",    desc: "Go live across all channels with real-time monitoring, A/B testing and daily performance checks." },
  { num: "06", icon: <FaChartLine />,     title: "Optimize & Report",   desc: "Monthly reports with actionable insights, continuous optimization and strategy refinement based on data." },
];

const ProcessSection = ({ refs, startIdx }) => (
  <div className="dm-section">
    <div className="dm-fade-up" ref={(el) => (refs.current[startIdx] = el)}>
      <p className="dm-label">✦ HOW WE WORK</p>
      <h2 className="dm-section-title">OUR MARKETING PROCESS</h2>
    </div>
    <div className="dm-process-list mt-4">
      {steps.map((s, i) => (
        <div
          key={i}
          className={`dm-process-item dm-fade-up ${i % 2 === 0 ? "dm-from-left" : "dm-from-right"}`}
          ref={(el) => (refs.current[startIdx + 1 + i] = el)}
          style={{ "--delay": `${i * 90}ms` }}
        >
          <div className="dm-step-num">{s.num}</div>
          <div className="dm-step-icon">{s.icon}</div>
          <div className="dm-step-body">
            <h5>{s.title}</h5>
            <p>{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ════════════════════════════════════
   STATS
════════════════════════════════════ */
const StatCard = ({ value, suffix, label, delay }) => {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(value, 2200, started);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); io.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <Col lg={3} md={6}>
      <div className="dm-stat-card dm-fade-up" ref={ref} style={{ "--delay": delay }}>
        <div className="dm-stat-num">
          {count}{suffix}
        </div>
        <div className="dm-stat-label">{label}</div>
      </div>
    </Col>
  );
};

const StatsSection = ({ refs, startIdx }) => (
  <div className="dm-section">
    <div className="dm-fade-up" ref={(el) => (refs.current[startIdx] = el)}>
      <p className="dm-label">✦ OUR IMPACT</p>
      <h2 className="dm-section-title">RESULTS THAT SPEAK</h2>
    </div>
    <Row className="g-3 mt-3">
      <StatCard value={500}  suffix="+"  label="Campaigns Launched"      delay="0ms"   />
      <StatCard value={10}   suffix="M+" label="Impressions Delivered"   delay="120ms" />
      <StatCard value={3}    suffix="X"  label="Average ROAS"            delay="240ms" />
      <StatCard value={98}   suffix="%"  label="Client Retention Rate"   delay="360ms" />
    </Row>
  </div>
);

/* ════════════════════════════════════
   PORTFOLIO
════════════════════════════════════ */
const projects = [
  { category: "SEO CAMPAIGN",      title: "E-COMMERCE BRAND — 3X ORGANIC TRAFFIC",    bg: "#0f1e2e" },
  { category: "SOCIAL MEDIA",      title: "SAAS BRAND — 50K FOLLOWERS IN 6 MONTHS",   bg: "#1a0a2e" },
  { category: "PPC ADVERTISING",   title: "RETAIL CLIENT — 5X ROAS ON META ADS",      bg: "#0a1e14" },
  { category: "EMAIL MARKETING",   title: "B2B CLIENT — 40% OPEN RATE AUTOMATION",    bg: "#1e160a" },
];

const PortfolioSection = ({ refs, startIdx }) => (
  <div className="dm-section">
    <div className="dm-fade-up" ref={(el) => (refs.current[startIdx] = el)}>
      <p className="dm-label">✦ SHOWCASING OUR IMPACT</p>
      <h2 className="dm-section-title">OUR PORTFOLIO SHOWCASE</h2>
    </div>
    <Row className="g-3 mt-3">
      {projects.map((p, i) => (
        <Col md={6} key={i}>
          <div
            className="dm-project-card dm-fade-up"
            ref={(el) => (refs.current[startIdx + 1 + i] = el)}
            style={{ "--delay": `${i * 120}ms`, background: p.bg }}
          >
            <div className="dm-project-visual">
              <FaChartLine className="dm-project-bg-icon" />
            </div>
            <div className="dm-project-label">
              <div className="dm-project-arrow">
                <FaArrowRight />
              </div>
              <div>
                <p className="dm-project-cat">{p.category}</p>
                <h5 className="dm-project-name">{p.title}</h5>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </div>
);

/* ════════════════════════════════════
   FAQ
════════════════════════════════════ */
const faqs = [
  {
    q: "How long does it take to see results from digital marketing?",
    a: "SEO typically takes 3–6 months to show significant results. PPC and social media campaigns can generate results within days of launch. We provide monthly reports so you always know where things stand.",
  },
  {
    q: "Which platforms do you run ads on?",
    a: "We run campaigns on Google Ads, Meta (Facebook & Instagram), LinkedIn, YouTube, and more — depending on where your target audience spends their time.",
  },
  {
    q: "Do you provide monthly reports?",
    a: "Yes. Every client receives a detailed monthly performance report with KPIs, campaign metrics, key insights and recommended next steps.",
  },
  {
    q: "Can you handle both SEO and paid ads together?",
    a: "Absolutely. We recommend an integrated approach — SEO builds long-term organic visibility while paid ads drive immediate traffic. Together they deliver the best ROI.",
  },
  {
    q: "Is there a minimum contract period?",
    a: "We offer flexible engagement models — monthly, quarterly, and annual retainers. Most clients see the best results with a 6-month commitment to allow strategies to fully mature.",
  },
];

const FAQSection = ({ refs, startIdx }) => {
  const [open, setOpen] = useState(null);
  return (
    <div className="dm-section">
      <div className="dm-fade-up" ref={(el) => (refs.current[startIdx] = el)}>
        <p className="dm-label">✦ FAQ</p>
        <h2 className="dm-section-title">COMMON QUESTIONS</h2>
      </div>
      <div className="dm-faq-list mt-4">
        {faqs.map((f, i) => (
          <div
            key={i}
            className={`dm-faq-item dm-fade-up ${open === i ? "dm-faq-open" : ""}`}
            ref={(el) => (refs.current[startIdx + 1 + i] = el)}
            style={{ "--delay": `${i * 90}ms` }}
          >
            <button className="dm-faq-q" onClick={() => setOpen(open === i ? null : i)}>
              <span>{f.q}</span>
              <FaChevronDown className="dm-faq-chevron" />
            </button>
            <div className="dm-faq-a">
              <p>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ════════════════════════════════════
   CTA STRIP
════════════════════════════════════ */
const CTAStrip = () => (
  <div className="dm-cta-strip">
    <Marquee />
    <Container>
      <Row className="align-items-center justify-content-between py-5">
        <Col lg={7}>
          <h2 className="dm-cta-title">GET IN TOUCH</h2>
          <p className="dm-cta-sub">
            Ready to grow your brand online? Let's build a marketing strategy
            that drives real, measurable results for your business.
          </p>
        </Col>
        <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
          <Link to="/contact" className="dm-cta-btn">
            START YOUR CAMPAIGN <FaArrowRight />
          </Link>
        </Col>
      </Row>
    </Container>
  </div>
);

/* ════════════════════════════════════
   MAIN PAGE
════════════════════════════════════ */
const DigitalMarketing = () => {
  const refs = useReveal();

  return (
    <div className="dm-page">
      <PageBanner />

      <Container className="dm-main-container">
        <Row className="g-4">
          {/* Sidebar */}
          <Col lg={4} md={12}>
            <Sidebar />
          </Col>

          {/* Main content */}
          <Col lg={8} md={12}>
            <Intro          refs={refs} idx={0} />
            <WhatWeOffer    refs={refs} startIdx={1} />
            <ToolsSection   refs={refs} startIdx={9} />
            <ProcessSection refs={refs} startIdx={21} />
            <StatsSection   refs={refs} startIdx={29} />
            <PortfolioSection refs={refs} startIdx={31} />
            <FAQSection     refs={refs} startIdx={37} />
          </Col>
        </Row>
      </Container>

      <CTAStrip />
    </div>
  );
};

export default DigitalMarketing;
