import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="cta-section-area sp6">
      <Container>
        <div className="cta-box text-center">
          
          <h2>Let’s Build Something Amazing Together</h2>
          
          <div className="space16"></div>
          
          <p>
            Have an idea or project in mind? Let’s discuss how we can help you 
            turn it into a powerful digital solution.
          </p>

          <div className="space32"></div>

          <div className="cta-buttons">
            <Link to="/contact" className="vl-btn1">
              Get in Touch
            </Link>

            <Link to="/contact" className="vl-btn2">
              Schedule a Call
            </Link>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default CTA;