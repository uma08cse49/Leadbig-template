import team1 from "@/assets/img/all-images/team/team-img1.png";
import team2 from "@/assets/img/all-images/team/team-img2.png";
import team3 from "@/assets/img/all-images/team/team-img3.png";
import logo3 from "@/assets/img/icons/sub-logo3.svg";
import ele7 from "@/assets/img/elements/elements7.png";
import share from "@//assets/img/icons/share1.svg";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
const Team = () => {
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
  }];
  return <div className="team2-section-area sp2">
      <Container>
        <Row>
          <Col lg={12} className="m-auto">
            <div className="team-header space-margin60">
              <div className="heading2">
                <h5>
                  <img src={logo3} alt="" />
                  Our Team
                </h5>
                <div className="space24"></div>
                <h2 className="text-anime-style-3">Our Experienced Team</h2>
              </div>
              <div className="btn-area1">
                <Link to="/team" className="vl-btn2">
                  View Our team
                </Link>
              </div>
            </div>
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
    </div>;
};
export default Team;