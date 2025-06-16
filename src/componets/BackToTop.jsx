import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
const BackToTop = ({
  ClassName = ""
}) => {
  const [progress, setProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const backToTop = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = scrollTop / docHeight * 100;
      setProgress(scrollPercentage);
      setIsScrolled(scrollTop > 40);
      if (backToTop.current) {
        backToTop.current.classList.toggle("active-progress", scrollTop > 300);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <div className="paginacontainer " onClick={goToTop}>
      <div className={`progress-wrap ${isScrolled ? "active-progress" : ""} ${ClassName}`}>
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" strokeDasharray="307" strokeDashoffset={307 - progress / 100 * 307} />
        </svg>

        <span ref={backToTop} color="#9fbd17" className="position-absolute top-50 start-50 z-20 translate-middle">
          <FaArrowUp size={18} />
        </span>
      </div>
    </div>;
};
export default BackToTop;