import { BsFillCaretUpSquareFill } from "react-icons/bs";
import "./Button.css"

const BackToTopButton = () => {
  return (
    <a href="#home" className= "scrollto page-scroll"  id="back-to-top">
      <div className="btn-go-top">
      <BsFillCaretUpSquareFill />
      </div>
    </a>
  );
};

export default BackToTopButton;
