import { useNavigate } from "react-router-dom";


function Home(){
    const navigate = useNavigate();
    return(
        <div id="background">
        <div id="home1"> 
           <div id="h">
            <h1 id="home" className="font-bold">BOOK WORM...</h1>
            </div>
            <div id="btn" className="pb-4">
            <button id="odd" onClick={()=>(navigate('/login'))}>Login</button>
            <button id="even" onClick={()=>(navigate('/signup'))}>Signup</button>
            </div>
        </div>
        </div>
    )
}
export default Home;