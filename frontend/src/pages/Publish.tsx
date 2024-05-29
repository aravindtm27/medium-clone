import { useNavigate } from "react-router-dom"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import axios from "axios"
import {ChangeEvent, useState} from "react"


export const Publish = () => {
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("")
    const navigate = useNavigate();

    return <div>
        <Appbar />
    <div className="flex justify-center">     
        <input id="chat"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        className="focus:outline-none h-20 mt-10 mx-20 p-2 w-4/5 text-xl text-gray-900 bg-white rounded-lg border border-gray-400" placeholder="Enter your title"></input>
    </div>
    <div className="">
    <TextEditor 
    onChange={(e)=>{
        setDescription(e.target.value)
    }} 
    blogContent={description}/>
    <div className="flex justify-center">
    <div className="w-4/5 bg-white items-center justify-between px-3 py-2 border-t">
           <button type="submit" 
           onClick={async()=>{
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                title,
                content: description
            },{
                headers:{
                    Authorization: localStorage.getItem("token")
                }
            }
            );
            navigate(`blog/${response.data.id}`)
           }}
           className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200">
               Post Blog
           </button>
               <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                   <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                   <span className="sr-only">Upload image</span>
               </button>
           </div>
    </div>
    </div>
    </div>
}

function TextEditor({blogContent, onChange}:{blogContent:string, onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}){
    return<div className="w-full flex justify-center mt-4 ">     
    <form className="w-4/5">
    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 h-3/5">
       <div className="px-4 py-2 bg-white rounded-t-lg">
           <label  className="sr-only">Your comment</label>
           <textarea id="comment" 
           value={blogContent}
           onChange={onChange}
           className="h-40 focus:outline-none w-full px-0 text-sm text-gray-900 bg-white " placeholder="Write a comment..." required ></textarea>
       </div>      
       </div>
    </form>
    </div>
}

