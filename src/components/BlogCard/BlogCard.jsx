// import style from "./blogCard.module.css";

function BlogCard(props) {
  return (
    <>
      <img src={props.blog.imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.blog.title}</h5>
        <p className="card-text">{props.blog.discription}</p>
        <a href="#" className="btn btn-primary">
          زمان خواندن: {props.blog.ttr} دقیقه
        </a>
      </div>
    </>
  );
}

export default BlogCard;
