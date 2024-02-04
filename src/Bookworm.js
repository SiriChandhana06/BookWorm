import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Bookslist from "./Bookslist";
import Booktype from "./Booktype";
function Bookworm(){
    return(
        <div>
            <Nav/>
            <Header/>
            <br/>
            <br/>
            <Booktype/> 
            <Bookslist/>
            <Footer/>
        </div>
    )
}
export default Bookworm;