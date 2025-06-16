import { Col, Container, Row } from "react-bootstrap";
import logo4 from "@/assets/img/icons/sub-logo4.svg";
import ele7 from "@/assets/img/elements/elements7.png";
import team1 from "@/assets/img/all-images/team/team-img1.png";
import team2 from "@/assets/img/all-images/team/team-img2.png";
import team3 from "@/assets/img/all-images/team/team-img3.png";
import share from "@/assets/img/icons/share1.svg";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";
const teamMembers = [{
  name: "Alex Robertson",
  role: "Finance Consultant",
  image: team1,
  url: "/team"
}, {
  name: "Dean Henderson",
  role: "Finance Consultant",
  image: team2,
  url: "/team"
}, {
  name: "Rioc Lewis",
  role: "Finance Consultant",
  image: team3,
  url: "/team"
}];
const Team = () => {
  return <div className="team4-section-area sp7">
      <Container>
        <Row>
          <Col lg={6} className="m-auto">
            <div className="team-header heading3 text-center space-margin60">
              <h5>
                <img src={logo4} alt="Logo" />
                meet our team
              </h5>
              <div className="space24"></div>
              <h2 className="text-anime-style-3">our experienced team</h2>
            </div>
          </Col>
        </Row>

        <Row>
          {teamMembers.map((member, index) => <Col lg={4} md={6} key={index} data-aos="zoom-in" data-aos-duration={900 + index * 100}>
              <div className="team-author-boxarea">
                <img src={ele7} alt="" className="elements7 keyframe5" />
                <div className="img1">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="content-area">
                  <div className="content">
                    <Link to={member.url}>{member.name}</Link>
                    <div className="space14"></div>
                    <p>{member.role}</p>
                  </div>
                  <div className="share">
                    <Link to="#">
                      <img src={share} alt="Share icon" />
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
                        <FaLinkedin />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>)}
        </Row>
      </Container>
    </div>;
};
export default Team;