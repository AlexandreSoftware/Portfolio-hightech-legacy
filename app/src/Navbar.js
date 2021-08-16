import "./css/Navbar.css"

function Navbar(){
    return(
        <div class="main-navbar">
            <span class="btn"><div class="clipped-btn"><a href="http://" target="_blank" rel="noopener noreferrer">Home</a></div></span>
            <span class="btn"><div class="clipped-btn">Projects</div></span>
            <span class="btn"><div class="clipped-btn">About</div></span>
            <span class="btn"><div class="clipped-btn">Contact</div></span>
        </div>
    )
}
export default Navbar;