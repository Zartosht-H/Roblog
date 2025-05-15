import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import style from "./blog.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Blog() {
  const [blog, setBlog] = useState({});
  const blogId = useParams().id;
  useEffect(() => {
    axios.get("http://localhost:3000/blogs/?id=" + blogId).then((response) => {
      setBlog(response.data[0]);
    });
  }, []);
  return (
    <>
      <Navbar title="roBlog" />
      <div className="container">
        <h1>{blog.title}</h1>
        <ul className="list-group list-group-horizontal-sm">
          <li className="list-group-item">تاریخ: {blog.date}</li>
          <li className="list-group-item">نویسنده: {blog.author}</li>
          <li className="list-group-item">زمان خواندن: {blog.ttr} دقیقه</li>
        </ul>
        <p className={`lead ${style.discription}`}>{blog.discription}</p>
        <p className={style.content}><img src={blog.imageUrl} alt="Blog Image" className="img-fluid" />{blog.blogText}</p>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
