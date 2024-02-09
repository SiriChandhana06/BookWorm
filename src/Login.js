import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Loginpage(){
    const navigate = useNavigate();
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('')
    const Log = ()=>{
        if(Username && Password){
            navigate('/bookworm');
        }
    } 
    
    return(
        <div id="loginpage">
            <h1 className="flex justify-center font-bold text-4xl pt-40">LOGIN</h1>
            <div id="1username" className="flex justify-center pt-16">
            <input className="border-2 border-black rounded-xl pl-4 h-10 w-96" type="text" placeholder="UserName" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div id="1password" className="flex justify-center pt-16 ">
            <input className="border-2 border-black  rounded-xl pl-4 h-10 w-96" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="flex justify-center pt-12 pb-2">
            <button onClick={Log}>LOGIN</button>
            </div>
            <div className="flex justify-center text-xl pt-4 pb-20 font-semibold">DON'T HAVE AN ACCOUNT? <a href="/signup">Signup</a></div>
        </div>
    )
}
export default Loginpage;
