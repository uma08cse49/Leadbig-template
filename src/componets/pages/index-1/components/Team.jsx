import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "@/assets/img/icons/sub-logo2.svg";
import ele7 from "@/assets/img/elements/elements7.png";
import share from "@/assets/img/icons/share1.svg";
import team1 from "@/assets/img/all-images/team/team-img1.png";
import team2 from "@/assets/img/all-images/team/team-img2.png";
import team3 from "@/assets/img/all-images/team/team-img3.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
const teamMembers = [{
  id: 1,
  name: "Alex Robertson",
  role: "Finance Consultant",
  image: team1,
  facebook: "#",
  instagram: "#",
  linkedin: "#"
}, {
  id: 2,
  name: "Dean Henderson",
  role: "Finance Consultant",
  image: team2,
  facebook: "#",
  instagram: "#",
  linkedin: "#"
}, {
  id: 3,
  name: "Rioc Lewis",
  role: "Finance Consultant",
  image: team3,
  facebook: "#",
  instagram: "#",
  linkedin: "#"
}];
const Team = () => {
  return <div className="team1-section-area sp7">
      <Container>
        <Row>
          <Col lg={6} className="m-auto">
            <div className="team-header heading1 text-center space-margin60">
              <h5>
                <img src={logo} alt="logo" />
                meet our team
              </h5>
              <div className="space24"></div>
              <h2 className="text-anime-style-3">our experienced team</h2>
            </div>
          </Col>
        </Row>

        <Row>
          {teamMembers.map((member, index) => <Col lg={4} md={6} key={member.id} data-aos="zoom-in" data-aos-duration={900 + index * 100}>
              <div className="team-author-boxarea">
                <img src={ele7} alt="decoration" className="elements7 keyframe5" />
                <div className="img1">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="content-area">
                  <div className="content">
                    <Link to="/pages/team">{member.name}</Link>
                    <div className="space14"></div>
                    <p>{member.role}</p>
                  </div>
                  <div className="share">
                    <Link to="#">
                      <img src={share} alt="share icon" />
                    </Link>
                  </div>
                </div>
                <div className="list">
                  <ul>
                    {member.facebook && <li>
                        <Link to={member.facebook}>
                          <FaFacebookF />
                        </Link>
                      </li>}
                    {member.instagram && <li>
                        <Link to={member.instagram}>
                          <FaInstagram />
                        </Link>
                      </li>}
                    {member.linkedin && <li>
                        <Link to={member.linkedin} className="m-0">
                          <FaLinkedinIn />
                        </Link>
                      </li>}
                  </ul>
                </div>
              </div>
            </Col>)}
        </Row>
      </Container>
    </div>;
};
export default Team;