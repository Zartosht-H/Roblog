import style from "./navbar.module.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className={style.navbar}>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Page Logo" />
          <h1>{props.title}</h1>
        </Link>
        <ul>
          <li>
            <Link to="/newblog">مقاله جدید</Link>
          </li>
          <li>
            <Link to="/about">شماوما</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
