import { SignupInput } from "@joamon123/medium-common"
import { ChangeEvent, useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"


export const Register = ({type}:{type:"signup"|"signin"}) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup" ? "signup" : "signin"}`,postInputs)
            const jwt = response.data;
            console.log(jwt);
            localStorage.setItem("token",jwt.jwt);
            navigate("/blogs")
        }catch(e){
            alert("error in signin/signup");
        }
    }

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
            <div className="text-3xl flex justify-center font-extrabold">
                {type === "signin" ? "Login" : "Create a new account"}
            </div>
            <div className="flex mt-1">
                {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                <div className="underline ml-2">
                <Link to={type==="signin" ? "/signup": "/signin"}> 
                {type==="signin" ? "Signup" : "Login"}
                </Link>
                </div>
            </div>
                {type==="signup" ? <LabelledInput label="Name" placeholder="Nilad" 
                onChange={(e)=>{
                    setPostInputs(c => ({
                        ...c,
                        name:e.target.value
                    }))
                }} /> : null}
                <LabelledInput label="Email" placeholder="k123@gmail.com" 
                onChange={(e)=>{
                    setPostInputs(c => ({
                        ...c,
                        email:e.target.value
                    }))
                }} />
                <LabelledInput label="Password" type={"password"} placeholder="Abc@123" 
                onChange={(e)=>{
                    setPostInputs(c => ({
                        ...c,
                        password:e.target.value
                    }))
                }} />
                <div className="flex justify-center mt-4">
                <button onClick={sendRequest} className="px-14 py-3 rounded-md bg-slate-700 hover:bg-slate-600 text-white font-bold  border">
                    {type==="signin" ? "Signin" : "Signup"}
                </button>
                </div>
                </div>
            </div>
        </div>
    )
}  

interface LabelledInputType{
    label:string;
    placeholder:string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({label, placeholder, onChange, type}: LabelledInputType){
    return(
        <div className="mt-2">
           <p className="text-slate-700">{label}</p>
            <input onChange={onChange} type={ type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required /> 
        </div>
    )
}