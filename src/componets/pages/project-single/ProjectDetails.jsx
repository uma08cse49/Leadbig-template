import project6 from "@/assets/img/all-images/project/project-img6.png";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ProjectDetails = () => {
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
  return <>
      <div className="project-details-area heading1">
        <div className="img1">
          <img src={project6} alt="" />
        </div>
        <div className="space32"></div>
        <h2>Reelup Responsive Website Design</h2>
        <div className="space16"></div>
        <p>
          A well-designed user experience is the cornerstone of successful
          digital products, the and we believe that every interaction on your
          site should be purposeful and engaging. Our UI/UX design services
          focus on blending aesthetics with functionality, ensuring.
        </p>
        <div className="space12"></div>
        <Row>
          <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="800">
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

          <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="900">
            <div className="space28 d-md-none d-block"></div>
            <div className="progresbar">
              <div className="progressbar">
                <div className="circle" data-percent="92">
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

          <Col lg={4} md={6} data-aos="zoom-in" data-aos-duration="900">
            <div className="space28 d-md-none d-block"></div>
            <div className="progresbar">
              <div className="progressbar">
                <div className="circle" data-percent="92">
                  <CircularProgressbar value={progressValues[1]} styles={buildStyles({
                  pathColor: "#CEF12B"
                })} />
                  <canvas width="80" height="80"></canvas>
                  <div className="count">92%</div>
                </div>
              </div>
              <div className="content-area">
                <h4>Website Speed</h4>
              </div>
            </div>
          </Col>
        </Row>
        <div className="space32"></div>
        <div className="btn-area1">
          <Link to="/project-single" className="vl-btn1" style={{
          overflow: "hidden"
        }}>
            live preview website
          </Link>
        </div>
        <div className="space60"></div>
        <h3>Reelup Project Requirement:</h3>
        <div className="space20"></div>
        <p>
          Effective UI/UX design goes beyond visuals; it’s about creating an
          meaningful journey for every user who interact with your brand. Our
          approach combines strategic insight
        </p>
        <div className="space12"></div>
        <ul className="list-area">
          <li>
            <Link to="#">
              <span>
                <FaCheck />
              </span>
              User Interface Design
            </Link>
          </li>
          <li>
            <Link to="#">
              <span>
                <FaCheck />
              </span>
              Backend Development
            </Link>
          </li>
          <li>
            <Link to="#">
              <span>
                <FaCheck />
              </span>
              Responsive Design
            </Link>
          </li>
        </ul>
        <ul className="list-area">
          <li>
            <Link to="#">
              <span>
                <FaCheck />
              </span>
              Frontend Development
            </Link>
          </li>
          <li>
            <Link to="#">
              <span>
                <FaCheck />
              </span>
              Database Integration
            </Link>
          </li>
          <li>
            <Link to="#">
              <span>
                <FaCheck />
              </span>
              Requirement Analysis
            </Link>
          </li>
        </ul>
      </div>
    </>;
};
export default ProjectDetails;