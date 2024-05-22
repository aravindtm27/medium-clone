import { Link } from "react-router-dom"
import { Avatar } from "./Blogcard"

export const Appbar = () => {
    return <div className="border-b flex justify-between py-4 px-10">
        <Link to={'/blogs'}>
        <div className="flex justify-center flex-col">
            Medium
        </div>
        </Link>
        <div>
            <Avatar size={"large"} name="Aravind"/>
        </div>
    </div>
}