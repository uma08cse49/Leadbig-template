import { FaXmark } from "react-icons/fa6";
import search from "@/assets/img/icons/search1.svg";
import { Offcanvas } from "react-bootstrap";
const SearchBar = ({
  show,
  handleClose
}) => {
  const onClose = () => {
    handleClose();
  };
  return <Offcanvas show={show} placement="top">
      <div className="header-search-form-wrapper open">
        <div className="tx-search-close tx-close">
          <FaXmark onClick={() => onClose()} />
        </div>
        <div className="header-search-container">
          <form role="search" className="search-form">
            <input type="search" className="search-field" placeholder="Search …" value="" name="s" />
            <button type="submit" className="search-submit">
              <img src={search} alt="" />
            </button>
          </form>
        </div>
      </div>
    </Offcanvas>;
};
export default SearchBar;