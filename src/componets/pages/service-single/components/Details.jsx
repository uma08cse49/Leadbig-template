import service10 from "@/assets/img/all-images/service/service-img10.png";
import service11 from "@/assets/img/all-images/service/service-img11.png";
import service12 from "@/assets/img/all-images/service/service-img12.png";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import check from "@/assets/img/icons/check1.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const Details = () => {
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
  return <Col lg={8}>
      <div className="service-details-area heading1">
        <div className="img1">
          <img src={service10} alt="" />
        </div>
        <div className="space32"></div>
        <h2>User Interface/experience design</h2>
        <div className="space16"></div>
        <p>
          In today’s digital landscape, first impressions are critical. Our
          UI/UX design approach is centered on creating seamless, engaging
          experiences that captivate users from the moment they land on your
          site. By focusing on intuitive navigation, appealing visuals.
        </p>
        <div className="space10"></div>
        <Row>
          <Col lg={4} md={6}>
            <div className="list-area">
              <ul>
                <li>
                  <img src={check} alt="" />
                  Enhanced User Experience
                </li>
                <li>
                  <img src={check} alt="" />
                  Higher Conversion Rates
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="list-area">
              <ul>
                <li>
                  <img src={check} alt="" />
                  Improved Brand Loyalty
                </li>
                <li>
                  <img src={check} alt="" />
                  Increased Engagement
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="list-area">
              <ul>
                <li>
                  <img src={check} alt="" />
                  Better Performance
                </li>
                <li>
                  <img src={check} alt="" />
                  Development Costs
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className="space48"></div>
        <div className="images-area">
          <Row>
            <Col lg={6} md={6}>
              <div className="img1">
                <img src={service11} alt="" />
              </div>
            </Col>

            <Col lg={6} md={6}>
              <div className="space30 d-md-block d-none"></div>
              <div className="img1">
                <img src={service12} alt="" />
              </div>
            </Col>
          </Row>
        </div>
        <div className="space32"></div>
        <h3>What We Offer in UI/UX Design?</h3>
        <div className="space20"></div>
        <p>
          nvesting in exceptional UI/UX design is key to creating a digital
          experience that not only looks beautiful but functions effortlessly.
          At every stage, our approach is user-centered, which means we
          prioritize intuitive navigation, responsive design, clear.
        </p>
        <div className="space20"></div>
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
                  <CircularProgressbar value={progressValues[0]} styles={buildStyles({
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
                  <CircularProgressbar value={progressValues[0]} styles={buildStyles({
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
      </div>
    </Col>;
};
export default Details;