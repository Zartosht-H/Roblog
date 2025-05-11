// import {
//   useState
// } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import Categories from './pages/Categories/Categories';
import NewBlog from './pages/NewBlog/NewBlog';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/newblog' element={<NewBlog />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
