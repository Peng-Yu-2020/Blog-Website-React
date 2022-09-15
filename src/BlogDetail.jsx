import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch"

const BlogDetail = () => {
    const history = useHistory();
    const {id} = useParams();
    const {data: blog, ispending, error} = useFetch("http://localhost:8000/blogs/"+id);
    const handleClick= () => {
        fetch("http://localhost:8000/blogs/"+id, {
            method: "DELETE"
        })
        .then(() => {
            history.push("/")
        })
    }
    return ( 
        <div className="blog-details">

            {ispending && <div>loading...</div>}
            {error && <div>{error}</div>}
            {blog && <article>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                <p>{blog.body}</p>
                <button onClick={handleClick}>delete</button>
            </article>}

        </div>
     );
}

export default BlogDetail;