import Bloglist from "./Bloglist";
import Usefetch from "./Usefetch";

const Home = () => {

  const {data: blogs, isloading, error} = Usefetch('http://localhost:8000/blogs?_sort=id&_order=desc');
    return ( 
        <div className="home">
          {error && <div style={{'color': 'red'}}>{error}</div>}
          {isloading && <div> En cour de traitement..... </div>}
          { blogs && <Bloglist blogs={blogs} titre={"Liste des blogs publier par mekem "}/>}
           {/* <Bloglist blogs={blogs.filter((blog) => blog.author ==='Deste')} titre={"Liste des blogs publier par deste "}/> */}
    
        </div>
     );
}
 
export default Home; 