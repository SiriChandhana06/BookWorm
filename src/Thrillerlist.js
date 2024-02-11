import Footer from "./Footer";
import Nav from "./Nav";
import Thrillerapi from "./Thrillerapi";

function Thrillerlist(){
    return(
        <div id="gb">
            <Nav/>
            <Thrillerapi/>
            <Footer/>
        </div>
    )
}
export default Thrillerlist;