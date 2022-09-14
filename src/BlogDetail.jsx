import { useParams } from "react-router-dom";
import useFetch from "./useFetch"

const BlogDetail = () => {

    const {id} = useParams();
    const {data: blog, ispending, error} = useFetch("http://localhost:8000/blogs/"+id);

    return ( 
        <div className="blog-details">

            {ispending && <div>loading...</div>}
            {error && <div>{error}</div>}
            {blog && <article>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                <p>{blog.body}</p>
            </article>}

        </div>
     );
}

export default BlogDetail;