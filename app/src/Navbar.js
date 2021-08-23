import "./css/Navbar.css"
import Clip_btn from "./Clip_btn"
function Navbar(){
    return(
        <div class="main-navbar">
            <Clip_btn text="Home" link="/home" />
            <Clip_btn text="Projects" link="/projects" />
            <Clip_btn text="About" link="/about" />
            <Clip_btn text="Contact" link="/contact" />
        </div>
    )
}
export default Navbar;