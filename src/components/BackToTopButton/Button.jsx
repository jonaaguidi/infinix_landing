import { animateScroll as scroll } from "react-scroll";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import "./Button.css";

const BackToTopButton = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, 
      smooth: "easeInOutQuart", 
    });
  };

  return (
    <a onClick={scrollToTop} href="#home" className="scrollto page-scroll" id="back-to-top">
      <div className="btn-go-top">
        <BsFillArrowUpSquareFill />
      </div>
    </a>
  );
};

export default BackToTopButton;
