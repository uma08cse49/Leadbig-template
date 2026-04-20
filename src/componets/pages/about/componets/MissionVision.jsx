// import sublogo from "@/assets/img/icons/sub-logo2.svg";
// import { Container, Row, Col } from "react-bootstrap";
// import ele8 from "@/assets/img/elements/elements8.png";
// import ele9 from "@/assets/img/elements/elements9.png";

// const MissionVision = () => {
//   return (
//     <div className="mission-section-area sp6">
//       <Container>
//         <Row>
//           <Col lg={12}>
//             <div className="heading1 text-center">
//               <h5>
//                 <img src={sublogo} alt="" />
//                 OUR PURPOSE
//               </h5>
//               <div className="space20"></div>
//               <h2>Our Mission & Vision</h2>
//             </div>
//           </Col>
//         </Row>

//         <div className="space50"></div>

//         <Row>
//           {/* Mission */}
//           <Col lg={6} md={6}>
//             <div className="mission-box" data-aos="fade-up" data-aos-duration="800">
//               <h3>🎯 Our Mission</h3>
//               <p>
//                 Our mission is to deliver high-quality, scalable, and innovative 
//                 digital solutions that help businesses grow and succeed in a 
//                 rapidly evolving digital world. We aim to provide reliable 
//                 technology services with a strong focus on performance, security, 
//                 and user experience.
//               </p>
//             </div>
//           </Col>

//           {/* Vision */}
//           <Col lg={6} md={6}>
//             <div className="vision-box" data-aos="fade-up" data-aos-duration="1000">
//               <h3>🚀 Our Vision</h3>
//               <p>
//                 Our vision is to become a trusted global technology partner, 
//                 recognized for excellence, innovation, and customer satisfaction. 
//                 We strive to continuously evolve and create impactful digital 
//                 experiences that drive long-term success for our clients.
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default MissionVision;

// ===============================================================================================

import { useEffect, useRef } from "react";
import sublogo from "@/assets/img/icons/sub-logo2.svg";
import { Container, Row, Col } from "react-bootstrap";
import { FaBullseye, FaRocket } from "react-icons/fa";
import "./MissionVision.css";

const useSlideIn = (leftRefs, rightRefs) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mv-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    [...leftRefs.current, ...rightRefs.current].forEach(
      (el) => el && observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);
};

const MissionVision = () => {
  const leftRefs  = useRef([]);
  const rightRefs = useRef([]);
  useSlideIn(leftRefs, rightRefs);

  return (
    <div className="mission-section-area sp6 mv-section">
      <div className="mv-bg-pattern" />

      <Container className="position-relative">
        {/* Heading — slides in from left */}
        <Row>
          <Col lg={12}>
            <div
              className="heading1 text-center mv-slide-left"
              ref={(el) => (leftRefs.current[0] = el)}
            >
              <h5>
                <img src={sublogo} alt="" />
                OUR PURPOSE
              </h5>
              <div className="space20" />
              <h2>Our Mission & Vision</h2>
            </div>
          </Col>
        </Row>

        <div className="space50" />

        <Row className="align-items-stretch g-4">
          {/* Mission — slides in from left */}
          <Col lg={6} md={6}>
            <div
              className="mv-card mv-slide-left"
              ref={(el) => (leftRefs.current[1] = el)}
            >
              <div className="mv-card-accent" />
              <div className="mv-icon-wrap mission-icon">
                <FaBullseye />
              </div>
              <h3>Our Mission</h3>
              <p>
                Our mission is to deliver high-quality, scalable, and innovative
                digital solutions that help businesses grow and succeed in a
                rapidly evolving digital world. We aim to provide reliable
                technology services with a strong focus on performance, security,
                and user experience.
              </p>
              <ul className="mv-list">
                <li>High-quality digital solutions</li>
                <li>Performance & security first</li>
                <li>User-centered experiences</li>
              </ul>
            </div>
          </Col>

          {/* Vision — slides in from right */}
          <Col lg={6} md={6}>
            <div
              className="mv-card mv-slide-right"
              ref={(el) => (rightRefs.current[0] = el)}
            >
              <div className="mv-card-accent vision-accent" />
              <div className="mv-icon-wrap vision-icon">
                <FaRocket />
              </div>
              <h3>Our Vision</h3>
              <p>
                Our vision is to become a trusted global technology partner,
                recognized for excellence, innovation, and customer satisfaction.
                We strive to continuously evolve and create impactful digital
                experiences that drive long-term success for our clients.
              </p>
              <ul className="mv-list">
                <li>Trusted global tech partner</li>
                <li>Innovation-led excellence</li>
                <li>Long-term client success</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MissionVision;