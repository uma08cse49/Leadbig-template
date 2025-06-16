import blog13 from "@/assets/img/all-images/blog/blog-img13.png";
import blog14 from "@/assets/img/all-images/blog/blog-img14.png";
import blog15 from "@/assets/img/all-images/blog/blog-img15.png";
import blog16 from "@/assets/img/all-images/blog/blog-img16.png";
import blog17 from "@/assets/img/all-images/blog/blog-img17.png";
import blog18 from "@/assets/img/all-images/blog/blog-img18.png";
import date from "@/assets/img/icons/date1.svg";
import user from "@/assets/img/icons/user1.svg";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaPlay, FaReply, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
const BlogDetails = () => {
  const [open, setOpen] = useState(false);
  return <>
      <Col lg={8}>
        <div className="blog-others-sidebar">
          <div className="img1">
            <img src={blog13} alt="" />
          </div>
          <div className="space32"></div>
          <ul className="list-author">
            <li>
             <Link to="#">#BrandStrategy</Link>
            </li>
            <li>
             <Link to="#">
                <img src={date} alt="" /> 26 August 2024 <span> | </span>
              </Link>
            </li>
            <li>
             <Link to="#">
                <img src={user} alt="" /> Alex Roy
              </Link>
            </li>
          </ul>
          <div className="space24"></div>
          <h2>
            Unleashing Creativity, One Pixel Time Websites Lead the Industry
          </h2>
          <div className="space20"></div>
          <p>
            Web design trends evolve rapidly, with new technologies, design
            philosophies, and user behaviors shaping the digital landscape. From
            the rise of minimalism and darks mode to the integration of AI in
            design workflows, staying updated on the latest trends is crucial.
          </p>
          <div className="space18"></div>
          <Row>
            <Col lg={6} md={6}>
              <div className="space30"></div>
              <div className="img1 image-anime">
                <img src={blog14} alt="" />
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="space30"></div>
              <div className="img1 image-anime">
                <img src={blog15} alt="" />
              </div>
            </Col>
          </Row>
          <div className="space32"></div>
          <h3>Website Maintenance And Optimization</h3>
          <div className="space16"></div>
          <p>
            The world of web design is constantly evolving, and staying updated
            with the latest the trends is crucial for maintaining a competitive
            edge. Whether it's incorporating dark and mode, embracing minimalist
            designs, or utilizing dynamic typography, trends shape how.
          </p>
          <div className="space16"></div>
          <p>
            Keeping your website fresh and modern means blending aesthetic
            appeal with function, while ensuring an intuitive user experience.
            In this post, we’ll explore the top web design trends you can adopt
            to make your website not visually appealing but also user-centric.
          </p>
          <div className="space48"></div>
          <div className="images">
            <div className="img1 image-anime">
              <img src={blog16} alt="" />
            </div>
            <div className="play">
              <div className="play-button">
                <FaPlay onClick={() => setOpen(true)} />
              </div>

              <Lightbox open={open} close={() => setOpen(false)} plugins={[Video]} styles={{
              container: {
                backgroundColor: "rgba(0,0,0,0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }
            }} render={{
              buttonPrev: () => null,
              buttonNext: () => null
            }} slides={[{
              type: "video",
              width: 1280,
              height: 720,
              sources: [{
                src: "work.mp4",
                type: "video/mp4"
              }]
            }]} />
            </div>
          </div>
          <div className="space32"></div>
          <h3>Maintaining Regulatory Compliance</h3>
          <div className="space16"></div>
          <p>
            Implementing IT solutions brings numerous benefits that can
            significantly enhance the business performance. First and foremost,
            these solutions streamline operations best automating repetitive
            tasks and improving overall efficiency, allowing employees.
          </p>
          <div className="space40"></div>
          <div className="tags-social">
            <div className="tags">
              <ul>
                <li>Tags:</li>
                <li>
                 <Link to="#">#TechSolution</Link>
                </li>
                <li>
                 <Link to="#" className="m-0">
                    #BussinessIT
                  </Link>
                </li>
              </ul>
            </div>
            <div className="social">
              <ul>
                <li>Social:</li>
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
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="space60"></div>
          <h3>Blog Comments (2)</h3>
          <div className="space32"></div>
          <div className="comments-boxarea">
            <div className="comments-boxes">
              <div className="comments-auhtor-box">
                <div className="img3">
                  <img src={blog17} alt="" />
                </div>
                <div className="content">
                 <Link to="#" className="date">
                    <img src={date} alt="" /> 8 December 2024
                  </Link>
                  <Link to="/team" className="name">
                    Alex Robertson
                  </Link>
                </div>
              </div>
             <Link to="#" className="reply">
                <FaReply /> Reply
              </Link>
            </div>
            <div className="space16"></div>
            <p>
              Web development is the backbone of any successful website. While
              design the grabs attention, the development ensures that your site
              works seamlessly. From choosing the right platform to implementing
              responsive design and integrating.
            </p>
          </div>
          <div className="space30"></div>
          <div className="comments-boxarea box2">
            <div className="comments-boxes">
              <div className="comments-auhtor-box">
                <div className="img3">
                  <img src={blog18} alt="" />
                </div>
                <div className="content">
                 <Link to="#" className="date">
                    <img src={date} alt="" /> 12 May 2024
                  </Link>
                  <Link to="/team" className="name">
                    Theo Hernandez
                  </Link>
                </div>
              </div>
             <Link to="#" className="reply">
                <FaReply /> Reply
              </Link>
            </div>
            <div className="space16"></div>
            <p>
              this article, we’ll cover web development best practices,
              including the importance of clean coding, optimization for
              performance, and security considerations. We'll also dive into the
              choice of content management.
            </p>
          </div>
          <div className="space48"></div>
          <h3>Leave A Reply Now</h3>
          <div className="space32"></div>
          <div className="contact-boxarea">
            <h3>Send Us A Message</h3>
            <div className="space8"></div>
            <Row>
              <Col lg={6}>
                <div className="input-area">
                  <input type="text" placeholder="Your Name" />
                </div>
              </Col>
              <Col lg={6}>
                <div className="input-area">
                  <input type="email" placeholder="Email Address" />
                </div>
              </Col>
              <Col lg={12}>
                <div className="input-area">
                  <textarea placeholder="Your Message"></textarea>
                </div>
              </Col>
              <Col lg={12}>
                <div className="space4"></div>
                <div className="input-area">
                  <button type="submit" className="vl-btn1" style={{
                  overflow: "hidden"
                }}>
                    Leave A Reply Now
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </>;
};
export default BlogDetails;