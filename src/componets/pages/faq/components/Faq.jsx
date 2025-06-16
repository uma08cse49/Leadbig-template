import { useState } from "react";
import { Accordion, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import element15 from "@/assets/img/elements/elements15.png";
const Faq = () => {
  const faqItems = [{
    question: "What services does Renev offer?",
    answer: "We’ve worked with clients across various industries, including retail, healthcare, technology, to education, hospitality, and more. Our team tailors every design to meet the unique needs of your business."
  }, {
    question: "Can you update my existing website?",
    answer: "Yes, we can improve or redesign your current website to meet modern standards and your business goals."
  }, {
    question: "Will I have input in the design process?",
    answer: "Absolutely! We collaborate with you throughout the design process to ensure the result reflects your vision."
  }, {
    question: "How much does a new website cost?",
    answer: "The cost depends on the scope and complexity of the project. Contact us for a detailed quote tailored to your needs."
  }, {
    question: "Will my website be mobile-friendly?",
    answer: "Yes, all our websites are responsive and optimized for mobile, tablet, and desktop experiences."
  }, {
    question: "What SEO services do you offer?",
    answer: "We provide technical SEO audits, on-page optimization, keyword research, and performance monitoring to boost your visibility."
  }];
  const categories = ["All", "UI/UX Design", "Development", "Content And Branding", "SEO and Performance"];
  const [activeTab, setActiveTab] = useState("All");
  const [accordionStates, setAccordionStates] = useState({
    All: "0",
    "UI/UX Design": "",
    Development: "",
    "Content And Branding": "",
    "SEO and Performance": ""
  });
  const handleTabSelect = key => {
    const selectedKey = key || "All";
    setActiveTab(selectedKey);
  };
  const handleAccordionToggle = eventKey => {
    setAccordionStates(prevStates => ({
      ...prevStates,
      [activeTab]: prevStates[activeTab] === eventKey ? "" : eventKey
    }));
  };
  return <div className="faq-inner-section-area sp6">
      <img src={element15} alt="" className="elements15" />
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            <div className="heading1 text-center space-margin60">
              <h2>Frequently Asked Questions</h2>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={10} className="m-auto">
            <div className="faq-widget-area text-center">
              <Tabs style={{
              border: "none"
            }} activeKey={activeTab} onSelect={handleTabSelect} id="faq-tabs" className="nav-pills justify-content-center">
                {categories.map(cat => <Tab key={cat} eventKey={cat} title={cat === "SEO and Performance" ? `5. ${cat}` : cat} />)}
              </Tabs>

              <div className="space48"></div>

              <Accordion activeKey={accordionStates[activeTab]} onSelect={eventKey => handleAccordionToggle(eventKey)}>
                {faqItems.map((faq, idx) => <Accordion.Item eventKey={String(idx)} key={idx} className="mb-3">
                    <Accordion.Header>{faq.question}</Accordion.Header>
                    <Accordion.Body>
                      <p>{faq.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>)}
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </div>;
};
export default Faq;