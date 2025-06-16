import { useState } from "react";
import logobg from "@/assets/img/all-images/bg/bg2.png";
import sublogo from "@/assets/img/icons/sub-logo2.svg";
import ele20 from "@/assets/img/elements/elements20.png";
import testimonial5 from "@/assets/img/all-images/testimonial/testimonial-img5.png";
import testimonial6 from "@/assets/img/all-images/testimonial/testimonial-img6.png";
import testimonial7 from "@/assets/img/all-images/testimonial/testimonial-img7.png";
import testimonial8 from "@/assets/img/all-images/testimonial/testimonial-img8.png";
import testimonial9 from "@/assets/img/all-images/testimonial/testimonial-img9.png";
import testimonial10 from "@/assets/img/all-images/testimonial/testimonial-img10.png";
import { Col, Container, Row } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
const Testimonial = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const testimonials = [{
    id: 1,
    name: "Sheldon Jackson",
    role: "Owner FeatherDev",
    content: "“Partnering with Renev was a turning point for our business. From an start, their team demonstrated level professionalism and expertise that’s hard to find. They took time understand not only our immediate needs but also our long-term vision, and they crafted a solution that truly aligned with both.",
    rating: 5,
    image: testimonial5
  }, {
    id: 2,
    name: "Jane Smith",
    role: "CEO TechCorp",
    content: "Partnering with Renev was a turning point for our business. From an start, their team demonstrated level professionalism and expertise that’s hard to find. They took time understand not only our immediate needs but also our long-term vision, and they crafted a solution that truly aligned with both.",
    rating: 5,
    image: testimonial6
  }, {
    id: 3,
    name: "Michael Johnson",
    role: "Marketing Director",
    content: "Partnering with Renev was a turning point for our business. From an start, their team demonstrated level professionalism and expertise that’s hard to find. They took time understand not only our immediate needs but also our long-term vision, and they crafted a solution that truly aligned with both.",
    rating: 5,
    image: testimonial7
  }, {
    id: 4,
    name: "Sarah Williams",
    role: "Product Manager",
    content: "Partnering with Renev was a turning point for our business. From an start, their team demonstrated level professionalism and expertise that’s hard to find. They took time understand not only our immediate needs but also our long-term vision, and they crafted a solution that truly aligned with both.",
    rating: 5,
    image: testimonial8
  }, {
    id: 5,
    name: "David Brown",
    role: "CTO InnovateCo",
    content: "Partnering with Renev was a turning point for our business. From an start, their team demonstrated level professionalism and expertise that’s hard to find. They took time understand not only our immediate needs but also our long-term vision, and they crafted a solution that truly aligned with both.",
    rating: 5,
    image: testimonial9
  }, {
    id: 6,
    name: "Emily Davis",
    role: "UX Lead",
    content: "Partnering with Renev was a turning point for our business. From an start, their team demonstrated level professionalism and expertise that’s hard to find. They took time understand not only our immediate needs but also our long-term vision, and they crafted a solution that truly aligned with both.",
    rating: 5,
    image: testimonial10
  }];
  const swiperThumbsOptions = {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    modules: [FreeMode, Autoplay],
    breakpoints: {
      320: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 6
      }
    }
  };
  const swiperMainOptions = {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    },
    modules: [Navigation, Thumbs, Autoplay],
    thumbs: {
      swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
    }
  };
  return <section className="testimonials-2 sp6" style={{
    backgroundImage: `url(${logobg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }}>
      <Container>
        <Row>
          <Col lg={6} className="m-auto text-center">
            <div className="heading1 space-margin60">
              <h5>
                <img src={sublogo} alt="" /> Real Feedback
              </h5>
              <div className="space20"></div>
              <h2 className="text-anime-style-3">Client Success Stories</h2>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={7} md={12} className="left _relative m-auto">
            <Swiper {...swiperMainOptions} className="swiper-testimonial-2">
              {testimonials.map(testimonial => <SwiperSlide key={testimonial.id}>
                  <div className="swiper-slide">
                    <div className="testimonial-boxarea">
                      <svg className="quote" xmlns="http://www.w3.org/2000/svg" width="32" height="26" viewBox="0 0 32 26" fill="none">
                        <path d="M17.4814 6.11477C17.4814 7.7281 17.9031 9.08294 18.7464 10.1793C19.3441 10.9346 20.155 11.4308 21.1793 11.6679C22.1876 11.9026 23.1409 11.9191 24.0026 11.7193C24.2959 13.4609 23.8193 15.3053 22.6093 17.2596C21.3968 19.2127 19.8336 20.6812 17.9196 21.6651L20.8181 25.8359C22.2848 25.1099 23.6781 24.1896 24.9614 23.0768C26.2631 21.9639 27.4181 20.6843 28.4448 19.2378C29.4714 17.7913 30.2414 16.1578 30.7364 14.3061C31.2314 12.4544 31.3689 10.5661 31.1324 8.62277C30.8244 6.0561 29.9958 4.00277 28.6464 2.4811C27.2983 0.93988 25.619 0.16927 23.6084 0.16927C21.8393 0.16927 20.3708 0.700937 19.2084 1.77894C18.0583 2.83494 17.4839 4.28205 17.4851 6.12027L17.4814 6.11477ZM0.754095 6.11477C0.754095 7.7281 1.17576 9.08294 2.01909 10.1793C2.61798 10.9493 3.42893 11.4485 4.45193 11.6771C5.47859 11.9032 6.4197 11.9167 7.27526 11.7174C7.56859 13.4408 7.11026 15.2924 5.8966 17.2541C4.68659 19.1974 3.1246 20.6641 1.2106 21.6541L4.10176 25.8359C5.56965 25.1099 6.95076 24.1902 8.24509 23.0768C9.55849 21.9473 10.725 20.6576 11.7174 19.2378C12.7368 17.7894 13.4958 16.1578 13.9908 14.3061C14.4936 12.4559 14.6287 10.525 14.3886 8.62277C14.0843 6.0561 13.2593 4.00277 11.9136 2.4811C10.5691 0.95088 8.89287 0.185772 6.88476 0.185772C5.11254 0.183327 3.64465 0.719269 2.48109 1.7936C1.33098 2.8496 0.755316 4.29671 0.754095 6.13494V6.11477Z" fill="white" />
                      </svg>
                      <ul className="d-flex justify-content-start">
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                      <div className="space16"></div>
                      <p>"{testimonial.content}"</p>
                      <div className="space32"></div>
                      <div className="names-area">
                        <div className="man-textarea">
                          <div className="man">
                            <img src={testimonial.image} alt={testimonial.name} width={80} height={80} />
                          </div>
                          <div className="text">
                            <Link to="/pages/team">{testimonial.name}</Link>

                            <div className="space12"></div>

                            <p>{testimonial.role}</p>
                          </div>
                        </div>
                        <img src={ele20} alt="" className="elements20" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>)}
            </Swiper>
            <div className="pagination-buttons">
              <div className="swiper-button-next">
                <button>
                  <FaAngleLeft />
                </button>
              </div>
              <div className="swiper-button-prev" style={{
              marginLeft: "3px"
            }}>
                <button>
                  <FaAngleRight />
                </button>
              </div>
            </div>
          </Col>
          <div className="map-testimonial">
            <Swiper {...swiperThumbsOptions} onSwiper={setThumbsSwiper} className="swiper swiper-thumb2">
              {testimonials.map(testimonial => <SwiperSlide key={testimonial.id}>
                  <div className="thumb-slide">
                    <img src={testimonial.image} alt={testimonial.name} width={80} height={80} />
                  </div>
                </SwiperSlide>)}
            </Swiper>
          </div>
        </Row>
      </Container>
    </section>;
};
export default Testimonial;