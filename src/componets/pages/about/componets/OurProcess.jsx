// import sublogo from "@/assets/img/icons/sub-logo2.svg";
// import ele8 from "@/assets/img/elements/elements8.png";
// import ele9 from "@/assets/img/elements/elements9.png";
// import { Container, Row, Col } from "react-bootstrap";

// const OurProcess = () => {
//   const steps = [
//     {
//       number: "01",
//       title: "Requirement Analysis",
//       desc: "We understand your business needs and project goals."
//     },
//     {
//       number: "02",
//       title: "Planning & Strategy",
//       desc: "We create a clear roadmap and technical strategy."
//     },
//     {
//       number: "03",
//       title: "Development",
//       desc: "Our team builds scalable and efficient solutions."
//     },
//     {
//       number: "04",
//       title: "Testing",
//       desc: "We ensure quality through rigorous testing."
//     },
//     {
//       number: "05",
//       title: "Deployment",
//       desc: "We launch the product and provide ongoing support."
//     }
//   ];

//   return (
//     <div className="process-section-area sp6">
      
//       {/* Elements */}
//       {/* <img src={ele8} alt="" className="elements8" />
//       <img src={ele9} alt="" className="elements9" /> */}

//       <Container>
//         <Row>
//           <Col lg={12}>
//             <div className="heading1 text-center">
//               <h5>
//                 <img src={sublogo} alt="" />
//                 OUR PROCESS
//               </h5>
//               <div className="space20"></div>
//               <h2>How We Work</h2>
//             </div>
//           </Col>
//         </Row>

//         <div className="space50"></div>

//         <Row>
//           {steps.map((step, index) => (
//             <Col lg={2} md={4} sm={6} key={index}>
//               <div className="process-box" data-aos="fade-up">
//                 <div className="step-number">{step.number}</div>
//                 <h4>{step.title}</h4>
//                 <p>{step.desc}</p>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default OurProcess;


import sublogo from "@/assets/img/icons/sub-logo2.svg";
import ele8 from "@/assets/img/elements/elements8.png";
import ele9 from "@/assets/img/elements/elements9.png";
import { Container } from "react-bootstrap";
// import { FaUsers } from "react-icons/fa";
import { FaLightbulb, FaShieldAlt, FaUsers, FaHandshake, FaRocket, FaLeaf, FaAward, FaCheckCircle } from "react-icons/fa";



const OurProcess = () => {
//   const steps = [
//     { number: "01", title: "Requirement", desc: "Understanding your needs" },
//     { number: "02", title: "Planning", desc: "Creating roadmap" },
//     { number: "03", title: "Development", desc: "Building solution" },
//     { number: "04", title: "Testing", desc: "Ensuring quality" },
//     { number: "05", title: "Launch", desc: "Deploy & support" }
//   ];

const steps = [
  {
    title: "Creativity",
    icon: <FaLightbulb />,
    desc: "We embrace creativity to craft unique and impactful digital experiences that help our clients stand out in a competitive landscape.",
    points: [
      "Design-driven thinking",
      "Creative problem solving",
      "User-focused experiences"
    ]
  },
  {
    title: "Integrity",
     icon: <FaShieldAlt />,
    desc: "We act with honesty and transparency in everything we do, building trust through ethical practices and accountability.",
    points: [
      "Transparent communication",
      "Ethical decision-making",
      "Accountability at every step"
    ]
  },
  {
    title: "Sustainability",
    icon: <FaLeaf />,
    desc: "We focus on building long-lasting solutions...",
    points: [
      "Scalable architecture",
      "Efficient systems",
      "Eco-conscious approach"
    ]
  },
  {
    title: "Excellence",
    icon: <FaAward />,
    desc: "We deliver high-quality solutions with precision and attention to detail.",
    points: [
      "High performance code",
      "Quality assurance",
      "Best practices"
    ]
  },
  {
    title: "Community",
    icon: <FaUsers />,
    desc: "We believe in creating meaningful connections and contributing positively to the community we serve.",
    points: [
      "Community engagement",
      "Knowledge sharing",
      "Positive social impact"
    ]
  },
   {
    title: "Innovation",
    icon: <FaRocket />,
    desc: "We leverage modern technologies to continuously improve and build forward-thinking solutions.",
    points: [
      "Adopt latest technologies",
      "Continuous improvement",
      "Creative problem solving"
    ]
  },
  {
    title: "Collaboration",
    icon: <FaUsers />,
    desc: "We co-create with clients and partners; diverse expertise yields outcomes no team can achieve alone.",
    points: [
      "Async-first communication",
      "Cross-functional squads",
      "Shared metrics & post-mortems"
    ]
  },
  {
    title: "Customer Success",
    icon: <FaHandshake />,
    desc: "Our clients’ success is our priority, and we are committed to delivering solutions that drive real and measurable results.",
    points: [
      "Client-first approach",
      "Result-driven solutions",
      "Long-term partnerships"
    ]
  }
];
//   return (
//     <div className="process-section-area sp6">

//       {/* Elements */}
//       {/* <img src={ele8} alt="" className="elements8" />            
//       <img src={ele9} alt="" className="elements9" /> */}

//       <Container>
//         <div className="heading1 text-center">
//           <h5>
//             <img src={sublogo} alt="" />
//             OUR VALUES
//           </h5>
//           <div className="space20"></div>
//           <h5>Principles that power product, people, and partnerships</h5>
//           <p>At Leadbig, our values are operating instructions. They shape how we design, build, and support solutions for clients, partners, and the communities we serve.</p>
//         </div>

//         <div className="space50"></div>
//       </Container>

//       {/* Marquee */}
//       <div className="marquee">
//         <div className="marquee-content">
//           {[...steps, ...steps].map((step, index) => (
//             <div className="process-card" key={index}>
//               <div className="circle">{step.number}</div>
//               <h4>{step.title}</h4>
//               <p>{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );

return (
    <div className="process-section-area sp6">
      <Container>
        <div className="heading1 text-center">
          <h5>
            <img src={sublogo} alt="" />
            OUR VALUES
          </h5>
          <div className="space20"></div>
          <h5>Principles that power product, people, and partnerships</h5>
          <p>At Leadbig, our values are operating instructions. They shape how we design, build, and support solutions for clients, partners, and the communities we serve.</p>
        </div>

        <div className="space50"></div>

        {/* Scroll Section */}
        {/* <div className="process-scroll">
          <div className="process-track">
            {[...steps, ...steps].map((item, index) => (
              <div className="process-card" key={index}>
                <span className="step-label">Step {index % 6 + 1}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div> */}

        <div className="values-scroll">

          <div className="values-track">
            {[...steps, ...steps].map((item, index) => (
              <div className="value-card" key={index}>
                
                {/* Header */}
                <div className="card-header">
                  <div className="icon-box">
                    {/* <i className="bi bi-people"></i> */}
                    {item.icon}
                  </div>
                  <h4>{item.title}</h4>
                </div>

                {/* Description */}
                <p className="card-desc">{item.desc}</p>

                {/* Bullet Points */}
                <ul className="card-list">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
          ))}
        </div>
      </div>
    </Container>
  </div>
  );

};

export default OurProcess;