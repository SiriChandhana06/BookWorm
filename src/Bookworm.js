import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Fantasy from "./Fantasy";
import Thriller from "./Thriller";
import Romantic from "./Romantic";
import Kids from "./Kids";
import Humor from "./Humor";
import Fantasylist from "./Fantasylist";
import { Link } from "react-router-dom";
function Bookworm(){
    const navigate = useNavigate();
    return(
        <div id="gb" className="">
            <Nav/>
            <Header/>
            <br/>
            <br/>
            {/* <Booktype/> */}
            <div id="bt" className="flex ">
            <h1 className="font-bold text-2xl pt-2 pb-2  pl-8">Fantasy</h1>
            <Link to="/fantasylist"><h1 id="arrow" className="font-bold text-4xl">{">"}</h1></Link>
            </div>
            <Fantasy/>
            <div id="bt" className="flex ">
            <h1 className="font-bold text-2xl pt-2 pb-2  pl-8">Thriller</h1>
            <Link to="/thrillerlist"><h1 id="arrow" className="font-bold text-4xl">{">"}</h1></Link>
            </div>
            <Thriller/>
            <div id="bt" className="flex ">
            <h1 className="font-bold text-2xl pt-2 pb-2  pl-8">Romantic</h1>
            <Link to="/romanticlist"><h1 id="arr" className="font-bold text-4xl">{">"}</h1></Link>
            </div>
            <Romantic/>
            <div id="bt" className="flex ">
            <h1 className="font-bold text-2xl pt-2 pb-2  pl-8">Kids</h1>
            <Link to="/kidslist"><h1 id="arro" className="font-bold text-4xl">{">"}</h1></Link>
            </div>
            <Kids/>
            <div id="bt" className="flex ">
            <h1 className="font-bold text-2xl pt-2 pb-2  pl-8">Humor</h1>
            <Link to="/humorlist"><h1 id="arrow" className="font-bold text-4xl">{">"}</h1></Link>
            </div>
            <Humor/>
            <Footer/>
        </div>
    )
}
export default Bookworm;