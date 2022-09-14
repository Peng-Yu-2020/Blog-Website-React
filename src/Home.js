import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [ispending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
            .then((result) => {
                if(!result.ok){
                    throw Error("could not fetch the data from that resource!");}
                return result.json();
                })
            .then(data => {
                setError(null);
                setBlogs(data);
                setIsPending(false);
            })
            .catch(e => {
                setIsPending(false);
                setError(e.message)
            })
        }, 1000)
    }, []);

    return (  
        <div className="home">
        {error && <p>{ error }</p>}
        {ispending && <p>loading...</p>}
        {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
};
 
export default Home;

