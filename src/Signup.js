import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate();

  const validation = () => {
    if (name === "") {
      setNameError("Name cannot be Empty");
      return false;
    }
  
    var emailpattern = /^[^\s@]+\@+[^\s@]+\.[^\s@]+$/;
    if (!emailpattern.test(email)) {
      setEmailError("Invalid Email Address");
      return false;
    }
  
    if (username === "") {
      setUsernameError("UserName cannot be Empty");
      return false;
    }
  
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return false;
    }
  
    if (password !== confirmPassword) {
      setConfirmPasswordError("Password Do Not Match");
      return false;
    }
  
    return (
      name !== "" &&
      emailpattern.test(email) &&
      username !== "" &&
      password.length >= 8 &&
      password === confirmPassword
    );
  };
  
       

        const handleSignup = async () => {
            setNameError("");
            setEmailError("");
            setUsernameError("");
            setPasswordError("");
            setConfirmPasswordError("");
        
            if (validation()) {
              try {
                const response = await fetch("http://localhost:3001/api/signup", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name,
                    email,
                    username,
                    password,
                  }),
                });
        
                if (response.ok) {
                  navigate('/bookworm');
                } else {
                  const data = await response.json();
                  // Handle specific errors or display a generic error message
                  console.error(data.error || "Signup failed");
                }
              } catch (error) {
                console.error("An error occurred during signup:", error);
              }
            }
          };





    return(
        <div id="signup">
            <h1 className="flex justify-center font-bold text-4xl pt-16">SIGNUP</h1>
            <div className="flex justify-center pt-10">
            <input id="name" className="border-2 border-black rounded-xl pl-4 h-10 w-96" type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)} />
            <p className="text-red-800">{nameError}</p>
            </div>
            <div className="flex justify-center pt-10">
            <input id="email" className="border-2 border-black rounded-xl pl-4 h-10 w-96" type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
            <p className="text-red-800">{emailError}</p>
            </div>
            <div className="flex justify-center pt-10">
            <input id="username" className="border-2 border-black rounded-xl pl-4 h-10 w-96" type="text" placeholder="UserName" required onChange={(e) => setUsername(e.target.value)} />
            <p className="text-red-800">{usernameError}</p>
            </div>
            <div className="flex justify-center pt-10 ">
            <input id="password" className="border-2 border-black rounded-xl pl-4 h-10 w-96" type="password" placeholder="Create Password" required onChange={(e) => setPassword(e.target.value)} />
            <p className="text-red-800">{passwordError}</p>
            </div>
            <div className="flex justify-center pt-10">
            <input id="confirmpassword" className="border-2 border-black rounded-xl pl-4 h-10 w-96" type="password" placeholder="confrim Password" required onChange={(e) => setConfirmPassword(e.target.value)} />
            <p className="text-red-800">{confirmPasswordError}</p>
            </div>
            <div className="flex justify-center pt-10 pb-2 ">
            <button type="button" onClick={handleSignup}>SIGNUP</button>
            </div>
            <div className="flex justify-center text-xl pt-2 pb-2 font-semibold">DO YOU HAVE AN ACCOUNT? <a href="/login">Login</a></div>
        </div>
    )
}
export default Signup;