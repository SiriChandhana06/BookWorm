import Footer from "./Footer";
import Humorapi from "./Humorapi";
import Nav from "./Nav";

function Humorlist(){
    return(
        <div id="gb">
            <Nav/>
            <Humorapi/>
            <Footer/>
        </div>
    )
}
export default Humorlist;