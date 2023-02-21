import { useState } from "react";
import "./Navbar.css";
import MenuData from "./MenuData";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="navbarItems">
      <h1 className="logo">
        React <i className="fab fa-react"></i>
      </h1>
      <div className="menu-icons" onClick={handleToggle}>
        {toggle ? (
          <i className="fas fa-bars"></i>
        ) : (
          <i className="fas fa-times"></i>
        )}
      </div>
      <ul className={!toggle ? "nav-menu present" : "nav-menu"}>
        {MenuData.map((item, index) => {
          const { title, url, cName, icon } = item;
          return (
            <li key={index}>
              <a href={url} className={cName}>
                <i className={icon}></i> {title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
