import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./Blogcard"


export const BlogPage = ({blog}:{blog:Blog}) => {
     return <div>
        <Appbar />
        <div className="grid grid-cols-12 px-10 ml-10 w-full pt-200 max-w-screen-2xl">
            <div className="col-span-9">
                <div className="text-5xl font-extrabold pt-10">
                    {blog.title}
                </div>
                <div className="text-slate-600 pt-2">
                    Posted on 2nd dec 2024
                </div>
                <div className="pt-4">
                    {blog.content}
                </div>
            </div>
            <div className="col-span-3 pt-10 mr-10">
                <div className="font-light text-slate-600 p-2">
                    Author
                </div>
                <div className="text-lg font-semibold p-2">
                <Avatar name={blog.author.name || "Anonymous User"} size={"large"}/> &nbsp;
                {blog.author.name || "Anonymous User"}
                </div>
                <div className="px-2 text-slate-500">
                Users are valuable to this website
                </div>
            </div>
            
        </div>
     </div>
}