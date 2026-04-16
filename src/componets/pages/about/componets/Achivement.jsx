import sublogo from "@/assets/img/icons/sub-logo2.svg";
import ele8 from "@/assets/img/elements/elements8.png";
import ele9 from "@/assets/img/elements/elements9.png";
import { useInView } from "react-intersection-observer";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";



// const Stats = () => {

//   const stats = [
//     { number: 50, suffix: "+", label: "Projects Completed" },
//     { number: 20, suffix: "+", label: "Happy Clients" },
//     { number: 3, suffix: "+", label: "Years Experience" },
//     { number: 100, suffix: "%", label: "Client Satisfaction" }
//   ];

//   return (
//     <div className="stats-section-area sp6">

//       {/* Elements */}
//       {/* <img src={ele8} alt="" className="elements8" />
//       <img src={ele9} alt="" className="elements9" /> */}

//       <Container>
//         <Row>
//           <Col lg={12}>
//             <div className="heading1 text-center">
//               <h5>
//                 <img src={sublogo} alt="" />
//                 OUR ACHIEVEMENTS
//               </h5>
//               <div className="space20"></div>
//               <h2>Our Impact in Numbers</h2>
//             </div>
//           </Col>
//         </Row>

//         <div className="space50"></div>

//         <Row>
//           {stats.map((item, index) => (
//             <Col lg={3} md={6} key={index}>
//               <div className="stat-box" data-aos="fade-up">
//                 <h2>
//                   <CountUp end={item.number} duration={2} />
//                   {item.suffix}
//                 </h2>
//                 <p>{item.label}</p>
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

const Stats = () => {
  const { ref, inView } = useInView({
    // triggerOnce: true, // runs only once
    threshold: 0.3     // trigger when 30% visible
  });

  const stats = [
    { number: 50, suffix: "+", label: "Projects Completed" },
    { number: 20, suffix: "+", label: "Happy Clients" },
    { number: 3, suffix: "+", label: "Years Experience" },
    { number: 100, suffix: "%", label: "Client Satisfaction" }
  ];

  return (
    <div className="stats-section-area sp6" ref={ref}>
      <Container>
        <Row>
          {stats.map((item, index) => (
            <Col lg={3} md={6} key={index}>
              <div className="stat-box">
                <h2>
                  {inView && (
                    <CountUp
                      start={0}
                      end={item.number}
                      duration={2}
                      delay={index * 0.2}
                    />
                  )}
                  {item.suffix}
                </h2>
                <p>{item.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Stats;