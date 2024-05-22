import { Link } from "react-router-dom";


interface BlogCardProps{
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return<Link to={`/blog/${id}`}>
    <div className="border-b border-slate-300 p-3 w-screen max-w-screen-md ">
        <div className="flex font-light">
            <div className="flex justify-center flex-col p-2">
            <Avatar size={"small"} name={authorName}/>
            </div>
            <div className="font-extralight p-1 flex justify-center flex-col">
            {authorName} 
            </div>
            <div className="text-sm p-1 text-slate-500 flex justify-center flex-col">
                &#9679;
            </div>
            <div className="p-2">
            {publishedDate}
            </div>
            </div>
        <div className="text-xl font-semibold cursor">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0,200) + "..."}
        </div>
        <div className="text-slate-400 text-sm font-thin mt-2">
            {`${Math.ceil(content.length/200)} minute(s) read`}
        </div>
    </div>
    </Link>
}

export function Avatar({name, size="small"}:{name:string, size:"small" | "large"}){
    return <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-5 h-5" : "w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
    <span className={`${size === "small" ? "font-medium text-sm" : "font-bold text-2xl"}  text-gray-600 dark:text-gray-300`}>
    {name[0]}
    </span>
</div>
}