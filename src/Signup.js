import { useNavigate } from "react-router-dom";

function Signup(){
    function validation(){
    
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confrimpassword = document.getElementById("confrimpassword").value;
        var name= document.getElementById("name").value;
        var username = document.getElementById("username").value;

        document.getElementById("nameerror").innerText="";
        document.getElementById("usernameerror").innerText="";
        document.getElementById("emailerror").innerText="";
        document.getElementById("passworderror").innerText="";
        document.getElementById("confrimpassworderror").innerText="";
        

        if(name===""){
            document.getElementById("nameerror").innerText="Name cannot be Empty";
            return false;
        }
        var emailpattern = /^[^\s@]+\@+[^\s@]+\.[^\s@]+$/;
        if(!emailpattern.test(email)){
            document.getElementById("emailerror").innerText="Invalid Email Address";
            return false;
        }
        if(username===""){
            document.getElementById("usernameerror").innerText="UserName cannot be Empty";
            return false;
        }
        if(password.length < 8){
            document.getElementById("passworderror").innerText="Password must be atleast 8 characters";
            return false;
        }
        if(password !== confrimpassword){
            document.getElementById("confrimpassworderror").innerText="Password Do Not Match";
            return false;
        }
        return name !== "" && emailpattern.test(email) && username !== "" && password.length >= 8 && password === confrimpassword;
    }



    const navigate = useNavigate();

    const handleSignup = ()=>{
        if (validation()){
            navigate('/bookworm');
        }
    }

    return(
        <div id="signup">
            <h1 className="flex justify-center font-bold text-4xl pt-16">SIGNUP</h1>
            <div className="flex justify-center pt-10">
            <input id="name" className="border-2 border-black rounded-xl pl-4 h-10 w-96" type="text" placeholder="Name" required/>
            <p className="text-red-800" id="nameerror"></p>
            </div>
            <div className="flex justify-center pt-10">
            <input id="email" className="border-2 border-black rounded-xl pl-4 h-10 w-96" type="email" placeholder="Email" required/>
            <p className="text-red-800" id="emailerror"></p>
            </div>
            <div className="flex justify-center pt-10">
            <input id="username" className="border-2 border-black rounded-xl pl-4 h-10 w-96" type="text" placeholder="UserName" required/>
            <p className="text-red-800" id="usernameerror"></p>
            </div>
            <div className="flex justify-center pt-10 ">
            <input id="password" className="border-2 border-black rounded-xl pl-4 h-10 w-96" type="password" placeholder="Create Password" required/>
            <p className="text-red-800" id="passworderror"></p>
            </div>
            <div className="flex justify-center pt-10">
            <input id="confrimpassword" className="border-2 border-black rounded-xl pl-4 h-10 w-96" type="password" placeholder="confrim Password" required/>
            <p className="text-red-800" id="confrimpassworderror"></p>
            </div>
            <div className="flex justify-center pt-10 pb-2 ">
                <button onClick={handleSignup}>SIGNUP</button>
            </div>
            <div className="flex justify-center text-xl pt-2 pb-2 font-semibold">DO YOU HAVE AN ACCOUNT? <a href="/login">Login</a></div>
        </div>
    )
}
export default Signup;