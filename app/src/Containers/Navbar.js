import "./css/Navbar.css"
import Clip_Btn from "../Components/Clip_Btn"
function Navbar(){
    return(
        <div class="main-navbar">
            <Clip_Btn text="Home" link="/home" />
            <Clip_Btn text="Projects" link="/projects" />
            <Clip_Btn text="About" link="/about" />
            <Clip_Btn text="Contact" link="/contact" />
        </div>
    )
}
export default Navbar;