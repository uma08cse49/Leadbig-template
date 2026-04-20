// import sublogo from "@/assets/img/icons/sub-logo2.svg";
// import ele8 from "@/assets/img/elements/elements8.png";
// import ele9 from "@/assets/img/elements/elements9.png";
// import { Container, Row, Col } from "react-bootstrap";


// const WhyChooseUs = () => {
//   const features = [
//     {
//       title: "Experienced Team",
//       desc: "Skilled developers with strong technical expertise."
//     },
//     {
//       title: "Scalable Solutions",
//       desc: "We build systems that grow with your business."
//     },
//     {
//       title: "On-Time Delivery",
//       desc: "We ensure projects are delivered within deadlines."
//     },
//     {
//       title: "Secure Systems",
//       desc: "Security is our priority in every solution."
//     },
//     {
//       title: "Modern Technologies",
//       desc: "We use the latest tools and frameworks."
//     },
//     {
//       title: "Client-Focused",
//       desc: "We prioritize your goals and business needs."
//     }
//   ];

//   const handleMouseMove = (e) => {
//   const card = e.currentTarget;
//   const rect = card.getBoundingClientRect();

//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   const centerX = rect.width / 2;
//   const centerY = rect.height / 2;

//   const rotateX = -(y - centerY) / 10;
//   const rotateY = (x - centerX) / 10;

//   card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
// };

// const handleMouseLeave = (e) => {
//   const card = e.currentTarget;
//   card.style.transform =
//     "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
// };

//   return (
//     <div className="whychoose-section-area sp6">
      
//       {/* Elements (matching your template) */}
//       {/* <img src={ele8} alt="" className="elements8" />
//       <img src={ele9} alt="" className="elements9" /> */}

//       <Container>
//         <Row>
//           <Col lg={12}>
//             <div className="heading1 text-center">
//               <h5>
//                 <img src={sublogo} alt="" />
//                 WHY CHOOSE US
//               </h5>
//               <div className="space20"></div>
//               <h2>Why Choose Us</h2>
//             </div>
//           </Col>
//         </Row>

//         <div className="space50"></div>

//         <Row>
//           {features.map((item, index) => (
//             // <div
//             //   className="why-card"
//             //   data-aos="fade-up"
//             //   data-aos-delay={index * 100}
//             // >
//             <Col lg={4} md={6} key={index}>
//               <div className="choose-box" data-aos="fade-up">

//                 <div
//                   className="why-card"
//                   onMouseMove={(e) => handleMouseMove(e)}
//                   onMouseLeave={(e) => handleMouseLeave(e)}
//                 ></div>
//                 <div className="icon-box">
//                   <i className="bi bi-star"></i>
//                 </div>
//                 <h4>{item.title}</h4>
//                 <p>{item.desc}</p>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default WhyChooseUs;




// ==================================================================================================

import { useEffect, useRef } from "react";
import sublogo from "@/assets/img/icons/sub-logo2.svg";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaUsers,
  FaChartLine,
  FaRegClock,
  FaShieldAlt,
  FaMicrochip,
  FaHandshake,
} from "react-icons/fa";
import "./WhyChooseUs.css";

const useAnimateOnScroll = (refs) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("wcu-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const WhyChooseUs = () => {
  const cardRefs = useRef([]);
  useAnimateOnScroll(cardRefs);

  const features = [
    { icon: <FaUsers />,      title: "Experienced Team",    desc: "Skilled developers with strong technical expertise." },
    { icon: <FaChartLine />,  title: "Scalable Solutions",  desc: "We build systems that grow with your business." },
    { icon: <FaRegClock />,   title: "On-Time Delivery",    desc: "We ensure projects are delivered within deadlines." },
    { icon: <FaShieldAlt />,  title: "Secure Systems",      desc: "Security is our priority in every solution." },
    { icon: <FaMicrochip />,  title: "Modern Technologies", desc: "We use the latest tools and frameworks." },
    { icon: <FaHandshake />,  title: "Client-Focused",      desc: "We prioritize your goals and business needs." },
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const rotateX = -((e.clientY - rect.top  - rect.height / 2) / 12);
    const rotateY =  (e.clientX - rect.left  - rect.width  / 2) / 12;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.03)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
  };

  return (
    <div className="whychoose-section-area sp6 wcu-section">
      {/* Dot grid pattern */}
      <div className="wcu-bg-pattern" />

      <Container className="position-relative">
        {/* Heading */}
        <Row>
          <Col lg={12}>
            <div className="heading1 text-center wcu-heading">
              <h5>
                <img src={sublogo} alt="" />
                WHY CHOOSE US
              </h5>
              <div className="space20" />
              <h2>Why Choose Us</h2>
            </div>
          </Col>
        </Row>

        <div className="space50" />

        {/* Cards */}
        <Row className="g-4">
          {features.map((item, index) => (
            <Col lg={4} md={6} key={index}>
              <div
                className="wcu-card"
                ref={(el) => (cardRefs.current[index] = el)}
                style={{ "--delay": `${index * 130}ms` }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Top accent bar */}
                <div className="wcu-card-accent" />

                {/* Icon */}
                <div className="wcu-icon-wrap">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;