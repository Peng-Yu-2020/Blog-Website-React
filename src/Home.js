import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [ispending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        fetch("http://localhost:8000/blogs")
        .then((result) => result.json())
        .then(data => {
            setBlogs(data)
            setIsPending(false)
        })
        }, 1000)
    }, []);

    return (  
        <div className="home">
        {ispending && <p>loading...</p>}
        {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}
 
export default Home;