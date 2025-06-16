import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaPlay } from "react-icons/fa6";
import about6 from "@/assets/img/all-images/about/about-img6.png";
import brand1 from "@/assets/img/elements/brand-img1.png";
import brand2 from "@/assets/img/elements/brand-img2.png";
import brand3 from "@/assets/img/elements/brand-img3.png";
import brand4 from "@/assets/img/elements/brand-img4.png";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
const Partners = () => {
  const [open, setOpen] = useState(false);
  const setting = {
    loop: true,
    margin: 30,
    nav: false,
    arrows: false,
    dots: false,
    slidesToShow: 4,
    autoplay: true,
    smartSpeed: 1500,
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: [{
      breakpoint: 0,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3
      }
    }]
  };
  return <div className="about-others-area">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="img1">
              <div className="play-btn">
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
                <span className="video-play-button">
                  <span className="me-2 d-inline-block">
                    <FaPlay onClick={() => setOpen(true)} />
                  </span>
                  Play Video
                </span>
              </div>
              <img src={about6} alt="" />
            </div>
          </Col>

          <Col lg={12} className="sp1">
            <div className="about-brand-sliderarea">
              <h3 className="text-center">
                Proudly Sponsored By Our Trusted Partners
              </h3>
              <div className="space40"></div>
              <Slider {...setting} className="about-brand-slider owl-carousel">
                <div className="brand-img1">
                  <img src={brand1} alt="" />
                </div>

                <div className="brand-img1">
                  <img src={brand2} alt="" />
                </div>

                <div className="brand-img1">
                  <img src={brand3} alt="" />
                </div>

                <div className="brand-img1">
                  <img src={brand4} alt="" />
                </div>

                <div className="brand-img1">
                  <img src={brand1} alt="" />
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Partners;