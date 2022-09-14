import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My old website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    function handleDelete(id){
        setBlogs(
            blogs.filter((blog) => blog.id !== id)
        )
    }

    useEffect(() => {
        console.log("use effect run");
        console.log(blogs)
    })
    return (  
        <div className="home">
           <BlogList handleDelete={handleDelete} blogs={blogs} title="All Blogs"/>
           <BlogList handleDelete={handleDelete} blogs={blogs.filter((blog)=> blog.author === "mario")} title="Mario Blogs"/>
        </div>
    );
}
 
export default Home;