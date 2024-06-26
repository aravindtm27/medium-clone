import { BlogPage } from "../components/Blogpage";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
  const { id } = useParams();
  const {loading, blog} = useBlog({id: id || ""});

  if(loading || !blog){
    return<div>
      loading
    </div>
  }

  return (
    <div>
      <BlogPage blog={blog} />
    </div>
  )
}


