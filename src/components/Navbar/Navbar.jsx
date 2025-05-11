import style from "./navbar.module.css"
import logo from "../../assets/logo.svg"

function Navbar(props) {
  return (
    <nav className={style.navbar}>
      <div className="container">
        <img src={logo} alt="Page Logo" />
        <h1>{props.title}</h1>
        <ul>
          <li><a href="#">دسته‌بندی</a></li>
          <li><a href="#">مقاله جدید</a></li>
          <li><a href="#">شماوما</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;