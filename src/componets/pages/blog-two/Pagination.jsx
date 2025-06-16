import { Col } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Pagination = () => {
  return <Col lg={12}>
      <div className="space20"></div>
      <div className="pagination-area">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <Link className="page-link" to="#" aria-label="Previous">
                <FaChevronLeft />
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link active" to="#">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                ...
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="#">
                12
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link m-0" to="#" aria-label="Next">
                <FaChevronRight />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Col>;
};
export default Pagination;