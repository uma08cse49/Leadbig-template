import bg2 from "@/assets/img/all-images/bg/bg2.png";
import team1 from "@/assets/img/all-images/team/team-img1.png";
import team2 from "@/assets/img/all-images/team/team-img2.png";
import team3 from "@/assets/img/all-images/team/team-img3.png";
import ele7 from "@/assets/img/elements/elements7.png";
import share from "@/assets/img/icons/share1.svg";
import logo2 from "@/assets/img/icons/sub-logo2.svg";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
const teamMembers = [{
  name: "Alex Robertson",
  role: "Finance Consultant",
  image: team1,
  aosDuration: 900,
  url: "/team"
}, {
  name: "Dean Henderson",
  role: "Finance Consultant",
  image: team2,
  aosDuration: 1000,
  url: "/team"
}, {
  name: "Rioc Lewis",
  role: "Finance Consultant",
  image: team3,
  aosDuration: 1100,
  url: "/team"
}];
const Team = () => {
  return <div className="team1-section-area sp6" style={{
    backgroundImage: `url(${bg2})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }}>
      <Container>
        <Row>
          <Col lg={6} className="m-auto">
            <div className="team-header heading1 text-center space-margin60">
              <h5>
                <img src={logo2} alt="logo" />
                meet our team
              </h5>
              <div className="space24" />
              <h2 className="text-anime-style-3">our experienced team</h2>
            </div>
          </Col>
        </Row>

        <Row>
          {teamMembers.map((member, index) => <Col key={index} lg={4} md={6} data-aos="zoom-in" data-aos-duration={member.aosDuration}>
              <div className="team-author-boxarea">
                <img src={ele7} alt="" className="elements7 keyframe5" />
                <div className="img1">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="content-area">
                  <div className="content">
                    <Link to={member.url}>{member.name}</Link>
                    <div className="space14" />
                    <p>{member.role}</p>
                  </div>
                  <div className="share">
                   <Link to="#">
                      <img src={share} alt="Share Icon" />
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

          <Col lg={12}>
            <div className="space50" />
            <div className="btn-area1 text-center">
              <Link to="about" className="vl-btn1" style={{
              overflow: "hidden"
            }}>
                Learn About Our Team
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Team;