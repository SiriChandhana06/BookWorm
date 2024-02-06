import { useNavigate } from "react-router-dom";
function Nav(){
    const navigate = useNavigate();
    return(
        <div>
             <div id="nav" className="flex">
                <h1 className="pt-6 pl-16 font-bold text-2xl">BOOK WORM</h1>
                <div className="flex pl-2 pr-2 gap-3">
                <h3 id="un" className="font-bold text-2xl">Siri</h3>
                <button id="p" className="h-20" onClick={()=>(navigate('/profile'))}><img id="n" className="h-10 w-10" src="https://e7.pngegg.com/pngimages/782/114/png-clipart-profile-icon-circled-user-icon-icons-logos-emojis-users-thumbnail.png"/></button>
                </div>
            </div>
        </div>
    )
}
export default Nav;