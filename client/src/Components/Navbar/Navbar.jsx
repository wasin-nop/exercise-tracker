import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  // const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];

  const handleClick = (e) => {
    setIsActive(!isActive);
    navbarLinks.classList.toggle("active");
  };
  // toggleButton.addEventListener("click", () => {
  //   navbarLinks.classList.toggle("active");
  // });
  return (
    // <!-- Navbar -->
    <header className="header-nav">
      <nav className="container navbar">
        <div className="brand-title">
          <Link to="/">
            <span className="color-green-yellow ">Exer</span>
            <span className="color-white">Notion</span>
          </Link>
        </div>
        <span className="toggle-button" onClick={handleClick}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </span>
        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/">Add Activity</Link>
            </li>
            <li>
              <Link to="/records">Record Activity</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
