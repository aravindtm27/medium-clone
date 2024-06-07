import { Link } from "react-router-dom"
import { Avatar } from "./Blogcard"



export const Appbar = () => {
    return <div className="border-b flex justify-between py-3 px-10">
        <Link to={'/blogs'}>
        <div className="flex justify-center flex-col mt-3 text-3xl font-semibold">
            Medium
        </div>
        </Link>
        <div>
            <Link to={'/publish'}>    
        <button type="button" 
            className="text-white mr-6 bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            New Blog
            </button>
            </Link>
            <Link to={'/signin'}>    
        <button type="button" 
            className="text-white mr-6 bg-slate-600 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
            Sign In
            </button>
            </Link>
            <Avatar size={"large"} name="User"/>
        </div>
    </div>
}