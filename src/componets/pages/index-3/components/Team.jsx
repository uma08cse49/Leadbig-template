import React, { useEffect, useState } from "react";
import bg4 from "@/assets/img/all-images/bg/bg4.png";
import ele19 from "@/assets/img/elements/elements19.png";
import ele16 from "@/assets/img/elements/elements16.png";
import logo from "@/assets/img/icons/sub-logo2.svg";
import team4 from "@/assets/img/all-images/team/team-img4.png";
import team5 from "@/assets/img/all-images/team/team-img5.png";
import team6 from "@/assets/img/all-images/team/team-img6.png";
import team7 from "@/assets/img/all-images/team/team-img7.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const Team = () => {
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
    image: team4,
    name: "John Anderson",
    role: "UI/UX Designer"
  }, {
    image: team5,
    name: "Sarah Miller",
    role: "SEO Marketer"
  }, {
    image: team6,
    name: "Judith Rodriguez",
    role: "CEO-Founder Renev"
  }, {
    image: team7,
    name: "Autumn Phillips",
    role: "WP Developer"
  }];
  const socialLinks = [{
    icon: <FaFacebookF />,
    url: "#"
  }, {
    icon: <FaLinkedinIn />,
    url: "#"
  }, {
    icon: <FaInstagram />,
    url: "#"
  }, {
    icon: <FaYoutube />,
    url: "#"
  }];
  return <div className="team3-section-area sp2" style={{
    backgroundImage: `url(${bg4})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }}>
      <img src={ele19} alt="" className="elements15" />
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="heading1">
              <h5>
                <img src={logo} alt="Logo" />
                Designers, Developers, and Innovators
              </h5>
              <div className="space20"></div>
              <h2 className="text-anime-style-3">Web Design Experts</h2>
            </div>
          </Col>
          <Col lg={1}></Col>
          <Col lg={6}>
            <div className="space30 d-lg-none d-block"></div>
            <Row data-aos="fade-left" data-aos-duration={900}>
              <Col lg={6} md={6} data-aos="zoom-in" data-aos-duration={800}>
                <div className="progresbar">
                  <div className="progressbar">
                    <div className="circle" data-percent={96}>
                      <CircularProgressbar value={progressValues[0]} styles={buildStyles({
                      pathColor: "#CEF12B"
                    })} />
                      <canvas width={80} height={80}></canvas>
                      <div className="count">96%</div>
                    </div>
                  </div>
                  <div className="content-area">
                    <h4>Satisfaction Rate</h4>
                  </div>
                </div>
              </Col>

              <Col lg={6} md={6} data-aos="zoom-in" data-aos-duration={900}>
                <div className="space28 d-md-none d-block"></div>
                <div className="progresbar">
                  <div className="progressbar">
                    <div className="circle" data-percent={92}>
                      <CircularProgressbar value={progressValues[1]} styles={buildStyles({
                      pathColor: "#CEF12B"
                    })} />
                      <canvas width={80} height={80}></canvas>
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

        <div className="space60 d-lg-block d-none"></div>
        <div className="space30 d-lg-none d-block"></div>
        <Row>
          {teamMembers.map((member, index) => <Col lg={3} md={6} key={index} data-aos="zoom-in" data-aos-duration={`${800 + index * 100}`}>
              <div className="team2-boxarea">
                <div className="img1">
                  <img src={ele16} alt="" className="elements16" />
                  <img src={member.image} alt={member.name} />
                </div>
                <ul>
                  {socialLinks.map((link, idx) => <li key={idx}>
                      <Link to={link.url} style={{
                  marginLeft: "3px"
                }}>
                        {link.icon}
                      </Link>
                    </li>)}
                </ul>
                <div className="space24"></div>
                <div className="content-area">
                  <Link to="/team">{member.name}</Link>
                  <div className="space12"></div>
                  <p>{member.role}</p>
                </div>
              </div>
            </Col>)}
        </Row>
      </Container>
    </div>;
};
export default Team;