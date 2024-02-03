function Signup(){
    return(
        <div id="signup">
            <h1 className="flex justify-center font-bold text-4xl pt-16">SIGNUP</h1>
            <div className="flex justify-center pt-10">
            <input className="border-2 border-black rounded-xl pl-4 h-10 w-96" type="text" placeholder="Name"/>
            </div>
            <div className="flex justify-center pt-10">
            <input className="border-2 border-black rounded-xl pl-4 h-10 w-96" type="email" placeholder="Email"/>
            </div>
            <div className="flex justify-center pt-10">
            <input className="border-2 border-black rounded-xl pl-4 h-10 w-96" type="text" placeholder="UserName"/>
            </div>
            <div className="flex justify-center pt-10 ">
            <input className="border-2 border-black rounded-xl pl-4 h-10 w-96" type="password" placeholder="Create Password"/>
            </div>
            <div className="flex justify-center pt-10">
            <input className="border-2 border-black rounded-xl pl-4 h-10 w-96" type="password" placeholder="confrim Password"/>
            </div>
            <div className="flex justify-center pt-12 pb-10 ">
                <button>SIGNUP</button>
            </div>
        </div>
    )
}
export default Signup;