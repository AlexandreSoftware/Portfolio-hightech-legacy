import "./css/footer.css"
import Clip_btn from "./Clip_btn"
import Link_btn from "./Link_btn"
function Footer(){
    return (
        <footer class="footer">
            <Clip_btn text="Home" link="javascript:void(0)" />
            <Link_btn text="link" link="https://github.com/xandrf" image={require("./img/GitHub-Mark-Light-120px-plus.png").default}></Link_btn>
            <Link_btn text="link" link="https://www.twitch.tv/xandrf" image={require("./img/TwitchGlitchWhite.svg").default}></Link_btn>
            <Link_btn text="link" link="https://www.linkedin.com/in/carlos-oliveira-8986a7175/" image={require("./img/LI-In-Bug.png").default}></Link_btn>
            <Link_btn text="link" link="https://twitter.com/XandrfDev" image={require("./img/Logo white.svg").default}></Link_btn>
        
        </footer>
    )
}
export default Footer;