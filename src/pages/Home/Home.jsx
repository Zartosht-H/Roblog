import Navbar from "../../components/Navbar/Navbar";
import BlogCard from "../../components/BlogCard/BlogCard";

function Home() {

 return (
  <div>
   <div>
    <Navbar title="roBlog" />
    <div className="container">
     <BlogCard />
    </div>
   </div>
  </div>
 );
}

export default Home;