// import {
//   useState
// } from 'react';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import NewBlog from "./pages/NewBlog/NewBlog";
import NotFound from "./pages/NotFound/NotFound";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
