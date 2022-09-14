import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null)

    const [name, setName] = useState("peng");


    useEffect(() => {
        fetch("http://localhost:8000/blogs")
        .then((result) => result.json())
        .then(data => setBlogs(data))
    }, []);

    return (  
        <div className="home">
        {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}
 
export default Home;