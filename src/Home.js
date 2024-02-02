
function Home(){
    function login(){
        console.log("helo");
    }
    function signup(){
        console.log("hi");
    }
    return(
        <div className="home1"> 
           <div className="h">
            <h1 className="home">BOOK WORM...</h1>
            </div>
            <div className="btn">
            <button className="odd" onClick={login}>Login</button>
            <button className="even"onClick={signup}>Signup</button>
            </div>
        </div>
    )
}
export default Home;