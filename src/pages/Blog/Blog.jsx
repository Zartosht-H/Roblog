import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import style from "./blog.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Blog() {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  const [blog, setBlog] = useState({});
  const blogId = useParams().id;
  let url = "http://localhost:3000/blogs/?id=" + blogId;
  let [isLoading, setIsLoaduing] = useState(false);
  let [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setBlog(response.data[0]);
        setIsLoaduing(true);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoaduing(undefined);
      });
  }, []);
  return (
    <>
      <Navbar title="roBlog" />
      <div className="container">
        {isLoading == true ? (
          <>
            <h1>{blog.title}</h1>
            <ul className="list-group list-group-horizontal-sm">
              <li className="list-group-item">تاریخ: {blog.date}</li>
              <li className="list-group-item">نویسنده: {blog.author}</li>
              <li className="list-group-item">زمان خواندن: {blog.ttr} دقیقه</li>
            </ul>
            <p className={`lead ${style.discription}`}>{blog.discription}</p>
            <p className={style.content}>
              <img src={blog.imageUrl} alt="Blog Image" className="img-fluid" />
              {blog.blogText}
            </p>
          </>
        ) : isLoading == false ? (
          <p className="alert alert-info" role="alert">
            مقاله در حال بارگذاری است ...
          </p>
        ) : (
          <p className="alert alert-danger" role="alert">
            مشکل در بارگذاری مقاله...
            <br />
            {errorMessage} : آدرس
            <a data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-title={`${url}`}> URL </a>شما قابل دسترس نیست.
            <br />
            لطفا اینترنت خود را بررسی کنید یا با{" "}
            <Link to="/about">پشتیبانی</Link> ما تماس بگیرید.
          </p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Blog;
