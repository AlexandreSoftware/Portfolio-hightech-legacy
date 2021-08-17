import "./css/Navbar.css"
import Clip_btn from "./Clip_btn"
function Navbar(){
    return(
        <div class="main-navbar">
            <Clip_btn text="Home" link="javascript:void(0)" />
            <Clip_btn text="Projects" link="javascript:void(0)" />
            <Clip_btn text="About" link="javascript:void(0)" />
            <Clip_btn text="Contact" link="javascript:void(0)" />
        </div>
    )
}
export default Navbar;