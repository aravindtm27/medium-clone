import { Quote } from "../components/Quote"
import { Register } from "../components/Register"


export const Signup = () => {
  return (
    <div className="grid grid-cols-1 md:grid md:grid-cols-2">
        <div>
            <Register type="signup"/>
        </div>
        <div className="hidden md:block">
        <Quote />
        </div>
    </div>
  )
}


