const Blog = (props) => {
    return ( 
        <div>
        <p>{props.title}</p>
        <p>{props.body}</p>
        <p>{props.author}</p>
        <p>{props.id}</p>
        </div>
        
     );
}
 
export default Blog;