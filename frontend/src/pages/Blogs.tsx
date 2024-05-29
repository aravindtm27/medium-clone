import { BlogCard } from "../components/Blogcard"
import { Appbar } from "../components/Appbar"
import { useBlogs } from "../hooks/index";
import { Skeleton } from "../components/skeleton";

export const Blogs = () => {
  const {loading, blogs} = useBlogs();

  if(loading){
    return<div>
      <Appbar />
      <Skeleton />
    </div>
  }

    return<div>    
        <Appbar />
    <div className="flex justify-center">
    <div className="">
    {blogs.map(blog=><BlogCard 
  id = {blog.id}
  authorName={blog.author.name || "Anonymous User"}
  title={blog.title}
  content={blog.content}
  publishedDate={"19th may 2024"}
  />)}
    </div>
    </div>
    </div>
}