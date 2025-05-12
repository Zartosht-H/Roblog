import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import BlogCard from "../../components/BlogCard/BlogCard";
import style from "./home.module.css";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/blogs")
      .then(function (response) {
        setBlogs(response.data);
      })
      .catch(function (error) {
        console.error("Error details:", error);
        if (error.response) {
          console.error("Status:", error.response.status);
          console.error("Data:", error.response.data);
        }
      });
  }, []);

  return (
    <div>
      <Navbar title="roBlog" />
      <div className="container">
        <h1>آخرین مقالات</h1>
        <div className={style.blogs}>
          {blogs.length > 0 ? (
            blogs.map((blog, index, arr) => (
              <Link
                key={blog.id}
                to={{ pathname: `/blog/${blog.id}`, state: blog.id }}
                className={`card ${blog.id == arr.length ? "hidden" : ""}`}
                style={{ width: "18rem" }}
              >
                <BlogCard blog={blog} />
              </Link>
            ))
          ) : (
            <p>در حال بارگذاری مقالات...</p>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
