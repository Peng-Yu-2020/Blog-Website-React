const Blog = (props) => {
    return ( 
        <div className="blog-preview" key={props.id}>
        <h2>{props.title}</h2>
        <p>Written by {props.body}</p>
        {/* <p>{props.author}</p>
        <p>{props.id}</p> */}
        </div>
        
        
     );
}
 
export default Blog;