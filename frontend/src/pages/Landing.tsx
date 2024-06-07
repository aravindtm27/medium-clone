import { Link } from "react-router-dom"
import { Appbar } from "../components/Appbar"


export const LandingPage = () => {
    return (
        <div >
            <Appbar />
            <div className="bg-slate-50 h-screen">
            <div className="ml-80 flex flex-col">
                <div className="text-9xl mt-32">
                    Human stories
                </div>
                <div className="text-9xl">
                    and ideas
                </div>
                <div className="text-4xl mt-10">
                A place to read, write, and deepen your understanding
                </div>
                <div className="mt-10">
                    <Link to={"/blogs"}>
                    <button type="button" 
            className="text-white mr-6 bg-slate-800 hover:bg-slate-900 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
            Start Reading
            </button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}