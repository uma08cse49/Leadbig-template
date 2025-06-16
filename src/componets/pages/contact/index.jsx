import contact1 from "@/assets/img/all-images/contact/contact-img1.png";
import contact2 from "@/assets/img/all-images/contact/contact-img2.png";
import ele15 from "@/assets/img/elements/elements15.png";
import ele21 from "@/assets/img/elements/elements21.png";
import brand from "@/assets/img/elements/elements5.png";
import clock from "@/assets/img/icons/clock2.svg";
import email from "@/assets/img/icons/mail2.svg";
import phone from "@/assets/img/icons/phn2.svg";
import sublogo from "@/assets/img/icons/sub-logo2.svg";
import { Col, Container, Row } from "react-bootstrap";
import Hero from "../../Hero";
import { Link } from "react-router-dom";
const brandItems = ["SEO marketing", "Website Design", "Motion graphic", "Media Entertainment"];
const repeatedBrandItems = [...brandItems, ...brandItems, ...brandItems, ...brandItems];
const page = () => {
  return <>
      <Hero title="Contact Us" link="/contact" label="contact us" />
      <div className="slider1-section-area">
        <div className="marquee-wrap">
          <div className="marquee-text">
            {repeatedBrandItems.map((item, index) => <div className="brand-single-box" key={index}>
                <h3>
                  {item} <img src={brand} alt={item} />
                </h3>
              </div>)}
          </div>
        </div>
      </div>
      <div className="contact-inner-area sp6">
        <img src={ele15} alt="" className="elements15" />
        <Container>
          <Row>
            <Col lg={10} className="m-auto">
              <div className="heading1 text-center">
                <h5>
                  <span>
                    <img src={sublogo} alt="" />
                  </span>
                  Have Questions? Reach Out!
                </h5>
                <div className="space20"></div>
                <h2>Connect with Renev Today</h2>
              </div>

              <div className="space40"></div>

              <Row>
                <Col lg={4} md={6}>
                  <div className="widget-contactbox">
                    <div className="icons">
                      <img src={email} alt="" />
                    </div>
                    <div className="content">
                      <h4>Our Email</h4>
                      <Link to="mailto:eitechsolut@gmail.com">
                        renevweb@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="space30 d-lg-none d-block"></div>
                </Col>

                <Col lg={4} md={6}>
                  <div className="widget-contactbox">
                    <div className="icons">
                      <img src={phone} alt="" />
                    </div>
                    <div className="content">
                      <h4>Phone</h4>
                      <Link to="tel:+11234567890">+1 123 456 7890</Link>
                    </div>
                  </div>
                  <div className="space30 d-lg-none d-block"></div>
                </Col>

                <Col lg={4} md={6}>
                  <div className="widget-contactbox">
                    <div className="icons">
                      <img src={clock} alt="" />
                    </div>
                    <div className="content">
                      <h4>Schedule</h4>
                      <Link to="mailto:eitechsolut@gmail.com">
                        Sunday-Fri: 9 AM – 6 PM
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={12}>
              <div className="space60"></div>
              <Row>
                <Col lg={6}>
                  <div className="contact-images">
                    <img src={ele21} alt="" className="elements21" />
                    <div className="img1">
                      <img src={contact1} alt="" />
                    </div>
                    <div className="img2">
                      <img src={contact2} alt="" />
                    </div>
                  </div>
                </Col>

                <Col>
                  <div className="contact-author-boxarea">
                    <h3>Get In Touch Now</h3>
                    <div className="space8"></div>

                    <Row>
                      <Col lg={6}>
                        <div className="input-area">
                          <input type="text" placeholder="First Name*" />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="input-area">
                          <input type="text" placeholder="Last Name*" />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="input-area">
                          <input type="number" placeholder="Phone Number*" />
                        </div>
                      </Col>

                      <Col lg={6}>
                        <div className="input-area">
                          <input type="email" placeholder="Email Address*" />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="input-area">
                          <input type="text" placeholder="Service Type*" />
                        </div>
                      </Col>

                      <Col lg={12}>
                        <div className="input-area">
                          <textarea placeholder="Your Message"></textarea>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="space32"></div>
                        <div className="input-area text-end">
                          <button type="submit" className="vl-btn1" style={{
                          overflow: "hidden"
                        }}>
                            Send Your Request
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={12}>
              <div className="space60"></div>
              <div className="maps-area">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4506257.120552435!2d88.67021924228865!3d21.954385721237916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1704088968016!5m2!1sen!2sbd" width="600" height="450" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="slider1-section-area">
        <div className="marquee-wrap">
          <div className="marquee-text">
            {repeatedBrandItems.map((item, index) => <div className="brand-single-box" key={index}>
                <h3>
                  {item} <img src={brand} alt={item} />
                </h3>
              </div>)}
          </div>
        </div>
      </div>
    </>;
};
export default page;