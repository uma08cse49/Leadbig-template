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

const OurProcess = () => {
  const steps = [
    { number: "01", title: "Requirement", desc: "Understanding your needs" },
    { number: "02", title: "Planning", desc: "Creating roadmap" },
    { number: "03", title: "Development", desc: "Building solution" },
    { number: "04", title: "Testing", desc: "Ensuring quality" },
    { number: "05", title: "Launch", desc: "Deploy & support" }
  ];

  return (
    <div className="process-section-area sp6">

      {/* Elements */}
      {/* <img src={ele8} alt="" className="elements8" />
      <img src={ele9} alt="" className="elements9" /> */}

      <Container>
        <div className="heading1 text-center">
          <h5>
            <img src={sublogo} alt="" />
            OUR PROCESS
          </h5>
          <div className="space20"></div>
          <h2>How We Work</h2>
        </div>

        <div className="space50"></div>
      </Container>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-content">
          {[...steps, ...steps].map((step, index) => (
            <div className="process-card" key={index}>
              <div className="circle">{step.number}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default OurProcess;