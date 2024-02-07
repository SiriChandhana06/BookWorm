import Edit from "./Edit";
import Footer from "./Footer";
import Nav from "./Nav";

function Profile(){
    const handleLogout = () => {
        const isConfirmed = window.confirm("Are you sure you want to log out?");
        if (isConfirmed) {
            window.location.href = "/login";
        }
    };
    return(
        <div>
            <div id="gbb">
            <div id="nav" className="flex">
            <h1 className="pt-4 pb-4 pl-16 font-bold text-2xl">BOOK WORM</h1>
            <div id="lo" className="" onClick={handleLogout} >
            <svg id="l" className="" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24"><path fill="currentColor" d="M11.25 19a.75.75 0 0 1 .75-.75h6a.25.25 0 0 0 .25-.25V6a.25.25 0 0 0-.25-.25h-6a.75.75 0 0 1 0-1.5h6c.966 0 1.75.784 1.75 1.75v12A1.75 1.75 0 0 1 18 19.75h-6a.75.75 0 0 1-.75-.75"/><path fill="currentColor" d="M15.612 13.115a1 1 0 0 1-1 1H9.756c-.023.356-.052.71-.086 1.066l-.03.305a.718.718 0 0 1-1.025.578a16.844 16.844 0 0 1-4.885-3.539l-.03-.031a.721.721 0 0 1 0-.998l.03-.031a16.843 16.843 0 0 1 4.885-3.539a.718.718 0 0 1 1.025.578l.03.305c.034.355.063.71.086 1.066h4.856a1 1 0 0 1 1 1z"/></svg>
            </div>
            </div>
            <br/>
            <div className="flex">
            <img id="m" className="h-48 w-76 pl-10 pr-10" src="https://e7.pngegg.com/pngimages/782/114/png-clipart-profile-icon-circled-user-icon-icons-logos-emojis-users-thumbnail.png"/>
            <div className="pt-16">
            <h1 className="font-bold text-2xl">Siri</h1>
            <h2 className="text-xl">Siri_Chandhana_K</h2>
            <h4 className="text-xl">siri@gmail.com</h4>
            </div>
            </div>
            <br/>
            <hr class="border-2 border-solid border-black"/>
            <Edit/>
            <a href="/bookworm"><h1 className="flex justify-center pointer font-bold text-2xl py-4">{'<-'} Back</h1></a>
            <Footer/>
            </div>
        </div>
    )
}
export default Profile;