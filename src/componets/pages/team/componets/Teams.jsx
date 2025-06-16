import share from "@//assets/img/icons/share1.svg";
import team1 from "@/assets/img/all-images/team/team-img1.png";
import team10 from "@/assets/img/all-images/team/team-img10.png";
import team11 from "@/assets/img/all-images/team/team-img11.png";
import team12 from "@/assets/img/all-images/team/team-img12.png";
import team13 from "@/assets/img/all-images/team/team-img13.png";
import team2 from "@/assets/img/all-images/team/team-img2.png";
import team3 from "@/assets/img/all-images/team/team-img3.png";
import team8 from "@/assets/img/all-images/team/team-img8.png";
import team9 from "@/assets/img/all-images/team/team-img9.png";
import ele7 from "@/assets/img/elements/elements7.png";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
const Teams = () => {
  const [progressValues, setProgressValues] = useState([0, 0]);
  const targetValues = [96, 92];
  useEffect(() => {
    const duration = 1500;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setProgressValues([Math.floor(progress * targetValues[0]), Math.floor(progress * targetValues[1])]);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  }, []);
  const teamMembers = [{
    id: 1,
    name: "Alex Robertson",
    role: "Finance Consultant",
    image: team1
  }, {
    id: 2,
    name: "Dean Henderson",
    role: "Finance Consultant",
    image: team2
  }, {
    id: 3,
    name: "Rioc Lewis",
    role: "Finance Consultant",
    image: team3
  }, {
    id: 4,
    name: "Alex Robertson",
    role: "Finance Consultant",
    image: team8
  }, {
    id: 5,
    name: "Dean Henderson",
    role: "Finance Consultant",
    image: team9
  }, {
    id: 6,
    name: "Rioc Lewis",
    role: "Finance Consultant",
    image: team10
  }, {
    id: 7,
    name: "Alex Robertson",
    role: "Finance Consultant",
    image: team11
  }, {
    id: 8,
    name: "Dean Henderson",
    role: "Finance Consultant",
    image: team12
  }, {
    id: 9,
    name: "Rioc Lewis",
    role: "Finance Consultant",
    image: team13
  }];
  return <div className="team1-section-area sp7">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="team-header heading1 space-margin60">
              <div className="heading1">
                <h2 className="text-anime-style-3">Web Design Experts</h2>
              </div>
            </div>
          </Col>

          <Col lg={6} className="space-margin60">
            <Row data-aos="fade-left" data-aos-duration="900">
              <Col lg={6} md={6} data-aos="zoom-in" data-aos-duration="800">
                <div className="progresbar">
                  <div className="progressbar">
                    <div className="circle" data-percent="96">
                      <CircularProgressbar value={progressValues[0]} styles={buildStyles({
                      pathColor: "#CEF12B"
                    })} />
                      <canvas width="80" height="80"></canvas>
                      <div className="count">96%</div>
                    </div>
                  </div>
                  <div className="content-area">
                    <h4>Satisfaction Rate</h4>
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} data-aos="zoom-in" data-aos-duration="900">
                <div className="space28 d-md-none d-block"></div>
                <div className="progresbar">
                  <div className="progressbar">
                    <div className="circle" data-percent={92}>
                      <CircularProgressbar value={progressValues[1]} styles={buildStyles({
                      pathColor: "#CEF12B"
                    })} />
                      <canvas width="80" height="80"></canvas>
                      <div className="count">92%</div>
                    </div>
                  </div>
                  <div className="content-area">
                    <h4>Retention Rate</h4>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          {teamMembers.map((member, index) => <Col lg={4} md={6} key={member.id || index}>
              <div className="team-author-boxarea">
                <img src={ele7} alt="" className="elements7 keyframe5" />
                <div className="img1">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="content-area">
                  <div className="content">
                    <Link to="/team">{member.name}</Link>
                    <div className="space14"></div>
                    <p>{member.role}</p>
                  </div>
                  <div className="share">
                    <Link to="#">
                      <img src={share} alt="share" width={20} height={20} />
                    </Link>
                  </div>
                </div>
                <div className="list">
                  <ul>
                    <li>
                      <Link to="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="m-0">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>)}
        </Row>
      </Container>
      <Pagination />
    </div>;
};
export default Teams;