import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
const AppMenu = ({
  items,
  buttonClassName
}) => {
  return <ul className="main-menu">
      {items.map((menuItem, index) => <li key={index} className={menuItem.children || menuItem.megaMenuItems ? "has-dropdown" : ""}>
          <Link to={menuItem.url || "#"}>
            {menuItem.label}
            {(menuItem.children || menuItem.megaMenuItems) && <span>
                <FaAngleDown size={16} className="align-middle ms-2" />
              </span>}
          </Link>

          {menuItem.megaMenuItems && <div className="vl-mega-menu">
              <div className="vl-home-menu">
                <Row className="gx-4 row-cols-1 row-cols-md-1 row-cols-lg-4">
                  {menuItem.megaMenuItems.map((megaItem, idx) => <Col key={idx}>
                      <div className="vl-home-thumb">
                        <div className="img1">
                          <img src={megaItem.image} alt={megaItem.items[0].label} />
                        </div>
                        <Link to={megaItem.items[0].url} className="mega-label">
                          {megaItem.labels}
                        </Link>

                        <div className="btn-area1">
                          <Link to={megaItem.items[0].url} className={buttonClassName || "vl-btn1"}>
                            {megaItem.items[0].label}
                          </Link>
                        </div>
                      </div>
                    </Col>)}
                </Row>
              </div>
            </div>}

          {menuItem.children && <ul className="sub-menu">
              {menuItem.children.map((child, childIndex) => 
              <li key={childIndex}
              className={child.children ? "has-dropdown" : ""}
              >
                  <Link to={child.url || "#"}>{child.label}
                    {child.children && (
                    <span>
                      <FaAngleDown size={14} className="ms-1" />
                    </span>
                  )}
                  </Link>

                  {child.children && (
                  <ul className="sub-menu">
                    {child.children.map((subChild, subIndex) => (
                      <li key={subIndex}>
                        <Link to={subChild.url || "#"}>
                          {subChild.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}


                </li>
              )}
            </ul>
            }
        </li>)}
    </ul>;
};
export default AppMenu;