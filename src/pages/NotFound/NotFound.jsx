/** @format */
import Navbar from "../../components/Navbar/Navbar";
import style from "./notFound.module.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className={style.body}>
        <div className={style.container}>
          <h1 className={style.h1}>404</h1>
          <p className={style.p}>
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link to="/" className={style.homeButton}>
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
