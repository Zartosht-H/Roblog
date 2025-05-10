import style from "./blogCard.module.css";


function BlogCard(props) {
  return (
    <div className={`card ${props.class}`} style={{ width: "18rem" }}>
      <img src={props.blog.imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.blog.title}</h5>
        <p className="card-text">{props.blog.discription}</p>
        <a href="#" className="btn btn-primary">{props.blog.ttr}</a>
      </div>
    </div >
  );
}

export default BlogCard;