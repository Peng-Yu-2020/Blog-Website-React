import {useState} from "react";
import Blog from "./Blog";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    return (  
        <div className="home">
            {blogs.map((blog) => {
               return  <Blog
                key = {blog.id} 
                title={blog.title} 
                body={blog.body} 
                author={blog.author}
                id={blog.id}
                 />})}
        </div>
    );
}
 
export default Home;