function Loginpage(){
    return(
        <div id="loginpage">
            <h1 className="flex justify-center font-bold text-4xl pt-48">LOGIN</h1>
            <div className="flex justify-center pt-16">
            <input className="border-2 border-black rounded-xl pl-4 h-10 w-96" type="text" placeholder="UserName"/>
            </div>
            <div className="flex justify-center pt-16 ">
            <input className="border-2 border-black  rounded-xl pl-4 h-10 w-96" type="password" placeholder="Password"/>
            </div>
            <div className="flex justify-center pt-16 pb-24">
                <button>LOGIN</button>
            </div>
        </div>
    )
}
export default Loginpage;