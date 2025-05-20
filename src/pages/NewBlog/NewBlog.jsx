/** @format */

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import InputText from "../../components/InputText/InputText";
import InputMText from "../../components/InputText/InputMText";
import { useState } from "react";
import axios from "axios";

function NewBlog() {
  const [blog, setBlog] = useState({
    id: 10,
    imageUrl: "",
    title: "",
    description: "",
    ttr: 0,
    blogText: "",
    date: "",
    auther: "",
  });

  const onChange = (e) => {
    setBlog((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const createBlog = () => {
    axios.post("http://localhost:3000/blogs", {
      id: 10,
      imageUrl: "../src/assets/html.svg",
      title: blog.title,
      description: blog.description,
      ttr: blog.ttr,
      blogText: blog.blogText,
      date: blog.date,
      author: blog.auther,
    });
  };

  return (
    <>
      <Navbar title="roBlog" />
      <div className="container">
        <h1>ساخت بلاگ جدید</h1>
        <InputText title="عنوان" idFor="title" change={onChange} />
        <InputText title="خلاصه" idFor="description" change={onChange} />
        <div className="details row">
          <InputText
            title="نویسنده"
            idFor="author"
            class="col col-md-12 col-lg-4"
            change={onChange}
          />
          <InputText
            title="زمان خواندن"
            idFor="ttr"
            class="col col-md-12 col-lg-4"
            change={onChange}
          />
          <InputText
            title="تاریخ"
            idFor="date"
            class="col col-md-12 col-lg-4"
            change={onChange}
          />
        </div>
        <InputMText title="متن بلاگ" idFor="blogText" change={onChange} />
        <button
          onClick={createBlog}
          type="button"
          className="btn btn-primary btn-md">
          ساخت مقاله
        </button>
      </div>
      <Footer />
    </>
  );
}

export default NewBlog;
