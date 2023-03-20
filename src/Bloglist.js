import { Link } from "react-router-dom";

const Bloglist = ({blogs, titre}) => {
       
    return ( 
        <div className="bloglist">
            <h2>{titre}</h2>
        {
          blogs.map( (blog) =>(
              <div className="blog" key={blog.id}>
              <Link to ={`/blogs/${blog.id}`} className="blog-titre"> {blog.title} </Link>
              <small className="blog-description-date">publier le: {blog.date}</small>
              <p className="blog-author"> publier par: {blog.author}</p>
          </div>
           ) )
        }
      </div>

     );
}
 
export default Bloglist;  