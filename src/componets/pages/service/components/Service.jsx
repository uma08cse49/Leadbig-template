import service1 from "@/assets/img/all-images/service/service-img1.png";
import service2 from "@/assets/img/all-images/service/service-img2.png";
import service3 from "@/assets/img/all-images/service/service-img3.png";
import service4 from "@/assets/img/all-images/service/service-img4.png";
import ele15 from "@/assets/img/elements/elements15.png";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const serviceData = [{
  title: "Branding Identity",
  image: service1,
  hashtags: ["#BrandIdentityDesign", "#DesignYourBrand"],
  aosDuration: 900
}, {
  title: "E-commerce Shop",
  image: service2,
  hashtags: ["#EcommerceExperts", "#DesignYourBrand"],
  aosDuration: 1000
}, {
  title: "UI/UX Designer",
  image: service3,
  hashtags: ["#DesignInspiration", "#UserCenteredDesign"],
  aosDuration: 1100
}, {
  title: "Digital Marketing",
  image: service4,
  hashtags: ["#WebDevelopment", "#FrontendDevelopment"],
  aosDuration: 1200
}];
const Service = () => {
  return <div className="service3-section-area sp6">
      <img src={ele15} alt="" className="elements15" />
      <Container>
        <Row>
          <Col lg={12}>
            {serviceData.map((service, index) => <div key={index}>
                <div className="service-branding-boxesarea" data-aos="fade-up" data-aos-duration={service.aosDuration}>
                  <div className="service-brand-head">
                    <h2>
                      <Link to="/service-single">{service.title}</Link>
                    </h2>
                    <div className="space8" />
                    <ul className="service-list">
                      {service.hashtags.slice(0, 2).map((tag, i) => <li key={i}>
                          <Link to="#">{tag}</Link>
                        </li>)}
                    </ul>
                    <ul className="service-list">
                      {service.hashtags.slice(2).map((tag, i) => <li key={i}>
                          <Link to="#">{tag}</Link>
                        </li>)}
                    </ul>
                  </div>
                  <div className="hidden-img">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="arrow">
                    <Link to="/service-single">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
                <div className="space8" />
              </div>)}

            <div className="space100" />
            <div className="started-btn" data-aos="zoom-in" data-aos-duration="1000">
              <svg xmlns="http://www.w3.org/2000/svg" width="190" height="190" viewBox="0 0 190 190" fill="none" className="keyframe5">
                <path d="M89.6307 2.22405C92.2799 1.12669 93.6046 0.578013 95 0.578013C96.3954 0.578013 97.7201 1.12669 100.369 2.22405L156.806 25.6008C159.455 26.6982 160.78 27.2468 161.766 28.2336C162.753 29.2203 163.302 30.5449 164.399 33.1942L187.776 89.6307C188.873 92.2799 189.422 93.6046 189.422 95C189.422 96.3954 188.873 97.7201 187.776 100.369L164.399 156.806C163.302 159.455 162.753 160.78 161.766 161.766C160.78 162.753 159.455 163.302 156.806 164.399L100.369 187.776C97.7201 188.873 96.3954 189.422 95 189.422C93.6046 189.422 92.2799 188.873 89.6307 187.776L33.1942 164.399C30.5449 163.302 29.2203 162.753 28.2336 161.766C27.2468 160.78 26.6982 159.455 25.6008 156.806L2.22405 100.369C1.12669 97.7201 0.578013 96.3954 0.578013 95C0.578013 93.6046 1.12669 92.2799 2.22405 89.6307L25.6008 33.1942C26.6982 30.5449 27.2468 29.2203 28.2336 28.2336C29.2203 27.2468 30.5449 26.6982 33.1942 25.6008L89.6307 2.22405Z" fill="#C0F037" />
              </svg>
              <Link to="/contact">
                <span>
                  <FaArrowRight />
                </span>
              </Link>
              <div className="space10" />
              <Link to="/contact">Get Started</Link>
            </div>

            <div className="space50" />
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Service;