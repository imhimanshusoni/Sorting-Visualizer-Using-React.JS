import { Link } from "react-router";
import "./navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/home">
        <h1>SORTING VISUALIZER</h1>
      </Link>
    </div>
  );
};

export default Navbar;
