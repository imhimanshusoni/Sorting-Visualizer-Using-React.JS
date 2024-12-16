import { Link, useLocation } from "react-router";
import "./selector.css";

const Selector = () => {
  let params = useLocation();
  const path = params.pathname;
  return (
    <div id="selector">
      <div className={`selector-item ${path === "/bubble" ? "active" : ""}`}>
        <Link to="/bubble">Bubble Sort</Link>
      </div>
      <div className={`selector-item ${path === "/selection" ? "active" : ""}`}>
        <Link to="/selection">Selection Sort</Link>
      </div>
      <div className={`selector-item ${path === "/insertion" ? "active" : ""}`}>
        <Link to="/insertion">Insertion Sort</Link>
      </div>
      <div className={`selector-item ${path === "/merge" ? "active" : ""}`}>
        <Link to="/merge">Merge Sort</Link>
      </div>
      <div className={`selector-item ${path === "/quick" ? "active" : ""}`}>
        <Link to="/quick">Quick Sort</Link>
      </div>
    </div>
  );
};

export default Selector;
